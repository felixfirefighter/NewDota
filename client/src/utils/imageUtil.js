export const getHeroImage = name => {
  name = name.toLowerCase().replace(/ /g, "_");

  //change some of the unique hero name
  if (name === "anti-mage") name = "antimage";
  if (name === "clockwerk") name = "rattletrap";
  if (name === "centaur_warrunner") name = "centaur";
  if (name === "shadow_fiend") name = "nevermore";
  if (name === "vengeful_spirit") name = "vengefulspirit";
  if (name === "windranger") name = "windrunner";
  if (name === "nature's_prophet") name = "furion";
  if (name === "lifestealer") name = "life_stealer";
  if (name === "necrophos") name = "necrolyte";
  if (name === "queen_of_pain") name = "queenofpain";
  if (name === "wraith_king") name = "skeleton_king";
  if (name === "doom") name = "doom_bringer";
  if (name === "outworld_devourer") name = "obsidian_destroyer";
  if (name === "treant_protector") name = "treant";
  if (name === "io") name = "wisp";
  if (name === "magnus") name = "magnataur";
  if (name === "timbersaw") name = "shredder";
  if (name === "underlord") name = "abyssal_underlord";
  if (name === "zeus") name = "zuus";

  return `https://api.opendota.com/apps/dota2/images/heroes/${name}_sb.png`;
};
