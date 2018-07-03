import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Table, Popup, Header } from "semantic-ui-react";
import * as actions from "../../actions/heroActions";
import { getHeroImage } from "../../utils/imageUtil";
import HeroStatHeader from "./HeroStatHeader";
import { heroRankHeaders } from "../../constants/data";

class HeroStats extends Component {
  componentDidMount() {
    this.props.getHeroStats();
  }

  render() {
    const { stats } = this.props.heroes;
    console.log(stats);
    return <Header inverted>Work In Progress</Header>;
  }
}

const mapState = state => ({
  heroes: state.heroes
});

export default connect(
  mapState,
  actions
)(HeroStats);
