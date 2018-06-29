import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class MatchNavbar extends Component {
  componentDidMount() {
    if (this.props.location.pathname === "/heroes") {
      this.props.history.replace("/heroes/stats");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname === "/heroes") {
      nextProps.history.replace("/matches/stats");
    }
  }

  render() {
    return (
      <Segment basic>
        <Menu secondary inverted widths={2}>
          <Menu.Item as={NavLink} to="/heroes/stats" name="Stats" />
          <Menu.Item as={NavLink} to="/heroes/misc" name="Misc" />
        </Menu>
      </Segment>
    );
  }
}

export default MatchNavbar;
