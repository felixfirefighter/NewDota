import React, { Fragment } from "react";
import _ from "lodash";
import HeroListItem from "./HeroListItem";

const HeroList = ({ heroes }) => {
  const maxGamesPlayed = _.maxBy(heroes, "games_played").games_played;

  return (
    <Fragment>
      {heroes.map(hero => {
        return (
          <HeroListItem
            key={hero.hero_id}
            max_games_played={maxGamesPlayed}
            {...hero}
          />
        );
      })}
    </Fragment>
  );
};

export default HeroList;
