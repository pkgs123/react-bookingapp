import React from "react";
import { render } from "@testing-library/react";
import FilterIcon from "../FilterIcon";

describe("FilterIcon", () => {
  it("renders without errors", () => {
    const { container } = render(<FilterIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });
});
