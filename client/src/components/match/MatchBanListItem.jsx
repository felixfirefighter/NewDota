import React from "react";

import { Image, Divider, Header } from "semantic-ui-react";
import { getHeroImage } from "../../utils/imageUtil";

const banStyle = {
  filter: "grayscale(100%)"
};

const MatchBanListItem = ({ hero_id, order, is_pick }) => {
  return (
    <div
      style={{
        width: "59px",
        margin: "8px",
        display: "inline-block",
        backgroundColor: "#1b1c1d"
      }}
    >
      <Image
        src={getHeroImage(hero_id)}
        style={is_pick ? null : banStyle}
        inline
      />
      <p
        className="white inverted"
        style={{ width: "100%", textAlign: "center" }}
      >
        <span>
          {is_pick ? "Pick" : "Ban"} <b>{order + 1}</b>
        </span>
      </p>
    </div>
  );
};

export default MatchBanListItem;
