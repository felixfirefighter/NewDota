import React, { Fragment } from "react";
import _ from "lodash";
import TeamPlayerListItem from "./TeamPlayerListItem";

const TeamPlayerList = ({ players }) => {
  let maxGamesPlayed = _.maxBy(players, "games_played");

  maxGamesPlayed = maxGamesPlayed ? maxGamesPlayed.games_played : 0;

  return (
    <Fragment>
      {players.map(player => {
        return (
          <TeamPlayerListItem
            key={player.account_id}
            max_games_played={maxGamesPlayed}
            {...player}
          />
        );
      })}
    </Fragment>
  );
};

export default TeamPlayerList;
