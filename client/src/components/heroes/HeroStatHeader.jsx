import React from "react";
import { Table, Header, Popup } from "semantic-ui-react";

const HeroStatHeader = ({ text, popup }) => {
  return (
    <Table.HeaderCell>
      <Popup
        trigger={
          <Header as="h5" inverted>
            {text}
          </Header>
        }
      >
        {popup}
      </Popup>
    </Table.HeaderCell>
  );
};

export default HeroStatHeader;
