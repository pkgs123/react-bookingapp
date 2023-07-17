import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import TableCellStatus from "../TableCellStatus";

const props = {
  title: "test titles",
  color: "green",
  value: {
    caseId: "test values",
    caseMasterId: "test values",
  },
  showSwatch: true,
};

test("Should render false state", async () => {
  render(
    <TableCellStatus {...props} showSwatch={false} />,
    { wrapper: HashRouter }
  );
});

test("should load TableCellStatus", async () => {
  render(<TableCellStatus {...props} />, {
    wrapper: HashRouter,
  });

  expect(
    screen.getByText(props.value.caseMasterId)
  ).toBeInTheDocument();
});
