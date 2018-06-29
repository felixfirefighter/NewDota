import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Grid } from "semantic-ui-react";
import * as actions from "../../actions/heroActions";
import { getHeroImage } from "../../utils/imageUtil";

import "./heroes.css";

class Heroes extends Component {
  componentDidMount() {
    this.props.getHeroes();
  }

  render() {
    const { heroes } = this.props.heroes;
    console.log(heroes);
    return (
      <Grid>
        {heroes.map(hero => {
          return (
            <Grid.Column
              key={hero.id}
              style={{
                padding: "4px"
              }}
            >
              <Image
                className="hero"
                size="tiny"
                src={`${getHeroImage(hero.localized_name)}`}
                inline
              />
            </Grid.Column>
          );
        })}
      </Grid>
    );
  }
}

const mapState = state => ({
  heroes: state.heroes
});

export default connect(
  mapState,
  actions
)(Heroes);
