import React from "react";
import { render } from "@testing-library/react";
import Cancel from "../Cancel";

describe("Cancel", () => {
  test("renders without errors", () => {
    const { container } = render(<Cancel />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Cancel />);
    expect(asFragment()).toMatchSnapshot();
  });
});
