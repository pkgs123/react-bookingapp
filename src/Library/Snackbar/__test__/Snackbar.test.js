import React from "react";
import { render, screen } from "@testing-library/react";
import { CustomSnackbar } from "../Snackbar";

const props = {
  type: "success",
  message: "info messsage on snackbar",
  handleClose: jest.fn(),
  onExit: () => jest.fn(),
  duration: 6000,
  isOpen: true,
  vertical: "top",
  horizontal: "center",
  showIcon: true,
};

describe("CustomSnackbar", () => {
  it("should load CustomSnackbar", () => {
    render(<CustomSnackbar {...props} />);
    expect(
      screen.getByText("info messsage on snackbar")
    ).toBeInTheDocument();
  });
});
