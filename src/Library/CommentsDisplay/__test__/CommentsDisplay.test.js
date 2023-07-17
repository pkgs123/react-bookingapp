import { render, screen } from "@testing-library/react";
import {
  DisplayComments,
  hashCode,
} from "../CommentsDisplay";

const commentList = [
  {
    createdBy: "Tony Stark",
    commentsTags: ["Test1", "test2"],
    createdDate: "2023-02-28T06:32:13.93",
    thumbsUp: true,
    commentsText:
      "A wealthy American business magnate, playboy, philanthropist, inventor and ingenious scientist, Anthony Edward Stark suffers a severe chest injury during a kidnapping. When his captors attempt to force him to build a weapon of mass destruction, he instead creates a mechanized suit of armor to save his life and escape captivity. Later, Stark develops his suit, adding weapons and other technological devices he designed through his company, Stark Industries. He uses the suit and successive versions to protect the world as Iron Man. Although at first concealing his true identity, Stark eventually publicly reveals himself to be Iron Man.",
  },
  {
    createdBy: "Thor odinson",
    commentsTags: ["Test1", "test2", "test3"],
    createdDate: "2023-02-28T06:32:13.93",
    thumbsUp: false,
    commentsText:
      "Thor is a prominently mentioned god throughout the recorded history of the Germanic peoples, from the Roman occupation of regions of Germania, to the Germanic expansions of the Migration Period, to his high popularity during the Viking Age, when, in the face of the process of the Christianization of Scandinavia, emblems of his hammer, Mjölnir, were worn and Norse pagan personal names containing the createdBy of the god bear witness to his popularity.",
  },
];
const defaultProps = {
  commentList,
  readMoreText: "..read more",
  readLesstext: " show less",
  ellipsis: 100,
};

test("Should render comments", async () => {
  render(<DisplayComments {...defaultProps} />);
  commentList.map((item) => {
    expect(
      screen.getByText(item.createdBy)
    ).toBeInTheDocument();
  });
});
test("hashCode", async () => {
  const test1 = hashCode();
  expect(test1).toBe(undefined);
  const test2 = hashCode("string");
  const data = "hsl(353, 95%, 35%)";
  expect(test2).toBe(data);
});
