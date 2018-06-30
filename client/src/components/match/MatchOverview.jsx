import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Header, Table, Segment, Image, Icon } from "semantic-ui-react";
import * as actions from "../../actions/matchActions";
import LoadingComponent from "../layout/LoadingComponent";
import { getHeroImage } from "../../utils/imageUtil";

import MatchPlayerTable from "./MatchPlayerTable";

class MatchOverview extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getMatch(id);
  }

  renderRadiant = () => {
    const { match } = this.props.matches;
    if (!match) return;

    let radiant_logo = "/assets/radiant_icon.png";
    let radiant_name = "Radiant";
    if (match.radiant_team) {
      radiant_logo = match.radiant_team.logo_url;
      radiant_name = match.radiant_team.name;
    }

    return (
      <div>
        <Header as="h2" inverted>
          <Image src={radiant_logo} />
          <Header.Content>{radiant_name}</Header.Content>
        </Header>
        <MatchPlayerTable
          players={match.players.filter(player => player.isRadiant)}
        />
      </div>
    );
  };

  renderDire = () => {
    const { match } = this.props.matches;
    if (!match) return;

    let dire_logo = "/assets/dire_icon.png";
    let dire_name = "Dire";
    if (match.dire_team) {
      dire_logo = match.dire_team.logo_url;
      dire_name = match.dire_team.name;
    }

    return (
      <div>
        <Header as="h2" inverted>
          <Image src={dire_logo} />
          <Header.Content>{dire_name}</Header.Content>
        </Header>
        <MatchPlayerTable
          players={match.players.filter(player => !player.isRadiant)}
        />
      </div>
    );
  };

  render() {
    const { match } = this.props.matches;

    console.log(match);

    return (
      <Segment basic>
        {!match && <LoadingComponent />}
        {this.renderRadiant()}

        {this.renderDire()}
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
)(MatchOverview);
