import React from "react";

import MatchBanListItem from "./MatchBanListItem";

const MatchBanList = ({ draft_timings, active_team }) => {
  return (
    <div>
      {draft_timings
        .filter(timing => timing.active_team === active_team)
        .map(({ hero_id, order, pick, total_time_taken }) => {
          return (
            <MatchBanListItem
              hero_id={hero_id}
              order={order}
              pick={pick}
              total_time_taken={total_time_taken}
            />
          );
        })}
    </div>
  );
};

export default MatchBanList;
