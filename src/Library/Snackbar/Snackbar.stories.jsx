import React from "react";
import { CustomSnackbar } from "./Snackbar";

export default {
  title: "library/Snackbar",
  argTypes: {
    duration: { control: "number" },
    message: { control: "text" },
    isOpen: {
      type: "select",
      options: [true, false],
    },
    type: {
      type: "select",
      options: ["success", "error", "warning"],
    },
    vertical: {
      type: "select",
      options: ["top", "bottom"],
    },
    horizontal: {
      type: "select",
      options: ["right", "center", "left"],
    },
  },
};
const CustomSnackbarTemplate = (args) => (
  <CustomSnackbar {...args} />
);

export const Primary = CustomSnackbarTemplate.bind({});
Primary.args = {
  type: "success",
  message: "info messsage on snackbar",
  handleClose: () => {},
  onExit: () => {},
  duration: 6000,
  isOpen: true,
  vertical: "top",
  horizontal: "center",
};
