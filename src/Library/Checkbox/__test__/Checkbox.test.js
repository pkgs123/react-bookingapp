import React from "react";
import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import ControlledCheckbox from "../Checkbox";

describe("Checkbox Component Testing", () => {
  it("Snapshot Testing", () => {
    expect(
      render(<ControlledCheckbox />)
    ).toMatchSnapshot();
  });
  it("with CheckBox HandleEvent", () => {
    const props = {
      label: "Test",
      size: "medium",
      onCheckedChange: jest.fn(),
      color: "black",
    };
    render(<ControlledCheckbox {...props} />);
    const checkBoxId = screen.getByTestId("checkbox-id");
    expect(checkBoxId).toBeInTheDocument();
    fireEvent.click(checkBoxId);
  });
  it("with CheckBox HandleEvent", () => {
    const props = {
      label: "Test",
      size: "medium",
      color: "black",
    };
    render(<ControlledCheckbox {...props} />);
    const checkBoxId = screen.getByTestId("checkbox-id");
    expect(checkBoxId).toBeInTheDocument();
    fireEvent.click(checkBoxId);
  });
  it("with CheckBox disable", () => {
    const props = {
      label: "Test",
      size: "medium",
      color: "black",
      isDisabled: true
    };
    render(<ControlledCheckbox {...props} />);
    const checkBoxId = screen.getByTestId("checkbox-id");
    expect(checkBoxId).toBeInTheDocument();
    expect(checkBoxId).toBeDisabled();
  });
});
