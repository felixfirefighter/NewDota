import React from "react";
import { Grid, Header, Select } from "semantic-ui-react";

const HeroFilter = ({ name, options, handleChange }) => {
  return (
    <Grid.Column width={4} stretched>
      <Header as="h5" inverted>
        {name}
      </Header>
      <Select
        placeholder={name}
        multiple
        options={options}
        closeOnChange
        onChange={handleChange}
      />
    </Grid.Column>
  );
};

export default HeroFilter;
