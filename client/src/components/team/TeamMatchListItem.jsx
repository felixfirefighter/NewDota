import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import { Table, Header, Icon, Image } from "semantic-ui-react";

import LeagueComponent from "../layout/LeagueComponent";
import DurationComponent from "../layout/DurationComponent";

const MatchListItem = ({
  duration,
  league_name,
  match_id,
  opposing_team_id,
  opposing_team_logo,
  opposing_team_name,
  radiant,
  radiant_win,
  start_time
}) => {
  const result =
    (radiant && radiant_win) || !(radiant || radiant_win) ? (
      <Header as="h5" color="green" content="Win" />
    ) : (
      <Header as="h5" color="red" content="Loss" />
    );

  return (
    <Table.Row key={match_id}>
      <Table.Cell>
        <LeagueComponent match_id={match_id} league_name={league_name} />
      </Table.Cell>
      <Table.Cell>
        <DurationComponent
          size="h5"
          duration={duration}
          start_time={start_time}
        />
      </Table.Cell>
      <Table.Cell>
        <Header as="h5" image inverted>
          <Image src={opposing_team_logo} size="mini" />
          <Header.Content as={Link} to={`/teams/${opposing_team_id}`}>
            {opposing_team_name} <Icon name="angle right" />
          </Header.Content>
        </Header>
      </Table.Cell>

      <Table.Cell>{result}</Table.Cell>
    </Table.Row>
  );
};

export default MatchListItem;
