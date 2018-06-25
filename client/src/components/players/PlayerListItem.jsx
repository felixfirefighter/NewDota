import React from "react";
import { Link } from "react-router-dom";

import { Table, Header, Progress, Icon } from "semantic-ui-react";

const PlayerListItem = ({
  account_id,
  games_played,
  max_games_played,
  name,
  wins
}) => {
  const winRate = ((wins / games_played) * 100).toFixed(2);
  return (
    <Table.Row key={account_id}>
      <Table.Cell>
        <Header as="h5" inverted>
          <Header.Content as={Link} to={`/players/${account_id}`}>
            {name} <Icon name="angle right" />
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>
        <Header
          as="h5"
          inverted
          content={games_played}
          style={{ marginBottom: "4px" }}
        />
        <Progress
          style={{ margin: "0px" }}
          size="tiny"
          total={max_games_played}
          value={games_played}
          inverted
          color="teal"
        />
      </Table.Cell>
      <Table.Cell>
        <Header
          as="h5"
          inverted
          content={winRate}
          style={{ marginBottom: "4px" }}
        />
        <Progress
          style={{ margin: "0px" }}
          size="tiny"
          total={games_played}
          value={wins}
          inverted
          color="blue"
        />
      </Table.Cell>
    </Table.Row>
  );
};

export default PlayerListItem;
