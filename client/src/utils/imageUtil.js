export const getHeroImage = name => {
  name = name.toLowerCase().replace(" ", "_");

  //change some of the unique hero name
  if (name === "clockwerk") name = "rattletrap";
  if (name === "shadow_fiend") name = "nevermore";
  if (name === "vengeful_spirit") name = "vengefulspirit";
  if (name === "nature's_prophet") name = "furion";
  if (name === "lifestealer") name = "life_stealer";

  return `https://api.opendota.com/apps/dota2/images/heroes/${name}_sb.png`;
};
