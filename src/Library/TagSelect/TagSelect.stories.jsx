import React from "react";
import { TagSelect } from "./TagSelect";

const top100Films = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Godfather: Part II",
  "The Dark Knight",
  "12 Angry Men",
  "Schindler's List",
  "Pulp Fiction",
];
export default {
  title: "Components/Tag Select",
  argTypes: {
    placeholder: { control: "text" },
    limit: { control: "text" },
    disabled: {
      control: { type: "select", options: [true, false] },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium"],
      },
    },
  },
};
const tagsTemplate = (args) => <TagSelect {...args} />;

export const Primary = tagsTemplate.bind({});
let values = ["The Dark Knight", "12 Angry Men"];
Primary.args = {
  disabled: false,
  placeholder: "Select movie",
  options: top100Films,
  selectedValues: values,
  handleTags: () => {},
};
