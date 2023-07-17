import React from "react";
import {
  screen,
  fireEvent,
  render
} from "@testing-library/react";
import RadioButton from "../RadioButton";

describe("RadioButton Component Testing", () => {
  it("SnapshotTesting", () => {
    expect(render(<RadioButton />)).toMatchSnapshot();
  });
  it("With HandleChange For RadioButton", async () => {
    const onChangeMock = jest.fn();
    const props = {
      label: "Radio",
      onRadioButtonChange: onChangeMock,
      size: 20,
    };
    render(<RadioButton {...props}/>);
    const radBtnId = screen.getByTestId("radioformid");
    expect(radBtnId).toBeInTheDocument();
    fireEvent.click(radBtnId);   
  });
  it("Without HandleChange For RadioButton", async () => {
    const props = {
      label: "Radio",
      size: 20,
    };
    render(<RadioButton {...props}/>);
    const radBtnId = screen.getByTestId("radioformid");
    expect(radBtnId).toBeInTheDocument();
    fireEvent.click(radBtnId);  
  });
});
