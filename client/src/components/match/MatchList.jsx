import React, { Fragment } from "react";
import MatchListItem from "./MatchListItem";

const MatchList = ({ matches }) => {
  return (
    <Fragment>
      {matches.map(match => {
        return <MatchListItem key={match.match_id} {...match} />;
      })}
    </Fragment>
  );
};

export default MatchList;
