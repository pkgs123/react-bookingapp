import { render } from "@testing-library/react";
import ViewColumnIcon from "../ViewColumnIcon";

describe("ViewColumnIcon", () => {
  it("renders without errors", () => {
    const { container } = render(<ViewColumnIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });
});
