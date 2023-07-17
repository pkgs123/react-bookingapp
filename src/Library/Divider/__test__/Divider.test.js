import React from "react";
import { render } from "@testing-library/react";
import FormDivider from "../Divider";

describe("Divider Component TestCase", () => {
  it("Snapshot Testing for Divider Component", () => {
    expect(render(<FormDivider />)).toMatchSnapshot();
  });
  it("Check Divider is available with props", () => {
    const props = {
      className: "",
      align: "center",
      label: "Hello",
      color: "black",
    };
    render(<FormDivider {...props} />);
  });
});
