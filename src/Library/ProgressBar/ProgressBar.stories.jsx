import React from "react";
import { ProgressBar } from "./ProgressBar";

const steps = [
  {
    label: "Select",
    status: "completed",
    scrollTo: "select",
  },
  {
    label: "Select 1",
    status: "incomplete",
    scrollTo: "select1",
  },
  {
    label: "Select 2",
    status: "in-progress",
    scrollTo: "select2",
  },
  {
    label: "Select 3",
    status: "",
    scrollTo: "select3",
  },
  {
    label: "Select 4",
    status: "",
    scrollTo: "select4",
  },
];

export default {
  title: "Components/ProgressBar",
  argTypes: {},
};
const ProgressBarTemplate = (args) => (
  <ProgressBar {...args} />
);

export const Primary = ProgressBarTemplate.bind({});
Primary.args = {
  steps: steps,
};
