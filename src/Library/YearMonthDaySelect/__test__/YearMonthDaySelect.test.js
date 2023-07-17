import { render, screen } from "@testing-library/react";
import {
  YearMonthDaySelect,
  generateArray,
} from "../YearMonthDaySelect";

const handleChange = jest.fn();
test("Should load YearMonthDaySelect ", async () => {
  render(
    <YearMonthDaySelect
      handleChange={handleChange}
      label="Test label"
    />
  );
  expect(
    screen.getByText("Test label")
  ).toBeInTheDocument();
  expect(screen.getByText("Years")).toBeInTheDocument();
  expect(screen.getByText("Months")).toBeInTheDocument();

  expect(screen.getByText("Days")).toBeInTheDocument();
});

test("Should load YearMonthDaySelect with maxYears", async () => {
  render(
    <YearMonthDaySelect
      handleChange={handleChange}
      label="Test label"
      maxYears={99}
    />
  );
  expect(
    screen.getByText("Test label")
  ).toBeInTheDocument();
});

test("test generateArray", () => {
  const test = generateArray(10);

  expect(test.length).toBe(10);
});
