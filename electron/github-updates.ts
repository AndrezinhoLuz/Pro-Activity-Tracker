import {app,ipcMain} from 'electron';
import {autoUpdater} from 'electron-updater';

ipcMain.handle('update:check-github',async()=>{
  if(!app.isPackaged)throw new Error('Updates are available in the installed app.');
  await autoUpdater.checkForUpdates();
  return true;
});

app.whenReady().then(()=>{
  if(!app.isPackaged)return;

  setTimeout(()=>{
    autoUpdater.autoDownload=true;
    autoUpdater.autoInstallOnAppQuit=true;
    void autoUpdater.checkForUpdates().catch(error=>{
      console.error('Automatic update check failed:',error);
    });
  },3000);
});
