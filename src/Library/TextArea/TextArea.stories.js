import * as React from "react";
import CommentTextArea from "./TextArea";

export default {
  title: "Library/Text Area",
  argTypes: {
    label: { control: "text" },
    onTextChange: { action: "text" },
    rows: { control: "number" },
    limit: { control: "number" },
    placeholder: { control: "text" },
    width: { control: "text" },
  },
};

const Template = (args) => <CommentTextArea {...args} />;

export const TextArea = Template.bind({});

TextArea.args = {
  label: "Test",
  rows: 5,
  limit: 200,
  placeholder: "Type here",
  width: "100%",
  tooltipText: "Dummy text",
};
