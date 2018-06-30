import React, { Fragment } from "react";
import HeroPortrait from "./HeroPortrait";

const HeroPortraitList = ({
  heroes,
  selectedRoles,
  selectedAttackTypes,
  selectedPrimaryAttrs,
  selectedLegs
}) => {
  return (
    <Fragment>
      {heroes.map(hero => {
        const style = { filter: "grayscale(100%)" };

        let isInRole = true;
        if (selectedRoles.length > 0) {
          isInRole = hero.roles.some(role => {
            return selectedRoles.indexOf(role) !== -1;
          });
        }

        let hasAttackType = true;
        if (selectedAttackTypes.length > 0) {
          hasAttackType = selectedAttackTypes.indexOf(hero.attack_type) !== -1;
        }

        let attributeType = true;
        if (selectedPrimaryAttrs.length > 0) {
          attributeType =
            selectedPrimaryAttrs.indexOf(hero.primary_attr) !== -1;
        }

        let hasLegCount = true;

        if (selectedLegs.length > 0) {
          hasLegCount = selectedLegs.indexOf(hero.legs) !== -1;
        }

        if (isInRole && hasAttackType && attributeType && hasLegCount) {
          style.filter = "";
        }

        return <HeroPortrait key={hero.id} hero={hero} imageStyle={style} />;
      })}
    </Fragment>
  );
};

export default HeroPortraitList;
