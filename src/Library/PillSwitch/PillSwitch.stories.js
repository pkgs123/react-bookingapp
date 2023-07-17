import React from "react";
import { PillSwitch } from "./PillSwitch";
export default {
  title: "Components/PillSwitch",
  argTypes: {
    isOn: {
      control: {
        type: "select",
        options: [undefined, true, false],
      },
    },
  },
};
const SwitchTemplate = (args) => <PillSwitch {...args} />;

export const Primary = SwitchTemplate.bind({});
Primary.args = {
  isOn: true,
  handleToggle: () => {},
};
