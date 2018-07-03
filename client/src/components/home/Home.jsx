import React, { Component } from "react";

class Home extends Component {
  componentDidMount() {
    if (this.props.location && this.props.location.pathname === "/") {
      this.props.history.replace("/matches/pro");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location && nextProps.location.pathname === "/") {
      nextProps.history.replace("/matches/pro");
    }
  }

  render() {
    return <div />;
  }
}

export default Home;
