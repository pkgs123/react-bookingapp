import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import TableHeader from "../TableHeader";

const props = {
  title: "test title",
  id: "2",
};

test("Should render TableHeader", async () => {
  render(<TableHeader {...props} />);

  expect(
    screen.getByText("test title")
  ).toBeInTheDocument();
  const header = screen.getByTestId("header-click");
  fireEvent.click(header);
});
