import React from "react";
import { YearMonthDaySelect } from "./YearMonthDaySelect";

export default {
  title: "Components/Years Months Days Select",
  argTypes: {
    maxYears: { control: "number" },
    disabled: {
      control: { type: "select", options: [true, false] },
    },
  },
};
const Template = (args) => <YearMonthDaySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  handleChange: () => {},
  maxYears: 99,
  label: "Test",
  tooltip: "Test",
};
