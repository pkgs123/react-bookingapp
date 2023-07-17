import { Checkbox } from "@mui/material";
import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { AutocompleteMultiSelect } from "./AutocompleteMultiSelect";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default {
  title: "Components/AutocompleteMultiSelect",
  component: AutocompleteMultiSelect,
};

const Template = (args) => (
  <AutocompleteMultiSelect
    multiple={true}
    handleOptionLabel={(option) => option.title}
    handleRenderOption={(props, option, { selected }) => (
      <li {...props}>
        <Checkbox
          icon={icon}
          checkedIcon={checkedIcon}
          style={{ marginRight: 8 }}
          checked={selected}
        />
        {option.title}
      </li>
    )}
    {...args}
  />
);

export const AutocompleteMultiSelectList = Template.bind(
  {}
);

AutocompleteMultiSelectList.args = {
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
