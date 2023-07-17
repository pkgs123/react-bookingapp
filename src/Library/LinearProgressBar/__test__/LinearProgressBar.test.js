import React from "react";
import { render, screen } from "@testing-library/react";

import {
  LinearDeterminate,
  calculateProgress,
} from "../LinearProgressBar";

describe("LinearDeterminate", () => {
  it("renders the component with default props", () => {
    const { getByRole } = render(
      <LinearDeterminate isCompleted={false} size={1} />
    );
    const progress = getByRole("progressbar");
    expect(progress).toBeInTheDocument();
    expect(progress.getAttribute("aria-valuenow")).toBe(
      "0"
    );
  });

  it("updates the progress bar when isCompleted prop is true", () => {
    const { getByRole } = render(
      <LinearDeterminate isCompleted={true} size={1} />
    );
    const progress = getByRole("progressbar");
    expect(progress.getAttribute("aria-valuenow")).toBe(
      "100"
    );
  });

  it("test calculateProgress", () => {
    const currentProgress = 90;
    const size = 5;
    const result = calculateProgress(currentProgress, size);
    expect(result).toBe(90);
  });

  it("test calculateProgress", () => {
    const currentProgress = 50;
    const size = 0;
    const result = calculateProgress(currentProgress, size);
    expect(result).toBe(100);
  });
});
