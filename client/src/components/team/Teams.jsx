import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Segment, Header } from "semantic-ui-react";
import * as actions from "../../actions/teamActions";
import LoadingComponent from "../layout/LoadingComponent";
import TeamList from "./TeamList";

class Teams extends Component {
  componentDidMount() {
    this.props.getTeams();
  }

  renderTeams = () => {
    const { teams } = this.props.teams;
    if (teams.length === 0) return;

    const slicedTeams = teams.slice(0, 20);
    return <TeamList teams={slicedTeams} />;
  };

  render() {
    const { teams } = this.props.teams;

    return (
      <Segment basic>
        {teams.length === 0 && <LoadingComponent />}
        <Header as="h1" inverted content="Team Ranking" />
        <Table striped inverted sortable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Ranking</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Rating</Table.HeaderCell>
              <Table.HeaderCell>Wins</Table.HeaderCell>
              <Table.HeaderCell>Losses</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{this.renderTeams()}</Table.Body>
        </Table>
      </Segment>
    );
  }
}

const mapState = state => ({
  teams: state.teams
});

export default connect(
  mapState,
  actions
)(Teams);
