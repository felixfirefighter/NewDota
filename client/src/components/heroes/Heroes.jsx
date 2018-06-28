import React, { Component } from "react";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";
import * as actions from "../../actions/heroActions";
import { getHeroImage } from "../../utils/imageUtil";

class Heroes extends Component {
  componentDidMount() {
    this.props.getHeroes();
  }

  render() {
    const { heroes } = this.props.heroes;

    return (
      <div>
        {heroes.map(hero => {
          return (
            <Image
              size="tiny"
              src={`${getHeroImage(hero.localized_name)}`}
              inline
              style={{ margin: "4px" }}
            />
          );
        })}
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
)(Heroes);
