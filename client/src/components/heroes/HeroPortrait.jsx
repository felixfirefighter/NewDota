import React from "react";

import { Grid, Image, Popup, Header } from "semantic-ui-react";

import { getHeroImage } from "../../utils/imageUtil";

const HeroPortrait = ({ hero, imageStyle }) => {
  return (
    <Grid.Column
      key={hero.id}
      style={{
        padding: "4px"
      }}
    >
      <Popup
        inverted
        trigger={
          <Image
            className="hero"
            size="tiny"
            style={imageStyle}
            src={`${getHeroImage(hero.id)}`}
          />
        }
      >
        <Header>{hero.localized_name}</Header>
      </Popup>
    </Grid.Column>
  );
};

export default HeroPortrait;
