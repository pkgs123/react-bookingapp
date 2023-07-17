import * as React from "react";
import SingleSelect from "./SingleSelect";

export default {
  title: "Library/Single Select Dropdown",
  argTypes: {
    label: { control: "text" },
    onSelectChange: { action: "option" },
    helperText: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
  },
};

const Template = (args) => <SingleSelect {...args} />;

export const SingleSelectDropdown = Template.bind({});

SingleSelectDropdown.args = {
  data: ["Example 1", "Example 2", "Example 3"],
  label: "Test",
  width: "100%",
  tooltipText: "Dummy text",
};
