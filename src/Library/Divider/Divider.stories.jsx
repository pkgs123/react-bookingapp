import * as React from "react";
import FormDivider from "./Divider";
import "./Divider.scss";

export default {
  title: "Library/Divider",
  argTypes: {
    label: { control: "text" },
    className: {
      type: "select",
      options: ["exampleDivider"],
    },
    align: {
      type: "select",
      options: ["middle", "left", "right"],
    },
    color: { control: "color" },
  },
};

const Template = (args) => <FormDivider {...args} />;

export const Divider = Template.bind({});
