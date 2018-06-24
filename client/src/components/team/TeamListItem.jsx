import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Table, Progress, Header, Icon, Image } from "semantic-ui-react";

import { nth } from "../../utils/numberUtil";

const TeamListItem = ({
  team_id,
  rating,
  name,
  logo_url,
  last_match_time,
  ranking,
  maxRating,
  wins,
  maxWins,
  losses,
  maxLosses
}) => {
  return (
    <Table.Row key={team_id}>
      <Table.Cell>
        {ranking}
        {nth(ranking)}
      </Table.Cell>
      <Table.Cell>
        <Header as="h4" image inverted>
          <Image src={logo_url} size="mini" />
          <Header.Content as={Link} to={`/teams/${team_id}`}>
            {name} <Icon name="angle right" />
            <Header.Subheader>
              {moment.unix(last_match_time).fromNow()}
            </Header.Subheader>
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell verticalAlign="middle">
        <Header
          as="h5"
          inverted
          content={rating}
          style={{ marginBottom: "4px" }}
        />
        <Progress
          style={{ margin: "0px" }}
          size="tiny"
          total={maxRating}
          value={rating}
          inverted
          color="yellow"
        />
      </Table.Cell>
      <Table.Cell verticalAlign="middle">
        <Header
          as="h5"
          inverted
          content={wins}
          style={{ marginBottom: "4px" }}
        />
        <Progress
          style={{ margin: "0px" }}
          size="tiny"
          total={maxWins}
          value={wins}
          inverted
          color="green"
        />
      </Table.Cell>
      <Table.Cell verticalAlign="middle">
        <Header
          as="h5"
          inverted
          content={losses}
          style={{ marginBottom: "4px" }}
        />
        <Progress
          style={{ margin: "0px" }}
          size="tiny"
          total={maxLosses}
          value={losses}
          inverted
          color="red"
        />
      </Table.Cell>
    </Table.Row>
  );
};

export default TeamListItem;
