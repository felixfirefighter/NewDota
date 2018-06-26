import React from "react";
import { Link } from "react-router-dom";
import { Icon, Header } from "semantic-ui-react";

const LeagueComponent = ({ match_id, league_name }) => {
  return (
    <Header as="h5" inverted>
      <Header.Content
        as={Link}
        to={`/matches/${match_id}`}
        style={{ marginBottom: "4px" }}
      >
        {match_id} <Icon name="angle right" />
      </Header.Content>
      <Header.Subheader>{league_name}</Header.Subheader>
    </Header>
  );
};

export default LeagueComponent;
