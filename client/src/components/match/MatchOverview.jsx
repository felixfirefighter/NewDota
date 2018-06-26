import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/matchActions";

class MatchOverview extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getMatch(id);
  }

  render() {
    const { match } = this.props.matches;

    console.log(match);

    return (
      <div>
        <h1>Hello</h1>
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
)(MatchOverview);
