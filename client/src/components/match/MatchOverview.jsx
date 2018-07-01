import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Header, Table, Segment, Image, Icon } from "semantic-ui-react";
import * as actions from "../../actions/matchActions";
import LoadingComponent from "../layout/LoadingComponent";
import MatchTeamHeader from "./MatchTeamHeader";
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
        <MatchTeamHeader
          isRadiant={true}
          logo={match.radiant_team.logo_url}
          name={match.radiant_team.name}
          team_id={match.radiant_team.team_id}
        />
        <MatchPlayerTable
          players={match.players.filter(player => player.isRadiant)}
        />

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
