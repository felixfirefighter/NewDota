import React from "react";

import MatchBanListItem from "./MatchBanListItem";

const MatchBanList = ({ picks_bans }) => {
  return (
    <div style={{ textAlign: "center" }}>
      {picks_bans.map(({ hero_id, order, is_pick }) => {
        return (
          <MatchBanListItem
            key={hero_id}
            hero_id={hero_id}
            order={order}
            is_pick={is_pick}
          />
        );
      })}
    </div>
  );
};

export default MatchBanList;
