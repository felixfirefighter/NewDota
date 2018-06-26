import React from "react";
import { Link } from "react-router-dom";

import { Table, Header, Progress, Icon, Image } from "semantic-ui-react";
import { getHeroImage } from "../../utils/imageUtil";
import { getWinRate } from "../../utils/numberUtil";

const TeamHeroListItem = ({
  games_played,
  max_games_played,
  localized_name,
  hero_id,
  wins
}) => {
  return (
    <Table.Row>
      <Table.Cell>
        <Header as="h5" inverted>
          <Image size="massive" src={getHeroImage(localized_name)} />
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
          content={getWinRate(wins, games_played)}
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

export default TeamHeroListItem;
