export type BossStrategy={
  approach:string;
  usesDefault?:boolean;
  notes?:string[];
  team?:string[];
  steps?:string[];
};

export const defaultBossStrategy={
  team:[
    'Whimsicott: Prankster, Lagging Tail, Switcheroo, Memento, and Cotton Spore. The author says its nature is not very important.',
    'Shuckle: Sturdy, Sweet Scent, Stealth Rock, and Flash. No training is needed for the usual strategy; another Sturdy Pokémon with Sweet Scent and a hazard move can substitute.',
    'Golduck: Cloud Nine, Timid, Leftovers; Hypnosis, Substitute, Flash, and Simple Beam. Its screenshot shows 252 HP / 252 Speed / 6 Defense EVs.',
    'Ninjask: Speed Boost, Jolly, Leftovers; Protect, Substitute, Swords Dance, and Baton Pass. The author corrects its EVs to 252 Speed / 252 HP / 6 Defense.',
    'Gorebyss: Swift Swim, Jolly, Leftovers; Substitute, Shell Smash, Aqua Ring, and Baton Pass. Use it as the backup sweeper.',
    'Pangoro: Mold Breaker, Adamant, Focus Sash; train Attack and Speed. Its screenshot shows Power Trip, Earthquake, Rock Slide, and Bullet Punch, with 252 Attack / 252 Speed / 4 HP EVs.'
  ],
  steps:[
    'Lead with Whimsicott and use Switcheroo; use Memento if it survives.',
    'Send in Shuckle and use Sweet Scent, then Stealth Rock, then Flash if it survives.',
    'With Golduck, use Hypnosis and Substitute. Repeat them if the opponent wakes; while it sleeps, use Flash until its accuracy has been lowered six times.',
    'Let Golduck faint or use Hypnosis before switching to a sweeper. Set up three Swords Dances (or Shell Smashes) behind Substitute. Protect can recover HP with Leftovers.',
    'Baton Pass to Pangoro while behind Substitute, then use Power Trip.'
  ],
  warning:'Some bosses that open with Mega Pokémon can make Switcheroo fail and flinch Shuckle before Sweet Scent; Mega Swampert using Waterfall is the example. For a Mega opener, use Mega Banette with Banettite and Destiny Bond on the Mega Pokémon first. If the boss switches, attack with Phantom Force, Sucker Punch, or another move, let Banette faint, then follow the default strategy.'
};

export const bossStrategies:Record<string,BossStrategy>={
  ashwestbrook:{approach:'Default strategy.',usesDefault:true},
  battlebot:{approach:'Default strategy.',usesDefault:true},
  brock:{approach:'Mega Banette + default strategy.',usesDefault:true},
  bruno:{approach:'Mega Banette + default strategy.',usesDefault:true,notes:['Use Earthquake on the last Pokémon.']},
  bugsy:{approach:'Default strategy.',usesDefault:true},
  chuck:{approach:'Default strategy.',usesDefault:true},
  cie:{approach:'Default strategy.',usesDefault:true},
  erika:{approach:'Use Whimsicott, Shuckle, Golduck, Klefki, Volcarona, and Slowbro.',team:['Whimsicott, Shuckle, and Golduck follow the default strategy. Replace Ninjask with Klefki.','Klefki: Prankster, Bold or another defensive nature, Light Clay; Light Screen, Reflect, Thunder Wave, and Spikes. Use Reflect against Ferrothorn or Light Screen against a special attacker.','Volcarona: Timid, Leftovers; Roost, Quiver Dance, Fiery Dance, and Bug Buzz. Use Quiver Dance six times, Roost to recover HP, then mainly Fiery Dance. Use Bug Buzz against the opposing Volcarona.']},
  gamerspewdieanddiepy:{approach:'Default strategy.',usesDefault:true},
  george:{approach:'Default strategy.',usesDefault:true},
  gingeryjones:{approach:'Default strategy.',usesDefault:true},
  guardianentei:{approach:'Default strategy.',usesDefault:true},
  guardianraikou:{approach:'Default strategy.',usesDefault:true},
  guardiansuicune:{approach:'Default strategy.',usesDefault:true},
  jessieandjames:{approach:'Default strategy + Pikachu in place of the second sweeper.',usesDefault:true,notes:['Pikachu is listed as a requirement to fight this boss.']},
  klohver:{approach:'Default strategy.',usesDefault:true},
  koichi:{approach:'Default strategy.',usesDefault:true},
  lance:{approach:'Default strategy + one Dragon Pokémon in place of the second sweeper.',usesDefault:true,notes:['A Dragon Pokémon is listed as a requirement to fight this boss.']},
  letrix:{approach:'Default strategy.',usesDefault:true},
  link:{approach:'Default strategy.',usesDefault:true},
  logan:{approach:'Default strategy.',usesDefault:true},
  lorelei:{approach:'Default strategy.',usesDefault:true},
  ltsurge:{approach:'Default strategy.',usesDefault:true},
  maribela:{approach:'Default strategy; all Pokémon must be level 100.',usesDefault:true},
  medusaandeldir:{approach:'Default strategy.',usesDefault:true},
  misty:{approach:'Default strategy.',usesDefault:true},
  morty:{approach:'Mega Banette + default strategy.',usesDefault:true},
  naero:{approach:'Default strategy.',usesDefault:true},
  narutofanboy:{approach:'Default strategy.',usesDefault:true},
  neroli:{approach:'Default strategy.',usesDefault:true},
  officerjenny:{approach:'Default strategy.',usesDefault:true},
  officershamac:{approach:'Mega Banette + default strategy.',usesDefault:true},
  prehax:{approach:'The author does not provide a completed strategy.',notes:['The team must contain only two Pokémon, and all Fighting moves are banned.']},
  professorbirch:{approach:'Mega Banette + default strategy.',usesDefault:true,notes:['Use Destiny Bond to remove Medicham before continuing with the default strategy.']},
  professorelm:{approach:'Default strategy.',usesDefault:true},
  professoroak:{approach:'Default strategy.',usesDefault:true},
  professorrowan:{approach:'Default strategy.',usesDefault:true},
  sage:{approach:'Default strategy.',usesDefault:true},
  saphirr:{approach:'Default strategy + one Fire Pokémon in place of the second sweeper.',usesDefault:true,notes:['A Fire Pokémon is listed as an additional team requirement.']},
  sharyandshaui:{approach:'Default strategy.',usesDefault:true},
  spectify:{approach:'Mega Banette + default strategy.',usesDefault:true},
  steven:{approach:'Steven strategy.',team:['Use Klefki, Shuckle, Golduck, Ninjask, Slowbro, and one additional Steel Pokémon. Steven requires two Steel Pokémon.','Klefki: Prankster, Bold or another defensive nature, Light Clay; Reflect, Light Screen, Thunder Wave, and Spikes. Start with Reflect and Spikes until it faints.','Switch to Shuckle and use Flash until it faints; then use Golduck to Flash until it faints.','Slowbro: Relaxed, Regenerator, Slowbronite; Calm Mind, Iron Defense, Slack Off, and Surf. Mega Evolve, use Iron Defense three times and Calm Mind six times. Use Slack Off when below 70% HP, then use Surf against the opposing team.']},
  terminator:{approach:'Default strategy.',usesDefault:true},
  thepumpking:{approach:'Mega Banette + default strategy.',usesDefault:true},
  thor:{approach:'Default strategy.',usesDefault:true,notes:['Use Rock Slide against Zapdos instead of Power Trip.']},
  tigerous:{approach:'Mega Banette + default strategy.',usesDefault:true},
  toothless:{approach:'Default strategy.',usesDefault:true},
  urahara:{approach:'Default strategy; all Pokémon must be level 100.',usesDefault:true,notes:['The second Pokémon needs a hazard move and Sweet Scent.']},
  xylos:{approach:'Default strategy.',usesDefault:true}
};
