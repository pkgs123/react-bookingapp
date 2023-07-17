import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import TableActions from "../TableActions";

const props = {
  data: {},
  children: <p>test child</p>,
};

test("should load TableActions", async () => {
  render(<TableActions {...props} />);
  const btn = screen.getByTestId("action-btn");
  expect(btn).toBeInTheDocument();
  fireEvent.click(btn);
  const childElm = screen.getByText("test child");
  waitFor(() => {
    expect(childElm).toBeInTheDocument();
  });
  fireEvent.click(childElm);
});
