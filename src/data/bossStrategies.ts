export type BossStrategy={
  label:string;
  approach:string;
  usesDefault?:boolean;
  notes?:string[];
  team?:string[];
  steps?:string[];
};

export const defaultBossStrategy={

  steps:[
    'Lead with Whimsicott and use Switcheroo; use Memento if it survives.',
    'Send in Shuckle and use Sweet Scent, then Stealth Rock, then Flash if it survives.',
    'With Golduck, use Hypnosis and Substitute. Repeat them if the opponent wakes; while it sleeps, use Flash until its accuracy has been lowered six times.',
    'Let Golduck faint or use Hypnosis before switching to a sweeper. Set up three Swords Dances (or Shell Smashes) behind Substitute. Protect can recover HP with Leftovers.',
    'Baton Pass to Pangoro while behind Substitute, then use Power Trip.'
  ],
};

export const defaultBannetBossStrategy={

  steps:[
    'Start with bannet if he swaps for other Pokemon, use Phantom force or Sucker Punch or other attack you prefer, just let Banette die on second Pokemon Boss.',
    'send in Whimsicott and use Switcheroo; use Memento if it survives.',
    'Send in Shuckle and use Sweet Scent, then Stealth Rock, then Flash if it survives.',
    'With Golduck, use Hypnosis and Substitute. Repeat them if the opponent wakes; while it sleeps, use Flash until its accuracy has been lowered six times.',
    'Let Golduck faint or use Hypnosis before switching to a sweeper. Set up three Swords Dances (or Shell Smashes) behind Substitute. Protect can recover HP with Leftovers.',
    'Baton Pass to Pangoro while behind Substitute, then use Power Trip.'
  ],
};

export const bossStrategies:Record<string,BossStrategy>={
  ashwestbrook:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  battlebot:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  brock:{label:'Banette + DEFAULT',approach:'Mega Banette + default strategy.',usesDefault:true},
  bruno:{label:'Banette + DEFAULT',approach:'Mega Banette + default strategy.',usesDefault:true,notes:['Use Earthquake on the last Pokémon.']},
  bugsy:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  chuck:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  cie:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  erika:{label:'Custom team',approach:'Use Whimsicott, Shuckle, Golduck, Klefki, Volcarona, and Slowbro.',team:['Whimsicott, Shuckle, and Golduck follow the default strategy. Replace Ninjask with Klefki.','Klefki: Prankster, Bold or another defensive nature, Light Clay; Light Screen, Reflect, Thunder Wave, and Spikes. Use Reflect against Ferrothorn or Light Screen against a special attacker.','Volcarona: Timid, Leftovers; Roost, Quiver Dance, Fiery Dance, and Bug Buzz. Use Quiver Dance six times, Roost to recover HP, then mainly Fiery Dance. Use Bug Buzz against the opposing Volcarona.']},
  gamerspewdieanddiepy:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  george:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  gingeryjones:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  guardianentei:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  guardianraikou:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  guardiansuicune:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  jessieandjames:{label:'DEFAULT + Pikachu',approach:'Default strategy + Pikachu in place of the second sweeper.',usesDefault:true,notes:['Pikachu is listed as a requirement to fight this boss.']},
  klohver:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  koichi:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  lance:{label:'DEFAULT + Dragon',approach:'Default strategy + one Dragon Pokémon in place of the second sweeper.',usesDefault:true,notes:['A Dragon Pokémon is listed as a requirement to fight this boss.']},
  letrix:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  link:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  logan:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  lorelei:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  ltsurge:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  maribela:{label:'DEFAULT · Lv.100',approach:'Default strategy; all Pokémon must be level 100.',usesDefault:true},
  medusaandeldir:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  misty:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  morty:{label:'Banette + DEFAULT',approach:'Mega Banette + default strategy.',usesDefault:true},
  naero:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  narutofanboy:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  neroli:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  officerjenny:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  officershamac:{label:'Banette + DEFAULT',approach:'Mega Banette + default strategy.',usesDefault:true},
  prehax:{label:'No completed strategy',approach:'The author does not provide a completed strategy.',notes:['The team must contain only two Pokémon, and all Fighting moves are banned.']},
  professorbirch:{label:'Banette + DEFAULT',approach:'Mega Banette + default strategy.',usesDefault:true,notes:['Use Destiny Bond to remove Medicham before continuing with the default strategy.']},
  professorelm:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  professoroak:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  professorrowan:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  sage:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  saphirr:{label:'DEFAULT + Fire',approach:'Default strategy + one Fire Pokémon in place of the second sweeper.',usesDefault:true,notes:['A Fire Pokémon is listed as an additional team requirement.']},
  sharyandshaui:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  spectify:{label:'Banette + DEFAULT',approach:'Mega Banette + default strategy.',usesDefault:true},
  steven:{label:'Custom team',approach:'Steven strategy.',team:['Use Klefki, Shuckle, Golduck, Ninjask, Slowbro, and one additional Steel Pokémon. Steven requires two Steel Pokémon.','Klefki: Prankster, Bold or another defensive nature, Light Clay; Reflect, Light Screen, Thunder Wave, and Spikes. Start with Reflect and Spikes until it faints.','Switch to Shuckle and use Flash until it faints; then use Golduck to Flash until it faints.','Slowbro: Relaxed, Regenerator, Slowbronite; Calm Mind, Iron Defense, Slack Off, and Surf. Mega Evolve, use Iron Defense three times and Calm Mind six times. Use Slack Off when below 70% HP, then use Surf against the opposing team.']},
  terminator:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  thepumpking:{label:'Banette + DEFAULT',approach:'Mega Banette + default strategy.',usesDefault:true},
  thor:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true,notes:['Use Rock Slide against Zapdos instead of Power Trip.']},
  tigerous:{label:'Banette + DEFAULT',approach:'Mega Banette + default strategy.',usesDefault:true},
  toothless:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true},
  urahara:{label:'DEFAULT · Lv.100',approach:'Default strategy; all Pokémon must be level 100.',usesDefault:true,notes:['The second Pokémon needs a hazard move and Sweet Scent.']},
  xylos:{label:'DEFAULT',approach:'Default strategy.',usesDefault:true}
};