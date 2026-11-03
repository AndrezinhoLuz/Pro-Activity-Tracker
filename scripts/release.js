const {createHash}=require('node:crypto');
const {readFile,stat,writeFile}=require('node:fs/promises');
const {spawn}=require('node:child_process');
const {join}=require('node:path');

const apiBase='https://api.github.com/repos/AndrezinhoLuz/Pro-Activity-Tracker';
const outputDirectory=join(process.cwd(),'release');

function promptForToken(){
  const input=process.stdin;
  if(!input.isTTY||typeof input.setRawMode!=='function'){
    throw new Error('No interactive terminal is available. Set a valid GH_TOKEN or GITHUB_TOKEN and try again.');
  }

  process.stdout.write('GitHub token (input hidden; paste or type it, then press Enter): ');
  input.setRawMode(true);
  input.resume();

  return new Promise((resolve,reject)=>{
    let token='';
    const finish=(error)=>{
      input.removeListener('data',onData);
      input.setRawMode(false);
      input.pause();
      process.stdout.write('\n');
      if(error)reject(error);
      else resolve(token);
    };
    const onData=(chunk)=>{
      for(const byte of chunk){
        if(byte===3){
          finish(new Error('Release cancelled.'));
          return;
        }
        if(byte===10||byte===13){
          finish();
          return;
        }
        if(byte===8||byte===127){
          token=token.slice(0,-1);
        }else if(byte>=32&&byte<=126){
          token+=String.fromCharCode(byte);
        }
      }
    };
    input.on('data',onData);
  });
}

async function githubRequest(path,token,{method='GET',body,allowNotFound=false,headers={}}={}){
  let response;
  try{
    response=await fetch(`${apiBase}${path}`,{
      method,
      headers:{
        Accept:'application/vnd.github+json',
        Authorization:`Bearer ${token}`,
        'X-GitHub-Api-Version':'2022-11-28',
        ...(body?{'Content-Type':'application/json'}:{}),
        ...headers
      },
      body:body?JSON.stringify(body):undefined,
      signal:AbortSignal.timeout(30000)
    });
  }catch(error){
    throw new Error(`GitHub request failed: ${error.message}`);
  }

  if(allowNotFound&&response.status===404)return null;
  const text=await response.text();
  let result;
  try{result=text?JSON.parse(text):{};}catch{result={message:text};}
  if(!response.ok){
    const detail=result.errors?.map(error=>error.message||error.code).join('; ');
    throw new Error(`GitHub returned HTTP ${response.status}: ${detail||result.message||response.statusText}`);
  }
  return result;
}

async function validateToken(token){
  let repository;
  try{
    repository=await githubRequest('',token);
  }catch(error){
    if(error.message.includes('HTTP 401'))return{problem:'GitHub rejected this token. Check that it is valid and not expired.'};
    if(error.message.includes('HTTP 403'))return{problem:'GitHub denied access. Give the token Contents: Read and write permission for this repository.'};
    throw error;
  }

  if(repository.permissions?.push!==true){
    return{problem:'This token does not have write access to the repository. Grant Contents: Read and write permission.'};
  }
  return{repository};
}

function runNpm(args,env){
  return new Promise((resolve,reject)=>{
    const npmExecPath=process.env.npm_execpath;
    const child=npmExecPath
      ?spawn(process.execPath,[npmExecPath,...args],{stdio:'inherit',env})
      :spawn(process.platform==='win32'?'npm.cmd':'npm',args,{stdio:'inherit',env,shell:process.platform==='win32'});
    child.once('error',reject);
    child.once('exit',(code,signal)=>{
      if(code===0)resolve();
      else reject(new Error(signal?`npm ${args[0]} terminated by ${signal}.`:`npm ${args[0]} failed with exit code ${code}.`));
    });
  });
}

async function promptAndValidateToken(env){
  let token=env.GH_TOKEN||env.GITHUB_TOKEN;
  while(true){
    if(!token)token=await promptForToken();
    if(!token.trim())throw new Error('A GitHub token is required to publish a release.');

    const validation=await validateToken(token);
    if(validation.repository){
      env.GH_TOKEN=token;
      return validation.repository;
    }
    if(!process.stdin.isTTY||typeof process.stdin.setRawMode!=='function'){
      throw new Error(`${validation.problem} Set a valid GH_TOKEN or GITHUB_TOKEN and try again.`);
    }
    console.error(validation.problem);
    token=undefined;
  }
}

function nextPatch(version){
  const match=/^(\d+)\.(\d+)\.(\d+)$/.exec(version);
  if(!match)throw new Error(`Expected a three-part package version, received "${version}".`);
  return`${match[1]}.${match[2]}.${Number(match[3])+1}`;
}

async function nextUnusedVersion(version,token){
  let candidate=nextPatch(version);
  for(let attempts=0;attempts<100;attempts++){
    const tag=await githubRequest(`/git/ref/tags/${encodeURIComponent(candidate)}`,token,{allowNotFound:true});
    if(!tag)return candidate;
    candidate=nextPatch(candidate);
  }
  throw new Error('Could not find an unused patch version after 100 attempts.');
}

async function createLatestManifest(version){
  const installerName=`PRO.Activity.Tracker.Setup.${version}.exe`;
  const installerPath=join(outputDirectory,installerName);
  const blockmapPath=`${installerPath}.blockmap`;
  const [installerInfo]=await Promise.all([stat(installerPath),stat(blockmapPath)]);
  const installer=await readFile(installerPath);
  const sha512=createHash('sha512').update(installer).digest('base64');
  const releaseDate=new Date().toISOString();
  const manifest=[
    `version: ${version}`,
    'files:',
    `  - url: ${installerName}`,
    `    sha512: ${sha512}`,
    `    size: ${installerInfo.size}`,
    `path: ${installerName}`,
    `sha512: ${sha512}`,
    `releaseDate: '${releaseDate}'`,
    ''
  ].join('\n');
  await writeFile(join(outputDirectory,'latest.yml'),manifest,'utf8');
}

async function createOrGetRelease(version,token,defaultBranch){
  const encodedVersion=encodeURIComponent(version);
  const existing=await githubRequest(`/releases/tags/${encodedVersion}`,token,{allowNotFound:true});
  if(existing)return existing;

  try{
    return await githubRequest('/releases',token,{
      method:'POST',
      body:{
        tag_name:version,
        target_commitish:defaultBranch,
        name:version,
        draft:false,
        prerelease:false
      }
    });
  }catch(error){
    const releaseAfterError=await githubRequest(`/releases/tags/${encodedVersion}`,token,{allowNotFound:true});
    if(releaseAfterError)return releaseAfterError;
    throw new Error(`Could not create GitHub Release ${version}: ${error.message}`);
  }
}

async function uploadAsset(release,assetName,token){
  const assetPath=join(outputDirectory,assetName);
  const bytes=await readFile(assetPath);
  const digest=`sha256:${createHash('sha256').update(bytes).digest('hex')}`;
  const assets=await githubRequest(`/releases/${release.id}/assets?per_page=100`,token);
  const existing=assets.find(asset=>asset.name===assetName);
  if(existing?.digest===digest){
    console.log(`Already uploaded: ${assetName}`);
    return;
  }
  if(existing){
    await githubRequest(`/releases/assets/${existing.id}`,token,{method:'DELETE'});
  }

  const uploadUrl=release.upload_url.replace(/\{\?.*$/,'');
  let response;
  try{
    response=await fetch(`${uploadUrl}?name=${encodeURIComponent(assetName)}`,{
      method:'POST',
      headers:{
        Accept:'application/vnd.github+json',
        Authorization:`Bearer ${token}`,
        'Content-Type':'application/octet-stream',
        'Content-Length':String(bytes.length),
        'X-GitHub-Api-Version':'2022-11-28'
      },
      body:bytes,
      signal:AbortSignal.timeout(10*60*1000)
    });
  }catch(error){
    throw new Error(`Could not upload ${assetName}: ${error.message}`);
  }

  const text=await response.text();
  if(!response.ok){
    let detail=text;
    try{detail=JSON.parse(text).message||text;}catch{}
    throw new Error(`GitHub failed to upload ${assetName} (HTTP ${response.status}): ${detail}`);
  }
  console.log(`Uploaded: ${assetName}`);
}

async function publishRelease(version,token,defaultBranch){
  await createLatestManifest(version);
  const release=await createOrGetRelease(version,token,defaultBranch);
  const assets=[
    `PRO.Activity.Tracker.Setup.${version}.exe`,
    `PRO.Activity.Tracker.Setup.${version}.exe.blockmap`,
    'latest.yml'
  ];
  for(const asset of assets)await uploadAsset(release,asset,token);
  console.log(`Published GitHub Release ${version}: ${release.html_url}`);
}

async function publishExisting(version,token,defaultBranch){
  if(!/^\d+\.\d+\.\d+$/.test(version||'')){
    throw new Error('Pass the existing version, for example: npm.cmd run publish:release -- 1.0.59');
  }
  await publishRelease(version,token,defaultBranch);
}

async function main(){
  const env={...process.env};
  const repository=await promptAndValidateToken(env);
  const args=process.argv.slice(2);
  if(args[0]==='--publish-existing'){
    await publishExisting(args[1],env.GH_TOKEN,repository.default_branch);
    return;
  }
  if(args.length)throw new Error(`Unknown release option: ${args[0]}`);

  const packageJson=require(join(process.cwd(),'package.json'));
  const version=await nextUnusedVersion(packageJson.version,env.GH_TOKEN);
  await runNpm(['version',version,'--no-git-tag-version'],env);
  await runNpm(['run','build','--','--publish','never'],env);
  await publishRelease(version,env.GH_TOKEN,repository.default_branch);
}

main().catch(error=>{
  console.error(error.message);
  process.exitCode=1;
});
