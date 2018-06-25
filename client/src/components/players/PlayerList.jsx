import React, { Fragment } from "react";
import _ from "lodash";
import PlayerListItem from "./PlayerListItem";

const PlayerList = ({ players }) => {
  let maxGamesPlayed = _.maxBy(players, "games_played");

  maxGamesPlayed = maxGamesPlayed ? maxGamesPlayed.games_played : 0;

  return (
    <Fragment>
      {players.map(player => {
        return (
          <PlayerListItem
            key={player.account_id}
            max_games_played={maxGamesPlayed}
            {...player}
          />
        );
      })}
    </Fragment>
  );
};

export default PlayerList;
