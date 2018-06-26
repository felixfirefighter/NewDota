import React, { Fragment } from "react";
import _ from "lodash";
import TeamHeroListItem from "../team/TeamHeroListItem";

const TeamHeroList = ({ heroes }) => {
  const maxGamesPlayed = _.maxBy(heroes, "games_played").games_played;

  return (
    <Fragment>
      {heroes.map(hero => {
        return (
          <TeamHeroListItem
            key={hero.hero_id}
            max_games_played={maxGamesPlayed}
            {...hero}
          />
        );
      })}
    </Fragment>
  );
};

export default TeamHeroList;
