import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
import { Header, Table, Segment, Image, Icon, Grid } from "semantic-ui-react";
import * as actions from "../../actions/matchActions";
import LoadingComponent from "../layout/LoadingComponent";
import MatchTeamHeader from "./MatchTeamHeader";
import MatchBanList from "./MatchBanList";
import DurationComponent from "../layout/DurationComponent";
import { getHeroImage } from "../../utils/imageUtil";

import MatchPlayerTable from "./MatchPlayerTable";

class MatchOverview extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getMatch(id);
  }

  render() {
    const { match } = this.props.matches;

    console.log(match);

    if (!match) return <LoadingComponent />;

    return (
      <Fragment>
        <Grid verticalAlign="middle">
          <Grid.Column width={5}>
            {match.radiant_win ? (
              <Header
                as="h1"
                inverted
                color="green"
                style={{ textTransform: "uppercase" }}
              >
                {match.radiant_team.name} Victory
              </Header>
            ) : (
              <Header
                as="h1"
                inverted
                color="red"
                style={{ textTransform: "uppercase" }}
              >
                {match.dire_team.name} Victory
              </Header>
            )}
          </Grid.Column>
          <Grid.Column width={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <h1
                className="text-huge inverted green inline"
                style={{ margin: "0" }}
              >
                {match.radiant_score}
              </h1>

              <DurationComponent
                size="h2"
                duration={match.duration}
                start_time={match.start_time}
                style={{ margin: "16px", textAlign: "center" }}
              />

              <h1
                className="text-huge inverted red inline"
                style={{ margin: "0" }}
              >
                {match.dire_score}
              </h1>
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
            <div style={{ display: "flex" }}>
              <div style={{ margin: "8px" }}>
                <Header as="h4" inverted style={{ textAlign: "right" }}>
                  <span style={{ textTransform: "uppercase" }}>League</span>
                  <Header.Subheader>{match.league.name}</Header.Subheader>
                </Header>
              </div>
              <div style={{ margin: "8px" }}>
                <Header as="h4" inverted style={{ textAlign: "right" }}>
                  <span style={{ textTransform: "uppercase" }}>Match ID</span>
                  <Header.Subheader>{match.match_id}</Header.Subheader>
                </Header>
              </div>
            </div>
          </Grid.Column>
        </Grid>

        <MatchTeamHeader
          isRadiant={true}
          logo={match.radiant_team.logo_url}
          name={match.radiant_team.name}
          team_id={match.radiant_team.team_id}
        />
        <MatchPlayerTable
          players={match.players.filter(player => player.isRadiant)}
        />

        {match.picks_bans && (
          <MatchBanList
            picks_bans={match.picks_bans.filter(p => p.team === 0)}
          />
        )}

        {match.picks_bans && (
          <MatchBanList
            picks_bans={match.picks_bans.filter(p => p.team === 1)}
          />
        )}

        <MatchTeamHeader
          isRadiant={false}
          logo={match.dire_team.logo_url}
          name={match.dire_team.name}
          team_id={match.dire_team.team_id}
        />

        <MatchPlayerTable
          players={match.players.filter(player => !player.isRadiant)}
        />
      </Fragment>
    );
  }
}

const mapState = state => ({
  matches: state.matches
});

export default connect(
  mapState,
  actions
)(MatchOverview);
