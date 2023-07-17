import React from "react";
import {
  fireEvent,
  render,
  waitFor,
  screen,
} from "@testing-library/react";
import InputTextField from "../TextField";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

test("SnapshotTesting", () => {
  expect(render(<InputTextField />)).toMatchSnapshot();
});

test("IF TYPE IS NUMBER WITHOUT NULL", async () => {
  const onMockChange = jest.fn();
  render(
    <InputTextField
      type="number"
      tooltipText="number"
      tooltipIcon={<InfoOutlinedIcon />}
      onTextChange={onMockChange}
    />
  );

  const inp1 = screen.getByTestId("password-text-field");
  await waitFor(() => {
    fireEvent.change(inp1, { target: { value: "abc" } });
  });
});

test("IF TYPE IS NUMBER WITH NULL", async () => {
  render(<InputTextField type="number" tooltipText="" />);

  const inp1 = screen.getByTestId("password-text-field");
  await waitFor(() => {
    fireEvent.change(inp1, { target: { value: 25 } });
  });
});

test("IF TYPE IS PASSWORD WITHOUT NULL", () => {
  render(
    <InputTextField
      type="password"
      tooltipText="password"
      tooltipIcon={<InfoOutlinedIcon />}
      pattern={new RegExp("/^[0-9]*$/")}
    />
  );
});

test("IF TYPE IS PASSWORD WITH NULL", () => {
  render(<InputTextField type="password" tooltipText="" />);
});

test("IF TYPE IS NEITHER NUMBER NOR PASSWORD WITHOUT NULL", () => {
  render(
    <InputTextField
      type="text"
      tooltipText="text"
      tooltipIcon={<InfoOutlinedIcon />}
      pattern={new RegExp("/^[0-9]*$/")}
    />
  );
});

test("IF TYPE IS PASSWORD WITH NULL", () => {
  render(<InputTextField type="text" tooltipText="" />);
});
