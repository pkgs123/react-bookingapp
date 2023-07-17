import { render, screen } from "@testing-library/react";
import { Tag } from "../Tag";

test("Should load Tag", async () => {
  render(<Tag label="Test tag" />);

  expect(screen.getByText("Test tag")).toBeInTheDocument();
});
