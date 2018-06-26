import React from "react";
import { Table } from "semantic-ui-react";

import LeagueComponent from "../layout/LeagueComponent";
import DurationComponent from "../layout/DurationComponent";

const MatchListItem = ({
  dire_name,
  dire_score,
  dire_team_id,
  duration,
  league_name,
  leagueid,
  match_id,
  radiant_name,
  radiant_score,
  radiant_team_id,
  radiant_win,
  series_id,
  series_type,
  start_time
}) => {
  return (
    <Table.Row>
      <Table.Cell>
        <LeagueComponent match_id={match_id} league_name={league_name} />
      </Table.Cell>
      <Table.Cell>
        <DurationComponent duration={duration} start_time={start_time} />
      </Table.Cell>
    </Table.Row>
  );
};

export default MatchListItem;
