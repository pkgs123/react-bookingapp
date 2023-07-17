import React from "react";
import ControlledCheckbox from "./Checkbox";
import "./Checkbox.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Library/Checkbox",
  argTypes: {
    label: { control: "text" },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    onCheckedChange: { action: "clicked" },
    color: { control: "color" },
  },
};

const Template = (args) => <ControlledCheckbox {...args} />;

export const Checkbox = Template.bind({});

Checkbox.args = {
  label: "Test",
  size: "small",
};
