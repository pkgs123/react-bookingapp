import React from "react";
import { FileUpload } from "./FileUpload";

export default {
  title: "Components/FileUpload",
  argTypes: {
    buttonLabel: { control: "text" },
    title: { control: "text" },
    subTitle: { control: "text" },
    simple: {
      control: { type: "select", options: [true, false] },
    },
    multiple: {
      control: { type: "select", options: [true, false] },
    },
    showErrors: {
      control: { type: "select", options: [true, false] },
    },
    buttonPrimary: {
      control: { type: "select", options: [true, false] },
    },
    maxSize: {
      control: {
        type: "select",
        options: [10, 20, 30, 40, 50],
      },
    },
  },
};
const Template = (args) => <FileUpload {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  simple: false,
  maxSize: 10,
  buttonLabel: "Select file",
  title: "Select a file or drag and drop here",
  subTitle:
    "All file types allowed. File size no more than 10 MB",
  multiple: true,
  showErrors: true,
  handleFiles: () => {},
  buttonPrimary: false,
};
