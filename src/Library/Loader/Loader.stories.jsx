import React from "react";
import { Loader } from "./Loader";
export default {
  title: "Components/Loader",
  argTypes: {
    color: { control: "text" },
    isOpen: {
      control: {
        type: "select",
        options: [true, false],
      },
    },
  },
};
const LoaderTemplate = (args) => <Loader {...args} />;

export const Primary = LoaderTemplate.bind({});
Primary.args = {
  isOpen: true,
  color: "#0288d1",
};
