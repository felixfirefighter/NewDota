import React from "react";
import { Table, Header, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { getHeroImage } from "../../utils/imageUtil";
import { kFormatter } from "../../utils/numberUtil";

const MatchPlayerListItem = ({ player }) => {
  console.log(player);

  const renderAccount = () => {
    if (player.account_id) {
      return (
        <Header.Content as={Link} to={`/players/${player.account_id}`}>
          {player.name} <Icon name="angle right" />
        </Header.Content>
      );
    }

    return <Header.Content className="grey inverted">Anonymous</Header.Content>;
  };

  return (
    <Table.Row>
      <Table.Cell>
        <Header as="h5" inverted>
          <Image size="massive" src={getHeroImage(player.hero_id)} />
          {renderAccount()}
        </Header>
      </Table.Cell>
      <Table.Cell>
        <p>{player.level}</p>
      </Table.Cell>
      <Table.Cell>
        <p className="green inverted">{player.kills}</p>
      </Table.Cell>
      <Table.Cell>
        <p className="red inverted">{player.deaths}</p>
      </Table.Cell>
      <Table.Cell>
        <p className="grey inverted">{player.assists}</p>
      </Table.Cell>
      <Table.Cell>
        <p className="yellow inverted">{kFormatter(player.gold_per_min)}</p>
      </Table.Cell>
      <Table.Cell>
        <p>{kFormatter(player.xp_per_min)}</p>
      </Table.Cell>
      <Table.Cell>
        <p>{kFormatter(player.last_hits)}</p>
      </Table.Cell>
      <Table.Cell>
        <p>{player.denies}</p>
      </Table.Cell>
      <Table.Cell>
        <p>{kFormatter(player.hero_damage)}</p>
      </Table.Cell>
      <Table.Cell>
        <p>{kFormatter(player.hero_healing)}</p>
      </Table.Cell>
      <Table.Cell>
        <p>{kFormatter(player.tower_damage)}</p>
      </Table.Cell>
      <Table.Cell>
        <p className="yellow inverted">{kFormatter(player.total_gold)}</p>
      </Table.Cell>
    </Table.Row>
  );
};

export default MatchPlayerListItem;
