import React, { Component } from "react";
import { Table, Header, Grid, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import * as actions from "../../actions/teamActions";
import LoadingComponent from "../layout/LoadingComponent";
import MatchList from "../match/MatchList";

class TeamOverview extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.getTeamMatches(id);
    this.props.getTeamPlayers(id);
    this.props.getTeamHeroes(id);
  }

  renderMatches = () => {
    const { matches } = this.props.teams;
    if (matches.length === 0) return;

    const sliced = matches.slice(0, 20);
    return <MatchList matches={sliced} />;
  };

  render() {
    const { matches, players, heroes } = this.props.teams;

    console.log(matches);

    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment basic>
            {matches.length === 0 && <LoadingComponent />}
            <Header as="h2" inverted content="Team Ranking" />
            <Table striped inverted sortable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>ID</Table.HeaderCell>
                  <Table.HeaderCell>Duration</Table.HeaderCell>
                  <Table.HeaderCell>Opposing Team</Table.HeaderCell>
                  <Table.HeaderCell>Result</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>{this.renderMatches()}</Table.Body>
            </Table>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapState = state => ({
  teams: state.teams
});

export default connect(
  mapState,
  actions
)(TeamOverview);
