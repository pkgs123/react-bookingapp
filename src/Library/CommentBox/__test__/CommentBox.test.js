import { userEvent } from "@storybook/testing-library";
import {
  waitFor,
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import { CommentBox } from "../CommentBox";
let value = "";
const handleSubmit = (val) => {
  value = val;
};

let comment = "";
const setComment = (val) => {
  comment = val;
};
const DUMMY_COMMENT = "test comment";

test("Should load Comment box", async () => {
  render(
    <CommentBox
      handleSubmit={handleSubmit}
      disabled
      placeholder="Comment here"
      comment={comment}
      setComment={setComment}
      showThumbs
    />
  );
  expect(
    screen.getByPlaceholderText("Comment here")
  ).toBeInTheDocument();
  expect(screen.getByText("200/200")).toBeInTheDocument();
});

test("Should be able to enter comment", async () => {
  comment = "";

  render(
    <CommentBox
      handleSubmit={handleSubmit}
      placeholder="Comment here"
      comment={comment}
      setComment={setComment}
    />
  );

  const input = screen.getByPlaceholderText("Comment here");

  fireEvent.change(input, {
    target: { value: DUMMY_COMMENT },
  });
  await waitFor(() => {
    expect(comment).toBe(DUMMY_COMMENT);
    expect(screen.getByText("188/200")).toBeInTheDocument();
  });
});

test("Should be able to submit and clear comment", async () => {
  comment = "";
  render(
    <CommentBox
      handleSubmit={handleSubmit}
      placeholder="Comment here"
      comment={comment}
      setComment={setComment}
    />
  );

  const submitBtn = screen.getByTestId("SendIcon");
  const clearBtn = screen.getByTestId("ClearIcon");

  fireEvent.click(submitBtn);

  fireEvent.click(clearBtn);
  await waitFor(() => {
    expect(screen.getByText("200/200")).toBeInTheDocument();
  });
  expect(screen.queryByText(DUMMY_COMMENT)).toBeNull();
});

test("Should not be able to type", async () => {
  comment = "";
  render(
    <CommentBox
      handleSubmit={handleSubmit}
      placeholder="Comment here"
      comment={comment}
      setComment={setComment}
      disabled
    />
  );

  const input = screen.getByPlaceholderText("Comment here");

  userEvent.type(input, DUMMY_COMMENT);
  await waitFor(() => {
    expect(screen.queryByText(DUMMY_COMMENT)).toBeNull();
  });
});

test("Should not submit", async () => {
  render(
    <CommentBox
      handleSubmit={handleSubmit}
      placeholder="Comment here"
      comment={comment}
      setComment={setComment}
      disabled
    />
  );

  const submitBtn = screen.getByTestId("SendIcon");

  fireEvent.click(submitBtn);
});

test("Should not clear", async () => {
  const handleSubmit = (val) => {
    value = val;
    return {
      success: false,
    };
  };
  render(
    <CommentBox
      handleSubmit={handleSubmit}
      placeholder="Comment here"
      comment={comment}
      setComment={setComment}
    />
  );
  const input = screen.getByPlaceholderText("Comment here");

  userEvent.type(input, DUMMY_COMMENT);
  const submitBtn = screen.getByTestId("SendIcon");

  fireEvent.click(submitBtn);
});
