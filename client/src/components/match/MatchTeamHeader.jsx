import React from "react";
import { Link } from "react-router-dom";
import { Header, Image, Icon } from "semantic-ui-react";

const MatchTeamHeader = ({ isRadiant, logo, name, team_id }) => {
  let renderLogo;

  if (isRadiant) {
    renderLogo = logo ? (
      <Image src={logo} />
    ) : (
      <Image src="/assets/radiant_icon.png" />
    );
  } else {
    renderLogo = logo ? (
      <Image src={logo} />
    ) : (
      <Image src="/assets/dire_icon.png" />
    );
  }

  const renderContent = team_id ? (
    <Header.Content
      as={Link}
      to={`/teams/${team_id}`}
      className="white inverted"
    >
      {name} <Icon name="angle right" />
    </Header.Content>
  ) : (
    <Header.Content>{isRadiant ? "Radiant" : "Dire"}</Header.Content>
  );

  return (
    <div>
      <Header as="h2" inverted>
        {renderLogo}
        {renderContent}
      </Header>
    </div>
  );
};

export default MatchTeamHeader;
