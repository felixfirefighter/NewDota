import React, { Component } from "react";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";
import * as actions from "../../actions/heroActions";
import { getHeroImage } from "../../utils/imageUtil";

class HeroStats extends Component {
  render() {
    const { heroes } = this.props.heroes;
    console.log(heroes);
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

const mapState = state => ({
  heroes: state.heroes
});

export default connect(
  mapState,
  actions
)(HeroStats);
