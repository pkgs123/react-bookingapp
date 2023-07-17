import * as React from "react";
import InputTextField from "./TextField";

export default {
  title: "Library/Text Field",
  argTypes: {
    label: { control: "text" },
    type: {
      type: "select",
      options: ["text", "number", "password"],
    },
    onTextChange: { action: "text" },
    placeholder: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
  },
};

const Template = (args) => <InputTextField {...args} />;

export const TextField = Template.bind({});

TextField.args = {
  label: "Test",
  placeholder: "Type here",
  height: "50px",
  width: "100%",
  tooltipText: "Dummy text",
};
