export type Drops={items:string[];pokemon:string[];itemNote?:string;wiki:string};
const digWiki='https://wiki.pokemonrevolution.net/Diggable_Patches';
const siteWiki='https://wiki.pokemonrevolution.net/';
export const drops:Record<string,Drops>={
 'dig-diglett-s-cave':{wiki:digWiki,items:['Pokéball','Flying Gem','Potion','Fresh Water','Dawn Stone','Dusk Stone','Sun Stone','Level Ball','Carbos','Helix Fossil','Dome Fossil','Icicle Plate'],pokemon:['Diglett','Dugtrio','Drilbur']},
 'dig-route-3':{wiki:digWiki,items:['Pokéball','Bug Gem','Nugget','Hyper Potion','Sun Stone','Hard Stone','Leftovers','Iron','Old Amber','Helix Fossil','Pixie Plate'],pokemon:['Geodude','Rhyhorn','Aron']},
 'dig-route-14':{wiki:digWiki,items:['Pokéball','Fighting Gem','Potion','Fresh Water','Dawn Stone','Sun Stone','Level Ball','Carbos','Helix Fossil','Dome Fossil','Sky Plate'],pokemon:['Geodude','Graveler','Trapinch']},
 'dig-route-15':{wiki:digWiki,items:['Pokéball','Fire Gem','Revival Herb','Super Potion','Reaper Cloth','Level Ball','Nest Ball','Calcium','Helix Fossil','Dome Fossil','Flame Plate'],pokemon:['Geodude','Onix','Bronzor']},
 'dig-mt-moon-1f':{wiki:digWiki,items:['Pokéball','Dark Gem','Stardust','Rare Candy','Hard Stone','Moon Stone','Sun Stone','Carbos','Old Amber','Helix Fossil','Draco Plate','Dragon Gem','Revive','Moon Ball','Net Ball','Iron','Dread Plate'],pokemon:['Geodude','Rhyhorn','Honedge','Onix','Stunfisk','Larvitar']},
 'dig-mt-moon-b2f':{wiki:digWiki,items:['Pokéball','Dragon Gem','Rare Candy','Revive','Moon Stone','Moon Ball','Net Ball','Iron','Old Amber','Helix Fossil','Dread Plate'],pokemon:['Onix','Stunfisk','Larvitar']},
 'dig-rock-tunnel-1f':{wiki:digWiki,items:['Pokéball','Electric Gem','Nugget','Rare Candy','Level Ball','Net Ball','Moon Ball','Carbos','Old Amber','Helix Fossil','Earth Plate','Fairy Gem','Star Piece','Revive','Hard Stone','Moon Stone','Leftovers','Iron','Dome Fossil','Fist Plate'],pokemon:['Diglett','Graveler','Baltoy','Bronzor','Aron']},
 'dig-rock-tunnel-b1f':{wiki:digWiki,items:['Pokéball','Fairy Gem','Star Piece','Revive','Hard Stone','Moon Stone','Leftovers','Iron','Dome Fossil','Helix Fossil','Fist Plate'],pokemon:['Bronzor','Baltoy','Aron']},
 'dig-dark-cave-south':{wiki:digWiki,items:['Pokéball','Ground Gem','Soda Pop','Paralyze Heal','Reaper Cloth','Leftovers','Lure Ball','Calcium','Root Fossil','Claw Fossil','Meadow Plate'],pokemon:['Onix','Nosepass','Honedge']},
 'dig-mt-mortar':{wiki:digWiki,items:['Pokéball','Ice Gem','Stardust','Revival Herb','Lure Ball','Sun Stone','Dawn Stone','Protein','Root Fossil','Claw Fossil','Splash Plate'],pokemon:['Geodude','Stunfisk','Drilbur']},
 'dig-slowpoke-well-1f':{wiki:digWiki,items:['Pokéball','Ghost Gem','Nugget','Soda Pop','Fast Ball','Nest Ball','Leftovers','Calcium','Root Fossil','Claw Fossil','Insect Plate','Grass Gem','Potion','Paralyze Heal','Dusk Stone','Friend Ball','Protein','Iron Plate'],pokemon:['Geodude','Stunfisk','Roggenrola','Phanpy','Hippopotas']},
 'dig-slowpoke-well-l1':{wiki:digWiki,items:['Pokéball','Grass Gem','Potion','Paralyze Heal','Leftovers','Dusk Stone','Friend Ball','Protein','Root Fossil','Claw Fossil','Iron Plate'],pokemon:['Geodude','Phanpy','Hippopotas']},
 'dig-water-path':{wiki:digWiki,items:['Pokéball','Rare Candy','Full Restore','Full Heal','Everstone','Oval Stone','Lure Ball','HP Up','Root Fossil','Sail Fossil','Macho Brace'],pokemon:['Diglett','Trapinch','Roggenrola']},
 'dig-tanoby-key':{wiki:digWiki,items:['Pokéball','Rare Candy','Ice Heal','Paralyze Heal','Everstone','Repeat Ball','Dawn Stone','PP Max','Helix Fossil','Sail Fossil','Macho Brace'],pokemon:['Graveler','Baltoy','Larvitar']},
 'dig-maniac-tunnel':{wiki:digWiki,items:['Pokéball','Normal Gem','Ether','Antidote','Ultra Ball','Friend Ball','Reaper Cloth','Zinc','Jaw Fossil','Sail Fossil','Spooky Plate'],pokemon:['Onix','Phanpy','Larvitar']},
 'dig-mt-coronet-summit':{wiki:digWiki,items:['Pokéball','Poison Gem','Antidote','Ice Heal','Everstone','Leftovers','Soft Sand','Zinc','Jaw Fossil','Sail Fossil','Stone Plate'],pokemon:['Graveler','Baltoy','Drilbur']},
 'dig-oreburgh-gate-b1f':{wiki:digWiki,items:['Pokéball','Psychic Gem','Elixir','Ice Heal','Dawn Stone','Ultra Ball','Net Ball','PP Up','Jaw Fossil','Sail Fossil','Toxic Plate'],pokemon:['Stunfisk','Nosepass','Roggenrola']},
 'dig-ravaged-path':{wiki:digWiki,items:['Pokéball','Rock Gem','Stardust','Burn Heal','Dusk Stone','Soft Sand','Net Ball','HP Up','Jaw Fossil','Sail Fossil','Zap Plate'],pokemon:['Sandshrew','Phanpy','Aron']},
 'dig-route-209':{wiki:digWiki,items:['Pokéball','Steel Gem','Nugget','Burn Heal','Everstone','Great Ball','Repeat Ball','PP Up','Jaw Fossil','Sail Fossil','Mind Plate'],pokemon:['Sandshrew','Nosepass','Trapinch']},
 'dig-route-210-north':{wiki:digWiki,items:['Pokéball','Water Gem','Elixir','Awakening','Oval Stone','Dawn Stone','Soft Sand','PP Max','Jaw Fossil','Sail Fossil','Big Nugget'],pokemon:['Sandshrew','Phanpy','Hippopotas']},
 'dig-route-211':{wiki:digWiki,items:['Pokéball','Rare Candy','Full Heal','Full Restore','Oval Stone','Great Ball','Repeat Ball','PP Max','Jaw Fossil','Sail Fossil','Macho Brace'],pokemon:['Graveler','Baltoy','Honedge']}
};

export const excavationItemPoints:Record<string,number|null>={
 'Revival Herb':1000,'Heal Powder':null,'Energy Powder':null,
 'Old Amber':4000,'Dome Fossil':4000,'Sail Fossil':4000,'Root Fossil':4000,'Skull Fossil':4000,
 'Tiny Mushroom':2000,'Stardust':2000,'Rare Bone':2000,'Pearl':2000,'Big Mushroom':2000,'Nugget':2000,'Star Piece':2000,'Big Pearl':2000,'Big Nugget':2000
};
export const excavationSites=[
 {id:'excavation-haunted-site',requiredDiscoveries:0,unlockInfo:'5000 Discovery Points: Sucker Punch tutor',name:'Haunted Site',location:'Rusturf Tunnel',pokemon:['Gastly','Alolan Rattata','Alolan Marowak','Dhelmise','Mimikyu','Phantump','Rotom','Sandygast'],items:['Tiny Mushroom','Revival Herb','Heal Powder','Energy Powder','Old Amber','Dome Fossil'],shinyPokemon:['Gastly','Shuppet','Yamask'],shinyItems:[],wiki:siteWiki+'Haunted_Site'},
 {id:'excavation-mineral-site',requiredDiscoveries:0,unlockInfo:'5000 Discovery Points: Explosion tutor',name:'Mineral Site',location:'Route 115',pokemon:['Alolan Geodude','Beldum','Durant','Larvitar','Mudbray','Rockruff','Roggenrola','Togedemaru'],items:['Stardust','Revival Herb','Heal Powder','Energy Powder','Sail Fossil'],shinyPokemon:['Beldum','Bronzor','Solrock'],shinyItems:['Heal Powder'],wiki:siteWiki+'Mineral_Site'},
 {id:'excavation-feral-site',requiredDiscoveries:0,unlockInfo:'2400 Discovery Points: Gingery Jones boss (requires six level 100 Pokemon)',name:'Feral Site',location:'Fiery Path',pokemon:['Alolan Grimer','Alolan Meowth','Houndour','Litten','Numel','Salandit','Stunky','Turtonator'],items:['Rare Bone','Revival Herb','Heal Powder','Energy Powder'],shinyPokemon:['Cubone','Growlithe'],shinyItems:['Energy Powder'],wiki:siteWiki+'Feral_Site'},
 {id:'excavation-glacial-site',requiredDiscoveries:0,unlockInfo:'Glacial rank titles track Discovery Points; the wiki lists its unlocks as complete at 6000 points',name:'Glacial Site',location:'Route 103',pokemon:['Alolan Sandshrew','Alolan Vulpix','Crabrawler','Popplio','Shellder','Snorunt','Snover','Vanillite'],items:['Pearl','Revival Herb','Heal Powder','Energy Powder'],shinyPokemon:['Swinub'],shinyItems:[],wiki:siteWiki+'Glacial_Site'},
 {id:'excavation-natural-site',requiredDiscoveries:0,unlockInfo:'5000 Discovery Points: Super Fang tutor',name:'Natural Site',location:'Route 119A',pokemon:['Alolan Exeggutor','Bounsweet','Fomantis','Petilil','Pineco','Rowlet','Sewaddle','Weedle'],items:['Big Mushroom','Revival Herb','Heal Powder','Energy Powder','Skull Fossil'],shinyPokemon:['Burmy','Karrablast','Tangela'],shinyItems:['Skull Fossil'],wiki:siteWiki+'Natural_Site'},
 {id:'excavation-historical-site',requiredDiscoveries:0,unlockInfo:'6000 Discovery Points: fossil revival and Briny Site access',name:'Historical Site',location:'Route 111 Desert',pokemon:['Alolan Diglett','Mankey','Meditite','Mienfoo','Passimian','Scraggy','Stufful','Yungoos'],specialPokemon:['Omanyte','Kabuto','Aerodactyl','Anorith','Lileep','Cranidos','Shieldon','Tyrunt','Amaura'],items:['Nugget','Revival Herb','Heal Powder','Energy Powder','Root Fossil'],shinyPokemon:['Machop','Heracross'],shinyItems:['Heal Powder'],wiki:siteWiki+'Historical_Site'},
 {id:'excavation-wondrous-site',requiredDiscoveries:3000,unlockInfo:'Unlocks at 3000 Discovery Points',name:'Wondrous Site',location:'Route 114',pokemon:['Alolan Raichu','Clefairy','Comfey','Jigglypuff','Morelull','Oranguru','Ralts','Togepi'],items:['Star Piece','Revival Herb','Heal Powder','Energy Powder'],shinyPokemon:[],shinyItems:[],wiki:siteWiki+'Wondrous_Site'},
 {id:'excavation-briny-site',requiredDiscoveries:6000,unlockInfo:'Unlocks at 6000 Discovery Points',name:'Briny Site',location:'Route 124',pokemon:['Barboach','Binacle','Lotad','Mareanie','Pyukumuku','Staryu','Surskit','Wimpod'],items:['Big Pearl','Revival Herb','Heal Powder','Energy Powder'],shinyPokemon:['Alomomola'],shinyItems:[],wiki:siteWiki+'Briny_Site'},
 {id:'excavation-draconic-site',requiredDiscoveries:10000,unlockInfo:'Unlocks at 10000 Discovery Points',name:'Draconic Site',location:'Route 113',pokemon:['Drampa','Goomy','Horsea','Jangmo-o','Rhyhorn','Skrelp','Swablu','Trapinch'],items:['Big Nugget','Revival Herb','Heal Powder','Energy Powder'],shinyPokemon:[],shinyItems:[],wiki:siteWiki+'Draconic_Site'}
];

export const bugContestTiers=[
 {tier:1,score:50,pokemon:[['Caterpie',10],['Ledyba',165],['Paras',46],['Spinarak',167],['Venonat',48],['Wurmple',265],['Weedle',13]]},
 {tier:2,score:75,pokemon:[['Combee',415],['Illumise',314],['Kricketot',401],['Scatterbug',664],['Volbeat',313],['Yanma',193],['Grubbin',736]]},
 {tier:3,score:100,pokemon:[['Burmy',412],['Dwebble',557],['Joltik',595],['Nincada',290],['Dewpider',751]]},
 {tier:4,score:130,pokemon:[['Cutiefly',742],['Heracross',214],['Larvesta',636],['Pinsir',127],['Scyther',123]]}
] as const;
export const bugRewards={
 first:{cash:'25,000',coins:3,items:[['Life Orb',1],['Rare Candy',6],['Focus Sash',6],['PP Up',6],['Toxic Orb',1],['Master Ball',1],['S Snom Hat',1],['Samurai Helmet',1],['Golden Bug Net',1]],pokemon:['Heracross','Pinsir','Scyther']},
 second:{cash:'15,000',coins:2,items:[['Samurai Clothes Blue',1],['Samurai Clothes Green',1],['Samurai Clothes Red',1],['Samurai Helmet',1],['Rare Candy',4],['Focus Sash',4],['PP Up',4],['Ultra Ball',10],['Scope Lens',1],['Wide Lens',1]],pokemon:['Pineco','Venipede','Shelmet']},
 third:{cash:'7,500',coins:1,items:[['Rare Candy',2],['Focus Sash',1],['PP Up',2],['Quick Claw',1],['Wise Glasses',1],['Muscle Band',1],['Great Ball',6],['Beautifly Wings',1],['Dustox Wings',1],['Beedrill Wings',1]],pokemon:[]},
 extras:[{name:'Volcarona Wings',item:'Volcarona Wings',description:'One-time reward at 290+ score (400+ if the submitted Pokemon is shiny).'},{name:'Golden Bug Net',item:'Golden Bug Net',description:'Chance to receive it at 230+ score.'},{name:'Genesect',dex:649,description:'Chance to encounter it after submitting a Pokemon with 140+ total IVs.'},{name:'Mega Stones',items:['Beedrillite','Pinsirite','Heracronite'],description:'Requires the Mega Bracelet. Win 3 contests per stone; wins need not be consecutive. Each stone is a random, one-time reward.'}]
};
export const pokestopItems=['Poké Ball','Great Ball','Ultra Ball','Repel','Super Repel','Max Repel','Revive','Ether','Max Ether','PP Up','PP Max','Rare Candy','Potion','Super Potion','Hyper Potion','Max Potion','Full Heal','Full Restore','TM45 - Thunder Wave (Power Plant only)','TM24 - Thunderbolt (Power Plant only)','Exp. Candy XS','Exp. Candy S','Exp. Candy M','Exp. Candy L','Exp. Candy XL'];

export const celadonRewards=[
 ['Focus Sash','Air Balloon','Red Card','Eject Button','Escape Rope','Repel','Revive'],
 ['Liechi Berry','Ganlon Berry','Salac Berry','Petaya Berry','Apicot Berry'],
 ['Electric Seed','Grassy Seed','Misty Seed','Psychic Seed'],
 ['Pomeg Berry','Kelpsy Berry','Qualot Berry','Hondew Berry','Tamato Berry','Grepa Berry'],
 ['HP Up','Protein','Iron','Calcium','Zinc','Carbos','PP Up'],
 ['Goomy Ball','Pachirisu Ball','Ralts Ball','Rowlet Ball','Snorlax Ball','Spheal Ball','Wail Ball','Swail Ball'],
 ['Reroll Shard + one choice: Dome Fossil, Helix Fossil, Old Amber, Silver Disc']
];
export const celadonQuantities=['1–5 each','1–6 each','1–5 each','1–10 each','1–5 each','1–3 each','1 chosen fossil/disc + 1 shard'];
export const newsRewards=[
 ['Poké Ball ×15'],['Ultra Ball ×10'],['Revival Herb ×5 OR Max Repel ×15'],['Rare Candy ×2'],['Focus Sash ×5 OR PP Up ×5'],['Master Ball ×1'],['Reroll Ticket OR Nature Reroll Ticket OR Small Train Ticket']
];

export const diggingMembersOnly=new Set(['Drilbur','Aron','Trapinch','Bronzor','Honedge','Larvitar','Baltoy','Roggenrola','Hippopotas']);
