import React from "react";
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from "@testing-library/react";

import CustomDatepicker from "../Datepicker";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("DatePicker component Testing", () => {
  it("Snapshot Testing", () => {
    expect(render(<CustomDatepicker />)).toMatchSnapshot();
  });

  it("test1--showMonthYearPicker", async () => {
    const value = new Date(1, 1, 2000);
    const { container, getAllByRole } = render(
      <CustomDatepicker
        isClearable={true}
        shouldCloseOnSelect={true}
        name="selDate"
        value={value}
        getDate={jest.fn()}
      />
    );
    const dateInput = container.querySelector("input");

    await waitFor(() => {
      userEvent.click(dateInput);
    });
    await waitFor(() => {
      userEvent.clear(dateInput);
    });

    const selectId = screen
      .getByTestId("custinput-textfield")
      .querySelector("input");
    expect(selectId).toBeInTheDocument();
    act(() => {
      const options = getAllByRole("option");
      fireEvent.mouseDown(options[1]);
      options[1].click();
    });
  });

  it("test2--show defaultDatepicker", async () => {
    const value = new Date(1, 1, 2000);
    const { container, getAllByRole } = render(
      <CustomDatepicker
        isClearable={true}
        showMonthYearPicker={true}
        shouldCloseOnSelect={true}
        dateFormat="dd-MMM-yyyy"
        name="selDate"
        value={value}
        getDate={jest.fn()}
      />
    );
    const dateInput = container.querySelector("input");

    await waitFor(() => {
      userEvent.click(dateInput);
    });
    await waitFor(() => {
      userEvent.clear(dateInput);
    });

    const selectId = screen
      .getByTestId("custinput-textfield")
      .querySelector("input");
    expect(selectId).toBeInTheDocument();
    act(() => {
      const options = getAllByRole("option");
      fireEvent.mouseDown(options[1]);
      options[1].click();
    });
  });

  it("test3--Null check for CustomDatepicker", () => {
    render(
      <CustomDatepicker
        showMonthYearPicker={false}
        dateFormat="MMMM yyyy"
        isClearable={true}
      ></CustomDatepicker>
    );
  });
});
