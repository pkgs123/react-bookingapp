import React from "react";
import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import SingleSelect from "../SingleSelect";

import { act } from "react-dom/test-utils";

describe("SingleSelect Component Test case", () => {
  it("With Null Value and with HandleChange", () => {
    const mockCallback = jest.fn();
    const props = {
      data: ["Example 1", "Example 2", "Example 3"],
      label: "Select",
      onSelectChange: mockCallback,
      helperText: "Test",
      width: 200,
      height: 400,
      tooltipText: "",
    };
    const { getAllByRole, getByRole } = render(
      <SingleSelect {...props} />
    );

    fireEvent.mouseDown(getByRole("button"));
    const selectId = screen
      .getByTestId("singleselect-id")
      .querySelector("input");
    expect(selectId).toBeInTheDocument();

    expect(getByRole("listbox")).not.toEqual(null);

    act(() => {
      const options = getAllByRole("option");
      fireEvent.mouseDown(options[1]);
      options[1].click();
    });
  });
  it("With Null Value Without HandleChange", () => {
    const props = {
      data: ["Example 1", "Example 2", 4],
      label: "Select",
      helperText: "Test",
      width: 200,
      height: 400,
      onSelectChange: jest.fn(),
      tooltipText: "",
    };
    const { getAllByRole, getByRole } = render(
      <SingleSelect {...props} />
    );
    fireEvent.mouseDown(getByRole("button"));
    const selectId = screen
      .getByTestId("singleselect-id")
      .querySelector("input");
    expect(selectId).toBeInTheDocument();

    expect(getByRole("listbox")).not.toEqual(null);
    act(() => {
      const options = getAllByRole("option");
      fireEvent.mouseDown(options[1]);
      options[1].click();
    });
    expect(selectId.value).toEqual(props.data[1]);
  });
});

it("With Object", () => {
  const props = {
    data: [
      {
        CodesTableId: 34,
        CodesTableName: "CTCompanyType",
        CompanyTypeName:
          "JTC Lessee/DA Prospects or their contractors",
        CompanyTypeValue:
          "JTC Lessee/DA Prospects or their contractors",
      },
      {
        CodesTableId: 35,
        CodesTableName: "CTCompanyType",
        CompanyTypeName: "JTC Contractors",
        CompanyTypeValue: "JTC Contractors",
      },
      {
        CodesTableId: 36,
        CodesTableName: "CTCompanyType",
        CompanyTypeName: "Contractors for Public Works",
        CompanyTypeValue: "Contractors for Public Works",
      },
      {
        CodesTableId: 37,
        CodesTableName: "CTCompanyType",
        CompanyTypeName: "Service Providers",
        CompanyTypeValue: "Service Providers",
      },
      {
        CodesTableId: 38,
        CodesTableName: "CTCompanyType",
        CompanyTypeName: "Others",
        CompanyTypeValue: "Others",
      },
    ],
    label: "Select",
    helperText: "Test",
    width: 200,
    height: 400,
    onSelectChange: jest.fn(),
    tooltipText: "",
    objectKey: "CodesTableId",
    objectValue: "CompanyTypeValue",
  };
  const { getAllByRole, getByRole } = render(
    <SingleSelect
      {...props}
      objectKey="CodesTableId"
      objectValue="CompanyTypeValue"
    />
  );
  fireEvent.mouseDown(getByRole("button"));
  const selectId = screen
    .getByTestId("singleselect-id")
    .querySelector("input");
  expect(selectId).toBeInTheDocument();

  expect(getByRole("listbox")).not.toEqual(null);
  act(() => {
    const options = getAllByRole("option");
    fireEvent.mouseDown(options[1]);
    options[1].click();
  });
});
