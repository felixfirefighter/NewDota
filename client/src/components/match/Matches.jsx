import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Segment, Header } from "semantic-ui-react";

import MatchList from "./MatchList";
import * as actions from "../../actions/matchActions";

class Matches extends Component {
  componentDidMount() {
    this.props.getProMatches();
  }

  render() {
    const { proMatches } = this.props.matches;

    console.log(proMatches);

    return (
      <Segment basic>
        <Header as="h1" inverted content="Matches" />
        <Table striped inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Duration</Table.HeaderCell>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>ID</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <MatchList matches={proMatches} />
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}

const mapState = state => ({
  matches: state.matches
});

export default connect(
  mapState,
  actions
)(Matches);
