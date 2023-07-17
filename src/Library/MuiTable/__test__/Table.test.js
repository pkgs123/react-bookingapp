import React from "react";
import { render } from "@testing-library/react";
import MuiDataTable from "../Table";

const data = [
  { name: "John", age: 30, city: "New York" },
  { name: "Jane", age: 25, city: "Los Angeles" },
  { name: "Bob", age: 40, city: "Chicago" },
];

const columns = [
  {
    name: "Name",
    field: "name",
  },
  {
    name: "Age",
    field: "age",
  },
  {
    name: "City",
    field: "city",
  },
];

const options = {
  selectableRows: "multiple",
  rowsPerPage: 2,
};

describe("MuiDataTable", () => {
  it("should render table with data and columns", () => {
    render(
      <MuiDataTable
        data={data}
        columns={columns}
        options={options}
      />
    );
  });
});
