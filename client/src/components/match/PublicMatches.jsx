import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Segment, Header } from "semantic-ui-react";

import MatchList from "./MatchList";
import * as actions from "../../actions/matchActions";

class PublicMatches extends Component {
  componentDidMount() {
    this.props.getPublicMatches();
  }

  render() {
    const { publicMatches } = this.props.matches;

    console.log(publicMatches);

    return (
      <div>
        <Segment basic>
          <Header as="h1" inverted content="Matches" />
          <Table striped inverted>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Duration</Table.HeaderCell>
                <Table.HeaderCell>Radiant</Table.HeaderCell>
                <Table.HeaderCell>Dire</Table.HeaderCell>
                <Table.HeaderCell>Score</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <MatchList matches={publicMatches} />
            </Table.Body>
          </Table>
        </Segment>
      </div>
    );
  }
}

const mapState = state => ({
  matches: state.matches
});

export default connect(
  mapState,
  actions
)(PublicMatches);
