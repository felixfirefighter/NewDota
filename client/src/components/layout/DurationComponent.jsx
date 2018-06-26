import React from "react";
import moment from "moment";

import { Header } from "semantic-ui-react";

const DurationComponent = ({ duration, start_time }) => {
  return (
    <Header as="h5" inverted>
      <Header.Content style={{ marginBottom: "4px" }}>
        {moment.utc(duration * 1000).format("mm:ss")}
      </Header.Content>

      <Header.Subheader>{moment.unix(start_time).fromNow()}</Header.Subheader>
    </Header>
  );
};

export default DurationComponent;
