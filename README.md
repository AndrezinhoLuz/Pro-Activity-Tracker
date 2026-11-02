# PRO Activity Tracker

An offline Electron + React + TypeScript desktop tracker for Pokémon Revolution Online. No account or server is used. Progress is stored in the operating system's app data directory (`progress.json`) with a `.bak` copy made before each save.

## Run in development

```powershell
npm install
npm run dev
```

## Build the Windows installer

Run these commands on Windows:

```powershell
npm install
npm run build
```

The NSIS installer is written to `release/PRO Activity Tracker Setup 1.0.0.exe`.

## Project layout

```text
electron/                 Electron main process and context-isolated preload
src/App.tsx               Dashboard, activity views, settings, data actions
src/data/gameData.ts      Editable wiki activity catalog and source URLs
src/data/guideInfo.ts     Forum notes compared with current wiki entries
src/style.css             Dark desktop UI and mini mode
src/types.ts              Activity and local progress types
```

## Wiki research and data notes

- **Diggable Patches:** 3-day respawn. Requires Dig or Shovel, regional third badge, and Digger happiness of at least 150. The Digging page lists Kanto (Diglett's Cave, Route 3, Mt. Moon, Rock Tunnel, Route 14, Route 15), Johto (Mt. Mortar, Dark Cave, Slowpoke Well), and Sinnoh (Ravaged Path, Oreburgh Gate, Route 209, Maniac Tunnel, Route 210 North, Route 211, Mt. Coronet Summit) in that order; Sevii Islands follow. Mt. Moon, Rock Tunnel, and Slowpoke Well each have one task covering all listed floors. Existing completion times for their former separate floor tasks are carried into the combined task.
- **Excavation:** Hoenn Elite Four requirement; unlock costs ₽100,000; entry costs ₽2,500/site; once daily. Nine sites, with three later unlocks. Individual objects respawn after 20 hours. Rewards include Pokémon, fossils, items, Discovery Points and point-gated tutors/features.
- **Pokéstops:** 2-day real-time cooldown. The page lists 11 Kanto stops (4 badges), 9 Johto stops (8 badges), and further stops in Hoenn and Sinnoh. This app includes listed location names.
- **Bug Catching Area:** Daily single player contest is available once per day for 20 minutes at the National Park southern Stop House. Score = level (capped at 25) + total IVs + tier bonus (50/75/100/130); shiny score is multiplied by 1.5. The weekly multiplayer contest lasts 60 minutes on Saturday at 12:00 or 00:00 GMT+0. The page does not clarify which weekly slot applies to a given player; left editable. Rewards include score thresholds, Genesect access at 140+ IVs, and placement prizes.
- **Celadon Daily:** Freshly caught requested Pokémon, 48 hours to submit; cooldown resets on daily reset. Rewards cycle days 1–7 and repeat; select a day in the cycle panel to change the displayed reward and requested Pokémon pool without changing your completion streak. IV thresholds are 85, 115, 135, 150 for tiers 2–5. Every 25th task grants Trainer Tower Pass.
- **Pokémon News Press:** The page could not be fetched reliably during research. Location/reward cycle and timing remain marked unknown and editable. Select a day in the cycle panel to change the displayed reward and eligible request pool.

The tray, mini window, configurable global shortcut, and Windows startup preference are wired through Electron. Notifications are local and checked while the app is open; OS scheduling while the app is closed is not supported. Mini-window task completions and its selected activity group and region are saved locally and synchronized with the main window. The mini window's size and position are also persisted. The wiki does not state a daily reset clock, so the default is explicitly unknown and editable.

### Wiki source pages

- https://wiki.pokemonrevolution.net/Diggable_Patches
- https://wiki.pokemonrevolution.net/Excavation
- https://wiki.pokemonrevolution.net/Pok%C3%A9stops
- https://wiki.pokemonrevolution.net/Bug_Catching_Contest_(Multiplayer)
- https://wiki.pokemonrevolution.net/Celadon_Daily_(task_system)
- https://wiki.pokemonrevolution.net/Pok%C3%A9mon_News_Press


## In-app updates

The app includes a manual update check in Settings > App updates. Updates are downloaded and installed by the app, then it restarts. The first install of this updater-enabled build must still be done with its installer.

Updates need a public HTTPS release feed; this project does not have a hosting account or release repository configured. In Settings, enter the URL of a folder that serves latest.yml and the release files. For GitHub Releases, upload the generated files as release assets and use the release download URL ending in /latest/download/.

For each code update, run:

```powershell
npm run release
```

This increments the patch version, builds the installer, and writes the update manifest. Upload all three generated files from release to the feed: latest.yml, PRO Activity Tracker Setup <version>.exe, and its .blockmap. Then users can click Check for updates, Download update, and Install and restart in the app. Do not reuse a version number; the release command increments it automatically.
