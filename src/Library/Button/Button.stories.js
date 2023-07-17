import React from "react";
import { CustomButton } from "./Button";
import "./Button.scss";

export default {
  title: "Components/Button",
  component: CustomButton,
};

const Template = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Label",
};
