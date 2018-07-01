import React from "react";

import { Image } from "semantic-ui-react";
import { getHeroImage } from "../../utils/imageUtil";

const MatchBanListItem = ({
  extra_time,
  hero_id,
  order,
  pick,
  total_time_taken
}) => {
  return <Image src={getHeroImage(hero_id)} inline />;
};

export default MatchBanListItem;
