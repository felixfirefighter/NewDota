import React, { Fragment } from "react";

import PublicMatchListItem from "./PublicMatchListItem";

const PublicMatchList = ({ matches }) => {
  return (
    <Fragment>
      {matches.map(match => {
        return <PublicMatchListItem key={match.match_id} {...match} />;
      })}
    </Fragment>
  );
};

export default PublicMatchList;
