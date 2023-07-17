import * as React from "react";
import { CustomLabel } from "./Label";

export default {
  title: "Library/Label",
  argTypes: {
    label: { control: "text" },
  },
};

const Template = (args) => <CustomLabel {...args} />;

export const CustomLabelTemp = Template.bind({});

CustomLabelTemp.args = {
  label: "Test",
  tooltipText: "Dummy text",
};
