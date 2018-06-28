import React, { Component } from "react";
import { Table, Header, Grid, Segment, Item, Label } from "semantic-ui-react";
import { connect } from "react-redux";

import * as actions from "../../actions/teamActions";
import LoadingComponent from "../layout/LoadingComponent";
import TeamMatchList from "./TeamMatchList";
import TeamPlayerList from "./TeamPlayerList";
import TeamHeroList from "./TeamHeroList";

class TeamOverview extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.getTeam(id);
    this.props.getTeamMatches(id);
    this.props.getTeamPlayers(id);
    this.props.getTeamHeroes(id);
  }

  renderMatches = () => {
    const { matches } = this.props.teams;
    if (matches.length === 0) return;

    const sliced = matches.slice(0, 20);
    return <TeamMatchList matches={sliced} />;
  };

  renderPlayers = () => {
    const { players } = this.props.teams;
    if (players.length === 0) return;

    const activePlayers = players.filter(
      player => player.is_current_team_member
    );

    if (activePlayers.length === 0) return;

    return <TeamPlayerList players={activePlayers} />;
  };

  renderHeroes = () => {
    const { heroes } = this.props.teams;
    if (heroes.length === 0) return;

    const sliced = heroes.slice(0, 10);
    return <TeamHeroList heroes={sliced} />;
  };

  render() {
    const { team, matches, players, heroes } = this.props.teams;

    // console.log(heroes);
    console.log(team);

    return (
      <Grid>
        <Grid.Column width={16}>
          <Segment basic>
            <Item.Group>
              <Item>
                <Item.Image size="small" src={team.logo_url} />

                <Item.Content verticalAlign="middle">
                  <Header as="h1" inverted style={{ color: "#fff" }}>
                    {team.name}
                  </Header>
                  <div style={{ display: "flex" }}>
                    <div style={{ margin: "16px 16px 0 0" }}>
                      <Label color="green" size="large">
                        WINS
                        <Label.Detail>{team.wins}</Label.Detail>
                      </Label>
                    </div>
                    <div style={{ margin: "16px 16px 0 0" }}>
                      <Label color="red" size="large">
                        LOSSES
                        <Label.Detail>{team.losses}</Label.Detail>
                      </Label>
                    </div>
                    <div style={{ margin: "16px 16px 0 0" }}>
                      <Label color="yellow" size="large">
                        RATING
                        <Label.Detail>{team.rating}</Label.Detail>
                      </Label>
                    </div>
                  </div>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment basic>
            {matches.length === 0 && <LoadingComponent />}
            <Header as="h2" inverted content="Recent Matches" />
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
        <Grid.Column width={6}>
          <Segment basic>
            {players.length === 0 && <LoadingComponent />}
            <Header as="h2" inverted content="Current Players" />
            <Table striped inverted>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Games</Table.HeaderCell>
                  <Table.HeaderCell>Win Rate</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>{this.renderPlayers()}</Table.Body>
            </Table>
          </Segment>

          <Segment basic>
            {heroes.length === 0 && <LoadingComponent />}
            <Header as="h2" inverted content="Most Played Heroes" />
            <Table striped inverted>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Games</Table.HeaderCell>
                  <Table.HeaderCell>Win Rate</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>{this.renderHeroes()}</Table.Body>
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
