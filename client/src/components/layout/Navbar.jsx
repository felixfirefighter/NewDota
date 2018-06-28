import React from "react";
import { Menu, Header, Container } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={Link} to="/" header>
          <Header inverted content="FreeDota" />
        </Menu.Item>
        <Menu.Item as={NavLink} to="/teams" name="Teams" />
        <Menu.Item as={NavLink} to="/matches" name="Matches" />
        <Menu.Item as={NavLink} to="/heroes" name="Heroes" />
      </Container>
    </Menu>
  );
};

export default Navbar;
