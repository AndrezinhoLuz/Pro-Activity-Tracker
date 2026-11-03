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

- **Diggable Patches:** 3-day respawn. Requires Dig or Shovel, regional third badge, and Digger happiness of at least 150. The Digging page lists Kanto (Diglett's Cave, Route 3, Mt. Moon, Rock Tunnel, Route 14, Route 15), Johto (Mt. Mortar, Dark Cave, Slowpoke Well), and Sinnoh (Ravaged Path, Oreburgh Gate, Route 209, Maniac Tunnel, Route 210 North, Route 211, Mt. Coronet Summit) in that order; Sevii Islands follow. On the Digging page, spots on cooldown move after available spots; each group retains the listed order. Dark Cave requires Rock Smash or a Pick Axe, with optional Flash; Rock Tunnel lists optional Flash, and bikes can speed up cave travel. Surf or a Surf mount reaches the Mt. Mortar island entrance in Route 42's lake and Ravaged Path's north entrance; Jet Skis still require HM03. Oreburgh Gate requires Rock Smash or a Pick Axe and Surf or a Surf mount to reach B1F. The same detailed navigation guidance and a link to the navigational-devices wiki appear in both the main and mini windows. Mt. Moon, Rock Tunnel, and Slowpoke Well each have one task covering all listed floors. Existing completion times for their former separate floor tasks are carried into the combined task.
- **Excavation:** Hoenn Elite Four requirement; unlock costs ₽100,000; entry costs ₽2,500/site; once daily. Nine sites, with three later unlocks. Individual objects respawn after 20 hours. Rewards include Pokémon, fossils, items, Discovery Points and point-gated tutors/features.
- **Pokéstops:** 2-day real-time cooldown. The page lists 11 Kanto stops (4 badges), 9 Johto stops (8 badges), and further stops in Hoenn and Sinnoh. This app includes listed location names; the Diglett's Cave entrance Pokéstop is on Route 11.
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

The app checks the public GitHub Releases page for `AndrezinhoLuz/Pro-Activity-Tracker` on startup and automatically downloads available updates. Choose **Install and restart** in Settings > App updates, or quit the app from its tray menu to install the downloaded update. The first install of this updater-enabled build must still be done with its installer.

Updates are published as public GitHub Releases with plain version tags (for example, `1.0.49`). The installer name is `PRO.Activity.Tracker.Setup.<version>.exe`; ensure `latest.yml` uses that exact filename in both its `url` and `path` fields. Prereleases are not used by the configured stable release channel.

To increment the patch version, build the Windows installer, and publish a GitHub Release with the installer, blockmap, and `latest.yml`, run:

```powershell
npm.cmd run release
```

If neither `GH_TOKEN` nor `GITHUB_TOKEN` is set, the command securely prompts for a GitHub token (input is hidden). It verifies that the token can write to this repository before changing the version; if a configured token is rejected, it prompts for a replacement. Create a fine-grained token with **Contents: Read and write** access to this repository. The release script skips version tags already present on GitHub, builds without parallel publishing, creates or resumes the release using the default branch as the tag target, then uploads the installer, blockmap, and a version-matched `latest.yml` sequentially. It does not commit or push source changes. Keep the token private and do not save it in project files.

To finish uploading assets for an existing release that already has local installer and blockmap files in `release`, run `npm.cmd run publish:release -- 1.0.59` with the version you want to resume. This does not rebuild or increment the app version.

Updates are checked automatically at launch; the app downloads them and offers **Install and restart**. If a release upload fails after creating the GitHub release, use the `publish:release` command above to resume its missing or stale assets without rebuilding.
