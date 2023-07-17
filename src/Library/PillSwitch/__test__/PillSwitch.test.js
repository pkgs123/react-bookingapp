import {
  waitFor,
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import { PillSwitch } from "../PillSwitch";

let isOn = undefined;
const handleToggle = (val) => {
  isOn = val;
};

test("Should render undecided state", async () => {
  const { container } = render(
    <PillSwitch isOn={isOn} handleToggle={handleToggle} />
  );
  const checkboxes =
    container.querySelector("#pill-switch");

  expect(checkboxes).toHaveClass("undecided");
});

test("Should render true state", async () => {
  const { container, rerender } = render(
    <PillSwitch handleToggle={handleToggle} />
  );

  const trueClick = screen.getByTestId(
    "custom-switch-true"
  );
  fireEvent.click(trueClick);
  rerender(
    <PillSwitch isOn={isOn} handleToggle={handleToggle} />
  );
  const checkboxes =
    container.querySelector("#pill-switch");

  expect(checkboxes).toHaveClass("checked");
});

test("Should render false state", async () => {
  const { rerender, container } = render(
    <PillSwitch isOn={true} handleToggle={handleToggle} />
  );
  const falseClick = screen.getByTestId(
    "custom-switch-false"
  );
  fireEvent.click(falseClick);
  rerender(
    <PillSwitch isOn={isOn} handleToggle={handleToggle} />
  );
  const checkboxes =
    container.querySelector("#pill-switch");

  expect(checkboxes).toHaveClass("unchecked");
});

test("Should return state", async () => {
  render(
    <PillSwitch
      isOn={undefined}
      handleToggle={handleToggle}
    />
  );
  const falseClick = screen.getByTestId(
    "custom-switch-false"
  );
  const trueClick = screen.getByTestId(
    "custom-switch-true"
  );
  fireEvent.click(falseClick);
  expect(isOn).toBe(false);
  fireEvent.click(trueClick);
  await waitFor(() => {
    expect(isOn).toBe(true);
  });
});
