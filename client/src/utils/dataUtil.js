export const getRank = id => {
  switch (id) {
    case 1:
      return "Herald";
    case 2:
      return "Guardian";
    case 3:
      return "Crusader";
    case 4:
      return "Archon";
    case 5:
      return "Legend";
    case 6:
      return "Ancient";
    case 7:
      return "Divine";
    case 8:
      return "Immortal";
    default:
      return;
  }
};
