import React, { Fragment } from "react";
import _ from "lodash";
import TeamListItem from "./TeamListItem";

const TeamList = ({ teams }) => {
  let ranking = 0;

  const maxRating = _.maxBy(teams, "rating").rating;
  const maxWins = _.maxBy(teams, "wins").wins;
  const maxLosses = _.maxBy(teams, "losses").losses;

  console.log(teams);

  return (
    <Fragment>
      {teams.map(team => {
        ranking++;

        return (
          <TeamListItem
            key={team.team_id}
            maxRating={maxRating}
            maxWins={maxWins}
            maxLosses={maxLosses}
            ranking={ranking}
            {...team}
          />
        );
      })}
    </Fragment>
  );
};

export default TeamList;
