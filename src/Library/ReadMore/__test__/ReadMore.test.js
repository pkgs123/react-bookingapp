import {
  waitFor,
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import { ReadMore } from "../ReadMore";

const DUMMY_CONTENT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

test("Should load Read more", async () => {
  render(
    <ReadMore ellipsis={100}>{DUMMY_CONTENT}</ReadMore>
  );
  expect(
    screen.getByText("...read more")
  ).toBeInTheDocument();
});

test("Should be see read less", async () => {
  render(
    <ReadMore
      ellipsis={100}
      readMoreText="...read more"
      readlessText=" show less"
    >
      {DUMMY_CONTENT}
    </ReadMore>
  );

  const input = screen.getByTestId("readMore");

  fireEvent.click(input);
  await waitFor(() => {
    expect(
      screen.getByText("show less")
    ).toBeInTheDocument();
  });
});

test("Should not show Read more", async () => {
  render(
    <ReadMore ellipsis={100}>
      content smaller than 100 characters
    </ReadMore>
  );
  expect(screen.queryByText("...read more")).toBeNull();
});
