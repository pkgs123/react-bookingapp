import React from "react";
import { render, screen } from "@testing-library/react";
import { CustomRTE } from "../RichTextEditor";

const DUMMY_CONTENT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const maxLength = 100;

const props = {
  onRTEChange: jest.fn(),
  data: DUMMY_CONTENT,
  readOnly: false,
  height: "100px",
  placeholder: "type here",
  maxLength,
  showLimit: true,
};

describe("CustomRTE", () => {
  it("should render the component without errors", () => {
    render(<CustomRTE {...props} />);
    expect(
      screen.getByText(DUMMY_CONTENT)
    ).toBeInTheDocument();
  });

  it("should disable the editor when readonly is true", () => {
    render(<CustomRTE {...props} />);
    expect(
      screen.getByText(DUMMY_CONTENT)
    ).toBeInTheDocument();
  });

  it("should display the character count if showLimit is true", () => {
    render(<CustomRTE {...props} />);

    const characterCount = screen.getByText(
      `${maxLength}/${maxLength}`
    );
    expect(characterCount).toBeInTheDocument();
  });

  it("snapshot", async () => {
    expect(
      render(<CustomRTE {...props} />)
    ).toMatchSnapshot();
  });
});
