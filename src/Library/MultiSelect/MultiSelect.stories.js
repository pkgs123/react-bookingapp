import * as React from "react";
import MultiSelect from "./MultiSelect";

export default {
  title: "Library/Multi Select Dropdown",
  argTypes: {
    label: { control: "text" },
    onSelectChange: { action: "option" },
    width: { control: "text" },
    height: { control: "text" },
    placeholder: { control: "text" },
  },
};

const Template = (args) => <MultiSelect {...args} />;

export const MultiSelectDropdown = Template.bind({});

MultiSelectDropdown.args = {
  data: ["Example 1", "Example 2", "Example 3"],
  label: "Test",
  width: "100%",
  tooltipText: "Dummy text",
  placeholder: "Select",
};
