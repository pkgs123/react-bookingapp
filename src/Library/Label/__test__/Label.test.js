import React from "react";
import {
  render,
  waitFor,
  screen,
} from "@testing-library/react";
import { CustomLabel } from "../Label";
import { userEvent } from "@storybook/testing-library";

describe("Label Component Testing", () => {
  it("WITH TOOLTIP", async () => {
    render(
      <CustomLabel
        tooltipText="test tooltip"
        label="test"
      />
    );

    const textAreaField = screen.getByText("test");
    const tooltip = screen.getByTestId("InfoOutlinedIcon");
    expect(textAreaField).toBeInTheDocument();
    expect(tooltip).toBeInTheDocument();
    userEvent.hover(tooltip);
    await waitFor(() => {
      expect(
        screen.getByText("test tooltip")
      ).toBeInTheDocument();
    });
  });
  it("WITHOUT TOOLTIP", async () => {
    render(<CustomLabel label="test" />);

    expect(
      screen.queryByTestId("InfoOutlinedIcon")
    ).toBeNull();
  });
});
