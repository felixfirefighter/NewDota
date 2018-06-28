import React from "react";
import { Table, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
      <Table.Cell>
        <Header as="h5" inverted>
          <Header.Content>
            <Link
              to={`/teams/${radiant_team_id}`}
              style={{ marginRight: "4px" }}
            >
              {radiant_name}
            </Link>{" "}
            {radiant_win && <Icon name="trophy" className="yellow inverted" />}
          </Header.Content>
        </Header>
      </Table.Cell>

      <Table.Cell>
        <Header as="h5" inverted>
          <Header.Content>
            <Link to={`/teams/${dire_team_id}`} style={{ marginRight: "4px" }}>
              {dire_name}
            </Link>{" "}
            {!radiant_win && <Icon name="trophy" className="yellow inverted" />}
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>
        <div style={{ display: "flex" }}>
          <p style={{ marginBottom: "0px" }}>
            <span className="green inverted">{radiant_score}</span> :{" "}
            <span className="red inverted">{dire_score}</span>
          </p>
        </div>
      </Table.Cell>
    </Table.Row>
  );
};

export default MatchListItem;
