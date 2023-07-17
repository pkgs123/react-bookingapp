import React from "react";
import { CommentBox } from "./CommentBox";

export default {
  title: "Components/CommentBox",
  argTypes: {
    limit: { control: "number" },
    height: { control: "number" },
    disabled: {
      control: { type: "select", options: [true, false] },
    },
  },
};
const CommentBoxTemplate = (args) => (
  <CommentBox {...args} />
);

export const Primary = CommentBoxTemplate.bind({});
Primary.args = {
  handleSubmit: async () => {
    return { success: true };
  },
  limit: 100,
  placeholder: "Enter comment here...",
  height: 60,
};
