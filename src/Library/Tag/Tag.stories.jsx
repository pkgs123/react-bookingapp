import React from "react";
import { Tag } from "./Tag";
export default {
  title: "Components/Tag",
  argTypes: {
    label: { control: "text" },
  },
};
const tagTemplate = (args) => <Tag {...args} />;

export const Primary = tagTemplate.bind({});
Primary.args = {
  label: "Test tag",
};
