import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Image, Grid, Popup, Header, Select } from "semantic-ui-react";
import * as actions from "../../actions/heroActions";

import HeroFilter from "./HeroFilter";
import HeroPortraitList from "./HeroPortraitList";

import { HERO_PRIMARY_ATTRIBUTE } from "../../constants";
import "./heroes.css";

class Heroes extends Component {
  state = {
    selectedRoles: [],
    selectedAttackTypes: [],
    selectedPrimaryAttrs: [],
    selectedLegs: []
  };

  componentDidMount() {
    this.props.getHeroes();
  }

  handleSelectedRolesChange = (e, { value }) => {
    this.setState({
      selectedRoles: value
    });
  };

  handleSelectedAttackTypesChange = (e, { value }) => {
    this.setState({
      selectedAttackTypes: value
    });
  };

  handleSelectedPrimaryAttrsChange = (e, { value }) => {
    this.setState({
      selectedPrimaryAttrs: value
    });
  };

  handleSelecedLegsChange = (e, { value }) => {
    this.setState({
      selectedLegs: value
    });
  };

  render() {
    const { heroes } = this.props.heroes;
    const {
      selectedRoles,
      selectedAttackTypes,
      selectedPrimaryAttrs,
      selectedLegs
    } = this.state;

    const roles = _
      .chain(heroes)
      .map("roles")
      .flatten()
      .uniq()
      .map(role => {
        return {
          key: role,
          value: role,
          text: role
        };
      })
      .value();

    const attackTypes = _
      .uniqBy(heroes, "attack_type")
      .map(({ attack_type }) => {
        return {
          key: attack_type,
          value: attack_type,
          text: attack_type
        };
      });

    const legs = _
      .chain(heroes)
      .sortBy("legs")
      .sortedUniqBy("legs")
      .map(({ legs }) => {
        return {
          key: legs,
          value: legs,
          text: legs
        };
      })
      .value();

    return (
      <div>
        <Grid
          doubling
          stretched
          style={{ marginBottom: "2rem", marginTop: "2rem" }}
        >
          <HeroFilter
            name="Roles"
            options={roles}
            handleChange={this.handleSelectedRolesChange}
          />
          <HeroFilter
            name="Attack Type"
            options={attackTypes}
            handleChange={this.handleSelectedAttackTypesChange}
          />
          <HeroFilter
            name="Primary Attribute"
            options={HERO_PRIMARY_ATTRIBUTE}
            handleChange={this.handleSelectedPrimaryAttrsChange}
          />
          <HeroFilter
            name="Legs"
            options={legs}
            handleChange={this.handleSelecedLegsChange}
          />
        </Grid>
        <Grid doubling width={1}>
          <HeroPortraitList
            heroes={heroes}
            selectedRoles={selectedRoles}
            selectedPrimaryAttrs={selectedPrimaryAttrs}
            selectedAttackTypes={selectedAttackTypes}
            selectedLegs={selectedLegs}
          />
        </Grid>
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
