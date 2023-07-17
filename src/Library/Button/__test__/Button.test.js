import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";

import {
  CustomButton,
  ConfirmationButton,
} from "../Button";

describe("Snapshot testing - Button Component", () => {
  it("Snapshot Testing", () => {
    expect(
      render(
        <CustomButton primary={true}>Label</CustomButton>
      )
    ).toMatchSnapshot();
  });

  it("should render the button", () => {
    render(
      <CustomButton primary={true}>Label</CustomButton>
    );
    expect(screen.getByRole("button", { name: "Label" }));
  });

  it("should render the Secondary button", () => {
    render(
      <CustomButton primary={false}>Label</CustomButton>
    );
    expect(screen.getByRole("button", { name: "Label" }));
  });

  it("Primary Button click event", () => {
    const { container } = render(
      <CustomButton primary={true}>Label</CustomButton>
    );

    fireEvent.click(
      container.querySelector("#CustomButton")
    );
  });
});

describe("testing - ConfirmationButton", () => {
  it("should render the button", () => {
    render(
      <ConfirmationButton buttonProps={{ primary: true }}>
        Label
      </ConfirmationButton>
    );
    expect(screen.getByRole("button", { name: "Label" }));
  });

  it("should render the Secondary button", () => {
    render(<ConfirmationButton>Label</ConfirmationButton>);
    expect(screen.getByRole("button", { name: "Label" }));
  });

  it("Primary Button click event", () => {
    const { container } = render(
      <ConfirmationButton
        modalProps={{ subtitle: "test subtitle" }}
      >
        Label
      </ConfirmationButton>
    );

    fireEvent.click(
      container.querySelector("#CustomButton")
    );
    waitFor(() => {
      expect(
        screen.getByText("test subtitle")
      ).toBeInTheDocument();
    });
  });
});
