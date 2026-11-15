// Slime Rancher 2 Slime Diet & Upgrade Cost Reference — data layer.
// Every field traces to one of the four sources below. A blank or unknown
// value is written as "not published" rather than guessed or interpolated.
// Where two sources disagree, both are kept (see `conflict` fields) instead
// of silently picking one.

const SOURCES = {
  ggrecon: {
    name: "GGRecon — All Favourite Foods For Slimes",
    url: "https://www.ggrecon.com/guides/slime-rancher-2-favourite-slime-foods/",
    published: "2022-10-04",
    note: "Lists diet, favourite food and how-to-obtain for 15 slimes.",
  },
  gamerev: {
    name: "GameRevolution — Slime Rancher 2 Favorite Foods for All Slimes",
    url: "https://www.gamerevolution.com/guides/715574-slime-rancher-2-favorite-foods-all-slimes",
    archive: "https://web.archive.org/web/20221004215753/https://www.gamerevolution.com/guides/715574-slime-rancher-2-favorite-foods-all-slimes",
    published: "2022-09-28",
    note: "Lists favourite food and diet category for 21 slimes (states \"21 slimes at the time of this writing\"); live site returned HTTP 403, read via the archive.org snapshot above.",
  },
  gfinity: {
    name: "Gfinity Esports — Slime Rancher 2 Slimes: All new and old slimes",
    url: "https://www.gfinityesports.com/article/all-slimes-slime-rancher-2",
    published: "2022-09-26",
    updated: "2022-09-27",
    note: "Table + prose field guide for 15 slimes, the only one of the four carrying per-slime location text.",
  },
  prima_corral: {
    name: "Prima Games — Slime Rancher 2 Corral Guide: All Upgrades and Costs",
    url: "https://primagames.com/tips/slime-rancher-2-corral-guide-all-upgrades-and-costs",
    archive: "https://web.archive.org/web/20250906102044/https://primagames.com/tips/slime-rancher-2-corral-guide-all-upgrades-and-costs",
    published: "2022-09-22",
    note: "Live site returned HTTP 403, read via the archive.org snapshot above. Single source for Corral upgrade costs — no second source corroborates these Newbucks figures.",
  },
  prima_coop: {
    name: "Prima Games — Slime Rancher 2 Coop Guide: All Upgrades and Costs",
    url: "https://primagames.com/tips/slime-rancher-2-coop-guide-all-upgrades-and-costs",
    archive: "https://web.archive.org/web/20250908235542/https://primagames.com/tips/slime-rancher-2-coop-guide-all-upgrades-and-costs",
    published: "2022-09-23",
    note: "Live site returned HTTP 403, read via the archive.org snapshot above. Single source for Coop upgrade costs.",
  },
  prima_garden: {
    name: "Prima Games — Slime Rancher 2 Garden Guide: All Upgrades and Costs",
    url: "https://primagames.com/tips/slime-rancher-2-garden-guide-all-upgrades-and-costs",
    archive: "https://web.archive.org/web/20250908235542/https://primagames.com/tips/slime-rancher-2-garden-guide-all-upgrades-and-costs",
    published: "2022-09-22",
    note: "Live site returned HTTP 403, read via the archive.org snapshot above. Single source for Garden upgrade costs.",
  },
};

// `adrelien.com` (listed as a candidate source in the charter) was checked
// directly and is an unrelated Meshtastic/IoT/off-grid-tech site — no Slime
// Rancher 2 content exists there. Not used. Fandom is off-limits per charter.
const UNUSED_CANDIDATE_NOTE =
  "adrelien.com checked and contains no Slime Rancher 2 content (unrelated Meshtastic/IoT site) — not used as a source.";

// All game-version context: every fetched guide was written in September/
// October 2022, around Slime Rancher 2's early-access launch. GameRevolution
// explicitly says "21 slimes (at the time of this writing), but future
// updates for the game will likely add to this." None of the four sources
// carries a specific in-game version number or patch note — "not published."
const GAME_VERSION_NOTE =
  "All four sources were published/last-updated in Sep-Oct 2022, shortly after Slime Rancher 2 entered early access. None states a specific build/patch number. The game has very likely added slimes, foods and upgrades since; treat anything here as an early-access snapshot, not current-build truth.";

// ---- Slimes: diet, favourite food, plort, location ----
// dietCategories: normalized list of {Meat, Fruit, Veggies, Ash, Nectar,
// Water, Gilded Ginger}. "Anything" collapses to the three normal food
// categories (Meat/Fruit/Veggies) for lookup purposes.
const SLIMES = [
  {
    name: "Angler Slime",
    dietCategories: ["Meat"],
    dietSources: ["ggrecon", "gamerev", "gfinity"],
    favoriteFood: "Sea Hen",
    favoriteFoodSources: ["ggrecon", "gamerev", "gfinity"],
    conflict: null,
    plort: "not published",
    location: "Starlight Strand, Ember Valley (gfinity)",
    howToObtain: "Sea Hens look like seagulls and are found along the coastlines of Starlight Strand (ggrecon).",
  },
  {
    name: "Batty Slime",
    dietCategories: ["Fruit"],
    dietSources: ["ggrecon", "gamerev", "gfinity"],
    favoriteFood: "Pomegranate",
    favoriteFoodSources: ["ggrecon", "gamerev", "gfinity"],
    conflict: "Spelling varies by source: gamerev/gfinity use \"Pomegranate\"; ggrecon spells it \"Pomegranite.\" Same food, not a factual disagreement.",
    plort: "not published",
    location: "Ember Valley (gfinity)",
    howToObtain: "Pomegranate trees are found in Starlight Strand and Ember Valley; one grows along the cliffsides past the Crystal Gordo (ggrecon).",
  },
  {
    name: "Boom Slime",
    dietCategories: ["Meat"],
    dietSources: ["ggrecon", "gamerev"],
    favoriteFood: "Briar Hen",
    favoriteFoodSources: ["ggrecon", "gamerev"],
    conflict: "gfinity lists Boom Slime's favourite food as \"Unknown\" while ggrecon and gamerev both say Briar Hen. Shown as a flagged disagreement, not resolved in either direction.",
    plort: "not published",
    location: "Lava cave on Ember Isle (gfinity)",
    howToObtain: "Briar Hens are darker Hen Hens with brown stripes, found in Ember Valley (ggrecon).",
  },
  {
    name: "Cotton Slime",
    dietCategories: ["Veggies"],
    dietSources: ["ggrecon", "gamerev", "gfinity"],
    favoriteFood: "Water Lettuce",
    favoriteFoodSources: ["ggrecon", "gamerev", "gfinity"],
    conflict: null,
    plort: "not published",
    location: "Rainbow Field, Ember Valley, Starlight Strand (gfinity)",
    howToObtain: "Water Lettuce is found in all three areas, spawning near bodies of water as blue, cabbage-like veggies (ggrecon).",
  },
  {
    name: "Crystal Slime",
    dietCategories: ["Veggies"],
    dietSources: ["ggrecon", "gamerev", "gfinity"],
    favoriteFood: "Odd Onion",
    favoriteFoodSources: ["ggrecon", "gamerev", "gfinity"],
    conflict: null,
    plort: "not published",
    location: "Ember Valley (gfinity)",
    howToObtain: "Odd Onions are commonly found in patches of carrots in Ember Valley (ggrecon).",
  },
  {
    name: "Fire Slime",
    dietCategories: ["Ash"],
    dietSources: ["ggrecon", "gamerev"],
    favoriteFood: "Ash",
    favoriteFoodSources: ["ggrecon", "gamerev"],
    conflict: null,
    plort: "not published",
    location: "Lava cave on Ember Isle (gfinity)",
    howToObtain: "Ash is made by putting food into an Incinerator in a corral (ggrecon). gfinity notes the Incinerator needs its tray attachment for Fire Slimes to actually eat and live in it.",
  },
  {
    name: "Flutter Slime",
    dietCategories: ["Nectar"],
    dietSources: ["ggrecon", "gamerev", "gfinity"],
    favoriteFood: "Moondew Nectar",
    favoriteFoodSources: ["ggrecon", "gamerev", "gfinity"],
    conflict: null,
    plort: "not published",
    location: "Starlight Strand (gfinity)",
    howToObtain: "Moondew Nectar falls from blue blossoms on trees in Starlight Strand, only at night in the pink region of the map, appearing as blue orbs beneath the blooms (ggrecon).",
  },
  {
    name: "Gold Slime",
    dietCategories: ["Gilded Ginger"],
    dietSources: ["gamerev"],
    favoriteFood: "Gilded Ginger",
    favoriteFoodSources: ["gamerev"],
    conflict: null,
    plort: "not published",
    location: "not published",
    howToObtain: "not published (gamerev is the only one of the four sources that lists Gold Slime at all).",
  },
  {
    name: "Gordo Slime",
    dietCategories: ["Depends on the Slime"],
    dietSources: ["gamerev"],
    favoriteFood: "Depends on Slime",
    favoriteFoodSources: ["gamerev"],
    conflict: null,
    plort: "not published",
    location: "not published",
    howToObtain: "gamerev: giant Gordo Slimes take the favourite food of whichever base slime they are — no single fixed food. Not covered by ggrecon or gfinity.",
  },
  {
    name: "Honey Slime",
    dietCategories: ["Fruit"],
    dietSources: ["ggrecon", "gamerev"],
    favoriteFood: "Mint Mango",
    favoriteFoodSources: ["ggrecon", "gamerev"],
    conflict: null,
    plort: "Honey Plort",
    location: "Starlight Strand (gfinity)",
    howToObtain: "Mint Mangoes are found near the Honey Gordo in Starlight Strand (ggrecon). One Honey Plort is needed to unlock an underground tunnel on Starlight Strand (gfinity).",
  },
  {
    name: "Hunter Slime",
    dietCategories: ["Meat"],
    dietSources: ["ggrecon", "gamerev", "gfinity"],
    favoriteFood: "Roostro",
    favoriteFoodSources: ["ggrecon", "gamerev", "gfinity"],
    conflict: null,
    plort: "not published",
    location: "Starlight Strand (gfinity)",
    howToObtain: "Roostros are commonly found across all three areas of Slime Rancher 2 (ggrecon).",
  },
  {
    name: "Largo Slime",
    dietCategories: ["Depends on the Slime"],
    dietSources: ["gamerev"],
    favoriteFood: "Depends on Slime",
    favoriteFoodSources: ["gamerev"],
    conflict: null,
    plort: "not published",
    location: "not published",
    howToObtain: "gamerev: a Largo Slime keeps the favourite food of the slime it was before merging into a Largo. Not covered by ggrecon or gfinity.",
  },
  {
    name: "Lucky Slime",
    dietCategories: ["Meat"],
    dietSources: ["gamerev"],
    favoriteFood: "No Preference",
    favoriteFoodSources: ["gamerev"],
    conflict: null,
    plort: "not published",
    location: "not published",
    howToObtain: "not published (gamerev is the only one of the four sources that lists Lucky Slime at all).",
  },
  {
    name: "Phosphor Slime",
    dietCategories: ["Fruit"],
    dietSources: ["ggrecon", "gamerev", "gfinity"],
    favoriteFood: "Cuberry",
    favoriteFoodSources: ["ggrecon", "gamerev", "gfinity"],
    conflict: null,
    plort: "not published",
    location: "Rainbow Field, Ember Valley (at night) (gfinity)",
    howToObtain: "Cuberries grow on trees across all three areas of Slime Rancher 2 (ggrecon).",
  },
  {
    name: "Pink Slime",
    dietCategories: ["Meat", "Fruit", "Veggies"],
    dietSources: ["ggrecon", "gamerev", "gfinity"],
    favoriteFood: "None",
    favoriteFoodSources: ["ggrecon", "gamerev", "gfinity"],
    conflict: null,
    plort: "not published",
    location: "Rainbow Field, Ember Valley, Starlight Strand (gfinity)",
    howToObtain: "Pink Slimes eat anything and have no favourite-food bonus; not applicable (ggrecon, gamerev, gfinity all agree).",
  },
  {
    name: "Puddle Slime",
    dietCategories: ["Water"],
    dietSources: ["ggrecon", "gamerev"],
    favoriteFood: "Not applicable - lives in a pond habitat and does not require feeding",
    favoriteFoodSources: ["ggrecon", "gamerev", "gfinity"],
    conflict: null,
    plort: "not published",
    location: "Ponds on Starlight Strand and Ember Valley (gfinity)",
    howToObtain: "Puddle Slimes automatically make plorts and thrive when placed in a pond habitat; they don't need to be fed (ggrecon, gfinity).",
  },
  {
    name: "Quantum Slime",
    dietCategories: ["Fruit"],
    dietSources: ["gamerev"],
    favoriteFood: "Phase Lemon",
    favoriteFoodSources: ["gamerev"],
    conflict: null,
    plort: "not published",
    location: "not published",
    howToObtain: "not published (gamerev is the only one of the four sources that lists Quantum Slime at all).",
  },
  {
    name: "Ringtail Slime",
    dietCategories: ["Meat", "Fruit", "Veggies"],
    dietSources: ["ggrecon", "gamerev", "gfinity"],
    favoriteFood: "None",
    favoriteFoodSources: ["ggrecon", "gamerev", "gfinity"],
    conflict: "Diet breadth disagrees: ggrecon says \"Meat and Veggies\" (2 categories); gamerev (\"Anything\"/No Preference) and gfinity (\"Fruit, Veggies, Meat\") both say all three. Table uses the 2-of-3 reading (all three categories) and flags ggrecon's narrower claim here.",
    plort: "not published",
    location: "Ember Valley (gfinity)",
    howToObtain: "Ringtails appear as statues in daylight and must be moved into a cave to revert and be captured (gfinity). They eat constantly but won't always produce plorts; an auto-feeder is recommended (gfinity).",
  },
  {
    name: "Rock Slime",
    dietCategories: ["Veggies"],
    dietSources: ["ggrecon", "gamerev", "gfinity"],
    favoriteFood: "Heart Beet",
    favoriteFoodSources: ["ggrecon", "gamerev", "gfinity"],
    conflict: "Spelling varies: ggrecon writes \"Heart Beat,\" gamerev \"Heart Beet,\" gfinity \"Heart Beets.\" Same food.",
    plort: "not published",
    location: "Ember Valley, Starlight Strand (gfinity)",
    howToObtain: "Found in both Starlight Strand and Ember Valley, grown in crop patches on the ground (ggrecon).",
  },
  {
    name: "Tabby Slime",
    dietCategories: ["Meat"],
    dietSources: ["ggrecon", "gamerev", "gfinity"],
    favoriteFood: "Stony Hen",
    favoriteFoodSources: ["ggrecon", "gamerev", "gfinity"],
    conflict: null,
    plort: "not published",
    location: "Rainbow Field (at night), Starlight Strand, Ember Valley (gfinity)",
    howToObtain: "Stony Hens are found on Rainbow Island and Ember Valley, and may appear inside stone capsules when crushed (ggrecon).",
  },
  {
    name: "Tarr Slime",
    dietCategories: ["Anything except other slimes"],
    dietSources: ["gamerev"],
    favoriteFood: "The Player/Beatrix",
    favoriteFoodSources: ["gamerev"],
    conflict: null,
    plort: "not published",
    location: "not published",
    howToObtain: "gamerev: Tarr Slimes are the hostile form any Largo (or giant Gordo) can transform into if it eats a plort type it doesn't itself produce. Not a ranchable slime in the normal sense; not covered by ggrecon or gfinity.",
  },
];

// ---- Corral / Coop / Garden upgrades (Newbucks) ----
// Single-source: all three tables come only from Prima Games. No second
// source was found with these costs, so every row is flagged single-source
// per the charter's disclosure requirement.
const UPGRADES = {
  Corral: {
    source: "prima_corral",
    rows: [
      { upgrade: "Corral", cost: 250, description: "Adds a Corral to an empty plot." },
      { upgrade: "High Walls", cost: 260, description: "Adds another wall layer to your Corral, making it harder for slimes to jump out." },
      { upgrade: "Music Box", cost: 350, description: "Relaxes your slimes, making them less likely to escape the Corral." },
      { upgrade: "Air Net", cost: 425, description: "A temporary shield that acts as a ceiling, preventing slimes such as Cotton Slimes from jumping over your High Walls." },
      { upgrade: "Solar Shield", cost: 425, description: "Protects Phosphor Slimes (and Phosphor Largos) from disappearing in sunlight." },
      { upgrade: "Plort Collector", cost: 500, description: "Automatically vacuums up any plorts inside the Corral. Limited space; empty it with your vac." },
      { upgrade: "Auto-Feeder", cost: 500, description: "Automatically feeds food to your slimes on a set interval. You supply the food." },
    ],
    total: 2710,
    totalNote: "Prima's stated total cost for buying every upgrade on the list, including building the Corral in an empty plot.",
  },
  Coop: {
    source: "prima_coop",
    rows: [
      { upgrade: "Coop", cost: 250, description: "Adds a Coop to an empty plot." },
      { upgrade: "High Walls", cost: 200, description: "Adds an extra layer of walls to the coop, making it harder for your chickens to escape." },
      { upgrade: "Spring Grass", cost: 425, description: "Scuttle bugs crawl around your coop, letting baby chickens and roostros grow twice as fast." },
      { upgrade: "Vitamizer", cost: 500, description: "Your chickens and roostros produce eggs twice as fast." },
      { upgrade: "Elder Collector", cost: 1300, description: "When chickens grow too old to produce eggs and turn into elders, they automatically enter a collector for you to claim later." },
    ],
    total: 2675,
    totalNote: "Prima's stated total cost for buying every upgrade on the list, including building the Coop in an empty plot.",
  },
  Garden: {
    source: "prima_garden",
    rows: [
      { upgrade: "Garden", cost: 250, description: "Adds a Garden to an empty plot." },
      { upgrade: "Nutrient Soil", cost: 350, description: "Adds a compost layer to your Garden, ensuring maximum yield from the crops you plant." },
      { upgrade: "Sprinkler", cost: 500, description: "Doubles the growth speed of your plants." },
      { upgrade: "Scareslime", cost: 425, description: "Helps keep wandering slimes away from your crops." },
      { upgrade: "Remove Crops", cost: 50, description: "Removes the plants currently in the garden, so you can replace them with a different crop." },
    ],
    total: 1525,
    totalNote: "Prima's stated total cost for buying every upgrade on the list, including building the Garden in an empty plot. Excludes repeatedly removing crops.",
  },
};

// ---- Lookups ----
function findSlime(name) {
  return SLIMES.find(s => s.name.toLowerCase() === name.toLowerCase());
}

// Foods: derived from each slime's favoriteFood, tagged with the diet
// category it belongs to and which slime(s) it is the favourite for.
// A food with a fixed category is "eaten by" every slime whose
// dietCategories includes that category (not just its favourite slime).
const FOOD_CATEGORY = {
  "Sea Hen": "Meat",
  "Briar Hen": "Meat",
  "Roostro": "Meat",
  "Stony Hen": "Meat",
  "Pomegranate": "Fruit",
  "Mint Mango": "Fruit",
  "Cuberry": "Fruit",
  "Phase Lemon": "Fruit",
  "Water Lettuce": "Veggies",
  "Odd Onion": "Veggies",
  "Heart Beet": "Veggies",
  "Ash": "Ash",
  "Moondew Nectar": "Nectar",
  "Gilded Ginger": "Gilded Ginger",
  "Water": "Water",
};

function foodsList() {
  return Object.keys(FOOD_CATEGORY).map(food => {
    const category = FOOD_CATEGORY[food];
    const favoriteFor = SLIMES.filter(s => s.favoriteFood === food).map(s => s.name);
    const eatenBy = SLIMES
      .filter(s => s.dietCategories.includes(category) && !favoriteFor.includes(s.name))
      .map(s => s.name);
    return { food, category, favoriteFor, eatenBy };
  });
}

function findFood(food) {
  return foodsList().find(f => f.food.toLowerCase() === food.toLowerCase());
}

function findUpgrade(building, upgradeName) {
  const table = UPGRADES[building];
  if (!table) return null;
  return table.rows.find(r => r.upgrade.toLowerCase() === upgradeName.toLowerCase());
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    SOURCES, SLIMES, UPGRADES, FOOD_CATEGORY,
    GAME_VERSION_NOTE, UNUSED_CANDIDATE_NOTE,
    findSlime, foodsList, findFood, findUpgrade,
  };
}
