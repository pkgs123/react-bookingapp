import React from "react";
import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Loader } from "../Loader";

test("Should render comments", async () => {
  render(<Loader isOpen={true} />);
  await waitFor(() => {
    expect(
      screen.getByTestId("progressbar")
    ).toBeInTheDocument();
  });
});
