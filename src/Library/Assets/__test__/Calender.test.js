import React from "react";
import { render } from "@testing-library/react";
import Calender from "../Calender";

describe("Calender", () => {
  it("should render a calender icon", () => {
    const { container } = render(<Calender />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("width", "22");
    expect(svg).toHaveAttribute("height", "22");
    expect(svg).toHaveAttribute("fill", "none");
    expect(svg).toHaveAttribute(
      "xmlns",
      "http://www.w3.org/2000/svg"
    );
  });
});
