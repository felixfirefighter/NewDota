import React from "react";
import { Table, Header, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import DurationComponent from "../layout/DurationComponent";
import { getHeroImage } from "../../utils/imageUtil";

const PublicMatchListItem = ({
  avg_mmr,
  avg_rank_tier,
  dire_team,
  duration,
  game_mode,
  lobby_type,
  match_id,
  num_mmr,
  num_rank_tier,
  radiant_team,
  radiant_win,
  start_time
}) => {
  const direHeroIds = dire_team.split(",");
  const radiantHeroIds = radiant_team.split(",");

  return (
    <Table.Row>
      <Table.Cell>
        <Header as="h5" inverted>
          <Header.Content
            as={Link}
            to={`/matches/${match_id}`}
            style={{ marginBottom: "4px" }}
          >
            {match_id} <Icon name="angle right" />
          </Header.Content>
          <Header.Subheader>Average MMR: {avg_mmr}</Header.Subheader>
        </Header>
      </Table.Cell>
      <Table.Cell>
        <DurationComponent
          size="h5"
          duration={duration}
          start_time={start_time}
        />
      </Table.Cell>
      <Table.Cell>
        <Header as="h5" inverted>
          {radiantHeroIds.map(id => {
            return (
              <Image
                key={id}
                src={getHeroImage(Number(id))}
                inline
                size="massive"
              />
            );
          })}
          <Header.Content>
            {radiant_win && <Icon name="trophy" className="yellow inverted" />}
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>
        <Header as="h5" inverted>
          {direHeroIds.map(id => {
            return (
              <Image
                key={id}
                src={getHeroImage(Number(id))}
                inline
                size="massive"
              />
            );
          })}
          <Header.Content>
            {!radiant_win && <Icon name="trophy" className="yellow inverted" />}
          </Header.Content>
        </Header>
      </Table.Cell>
    </Table.Row>
  );
};

export default PublicMatchListItem;
