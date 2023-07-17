import * as React from "react";
import RadioButton from "./RadioButton";
import "./RadioButton.scss";

export default {
  title: "Library/Radio",
  argTypes: {
    label: { control: "text" },
    disabled: { control: "radio", options: [true, false] },
    onRadioButtonChange: { action: "clicked" },
    size: { control: "number" },
  },
};

const Template = (args) => (
  <RadioButton {...args} />
);

export const Radio = Template.bind({});

// export const RadioButton = (args) => (
//     <RowRadioButtonsGroup {... args} />
//   )

Radio.args = {
  label: "Test",
  disabled: false,
  size: 20,
};
