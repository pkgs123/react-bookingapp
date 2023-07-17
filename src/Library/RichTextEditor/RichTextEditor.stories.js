import * as React from "react";
import { CustomRTE } from "./RichTextEditor";

export default {
  title: "Library/CustomRTE",
  argTypes: {
    label: { control: "text" },
  },
};

const Template = (args) => <CustomRTE {...args} />;

export const CustomRTETemp = Template.bind({});

CustomRTETemp.args = {
  label: "Test",
  onRTEChange: ()=>{},
};
