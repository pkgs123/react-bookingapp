import React from "react";
import { CustomAutocomplete } from "./Autocomplete";
import "./Autocomplete.scss";

export default {
  title: "Components/Autocomplete",
  component: CustomAutocomplete,
};

const Template = (args) => (
  <CustomAutocomplete
    handleOptionLable={(option) => option.title}
    {...args}
  />
);

export const Autocomplete = Template.bind({});

Autocomplete.args = {
  options: [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title:
        "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
  ],
};
