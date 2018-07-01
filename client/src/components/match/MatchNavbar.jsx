import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";

class MatchNavbar extends Component {
  componentDidMount() {
    if (this.props.location && this.props.location.pathname === "/matches") {
      this.props.history.replace("/matches/pro");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location && nextProps.location.pathname === "/matches") {
      nextProps.history.replace("/matches/pro");
    }
  }

  render() {
    return (
      <Segment basic>
        <Menu secondary pointing inverted widths={2}>
          <Menu.Item as={NavLink} to="/matches/pro" name="Professional" />
          <Menu.Item as={NavLink} to="/matches/public" name="Public" />
        </Menu>
      </Segment>
    );
  }
}

export default withRouter(MatchNavbar);
