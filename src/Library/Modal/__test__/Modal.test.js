import React from "react";
import {
  render,
  fireEvent,
  screen
} from "@testing-library/react";

import { CustomDialog } from "../Modal";

describe("Test Dialog Component", () => {
  const onMockChange = jest.fn();
  it("Rendering Dialog component", () => {
    (render(<CustomDialog  isOpen= {true}
      title ="Model Header"
      subtitle= "body"
      handleClose={onMockChange}
      handleConfirmation={onMockChange}
    ></CustomDialog>))
  });

  test("It renders modal with confirmation test", async () => {
    render(<CustomDialog  isOpen= {true}
      title ="Model Header"
      subtitle= "body"
      isConfirmationModal={true}
      handleClose={onMockChange}
      handleConfirmation={jest.fn()}
    ></CustomDialog>);
    const button = screen.getByTestId("custBtnId");
    fireEvent.click(button);
    const acceptBtn = screen.getByTestId("accept-id");
    fireEvent.click(acceptBtn);

  });
  test("It renders modal without confirmation test", async () => {
    render(<CustomDialog  isOpen= {true}
      title ="Model Header"
      subtitle= "body"
      isConfirmationModal={true}
      handleClose={onMockChange}
    ></CustomDialog>);
    const button = screen.getByTestId("custBtnId");
    fireEvent.click(button);
    const acceptBtn = screen.getByTestId("accept-id");
    fireEvent.click(acceptBtn);

  });
});