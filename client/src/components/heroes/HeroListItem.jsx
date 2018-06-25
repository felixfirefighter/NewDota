import React from "react";
import { Link } from "react-router-dom";

import { Table, Header, Progress, Icon } from "semantic-ui-react";

const PlayerListItem = ({
  games_played,
  max_games_played,
  localized_name,
  hero_id,
  wins
}) => {
  const winRate = ((wins / games_played) * 100).toFixed(2);

  return (
    <Table.Row key={hero_id}>
      <Table.Cell>
        <Header as="h5" inverted>
          <Header.Content as={Link} to={`/heroes/${hero_id}`}>
            {localized_name} <Icon name="angle right" />
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
