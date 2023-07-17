import { render, screen } from "@testing-library/react";
import { ProgressBar } from "../ProgressBar";

const steps = [
  {
    label: "Select",
    status: "completed",
    scrollTo: "select",
  },
  {
    label: "Select 1",
    status: "incomplete",
    scrollTo: "select1",
  },
  {
    label: "Select 2",
    status: "in-progress",
  },
  {
    label: "Select 3",
    status: "",
  },
];

test("Should load Progress bar", async () => {
  render(<ProgressBar steps={steps} />);
  steps.map((el) =>
    expect(screen.getByText(el.label)).toBeInTheDocument()
  );
});
