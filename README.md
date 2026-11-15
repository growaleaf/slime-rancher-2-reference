# Slime Rancher 2 Slime Diet & Upgrade Cost Reference

Static site (`index.html` + `data.js`) for a Slime Rancher 2 player standing at a corral who wants, fast: a slime's diet, favourite food, plort, and where to find it; a reverse lookup from food to which slimes eat/favour it; or a Corral/Coop/Garden upgrade's cost in Newbucks.

## Sections

1. **Slimes (21)** — diet category, favourite food, plort name, and where found, filterable by diet category, searchable by name/food/location. 21 is the union of all slimes named across the three diet sources (GameRevolution's list, the widest, explicitly says "21 slimes at the time of this writing").
2. **What Do I Feed?** — pick a food, see which slime it's the favourite for, and which other same-diet slimes will eat it (without the double-plort bonus).
3. **Corral / Coop / Garden Upgrades** — every upgrade row and its Newbucks cost, plus the published total cost to fully upgrade each building. Single-sourced from Prima Games (no second source was found with these figures).

No calculator, planner, or interactive database exists for Slime Rancher 2 (per Gate 2) — this reference is assembled directly from four static guides.

## Data provenance

- Diet/favourite-food: GGRecon (ggrecon.com, published 2022-10-04, fetched live), GameRevolution (published 2022-09-28, live site returned HTTP 403 — read via its `web.archive.org` snapshot), Gfinity Esports (published 2022-09-26, updated 2022-09-27, fetched live).
- Corral/Coop/Garden upgrade costs: three separate Prima Games pages (published 2022-09-22/23). The live site returned HTTP 403 for all three; each was read via its `web.archive.org` snapshot instead.
- `adrelien.com`, listed as a candidate source in the charter, was checked directly and turned out to be an unrelated Meshtastic/IoT/off-grid-tech site with zero Slime Rancher 2 content — not used. Fandom was excluded per charter.

No value in this reference was invented. Where a source doesn't state something, the field reads the literal string `"not published"` — this applies to most slimes' plort names (only "Honey Plort" is stated verbatim, in Gfinity's prose) and to location/how-to-obtain text for the six slimes (Gold, Gordo, Largo, Lucky, Quantum, Tarr) that only GameRevolution lists at all.

Where sources disagree, both readings are kept and flagged rather than one being silently chosen:
- **Boom Slime's favourite food**: GGRecon and GameRevolution both say Briar Hen; Gfinity says "Unknown." The table uses Briar Hen (2 of 3 sources) and flags Gfinity's disagreement inline.
- **Ringtail Slime's diet breadth**: GGRecon says "Meat and Veggies" (2 categories); GameRevolution and Gfinity both say all three (Meat, Fruit, Veggies). The table uses the 2-of-3 reading and flags GGRecon's narrower claim inline.
- Minor spelling variants across sources (Pomegranate/Pomegranite, Heart Beet/Heart Beats/Heart Beat, Cuberry/CuBerry) are treated as the same food, not a factual conflict.

All four sources were published in September/October 2022, around the game's early-access launch; none states a specific build or patch number. This is an early-access snapshot, not current-build truth — disclosed in the site's top banner and footer.

## Running / testing

```
node test.js                     # 15/15 known-answer + row-count + reverse-lookup tests
python3 -m http.server 8000      # serve the folder, then open http://localhost:8000/
```
