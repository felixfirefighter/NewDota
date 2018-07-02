import React from "react";
import moment from "moment";

import { Header } from "semantic-ui-react";

const DurationComponent = ({ size, duration, start_time, style }) => {
  return (
    <Header as={size} inverted style={style}>
      <Header.Content style={{ marginBottom: "4px" }}>
        {moment.utc(duration * 1000).format("mm:ss")}
      </Header.Content>

      <Header.Subheader>{moment.unix(start_time).fromNow()}</Header.Subheader>
    </Header>
  );
};

export default DurationComponent;
