import React from "react";
import { DisplayComments } from "./CommentsDisplay";

const commentList = [
  {
    name: "Tony Stark",
    tags: ["Test1", "test2"],
    time: "22/11/2022",
    thumbsUp: true,
    comment:
      "A wealthy American business magnate, playboy, philanthropist, inventor and ingenious scientist, Anthony Edward Stark suffers a severe chest injury during a kidnapping. When his captors attempt to force him to build a weapon of mass destruction, he instead creates a mechanized suit of armor to save his life and escape captivity. Later, Stark develops his suit, adding weapons and other technological devices he designed through his company, Stark Industries. He uses the suit and successive versions to protect the world as Iron Man. Although at first concealing his true identity, Stark eventually publicly reveals himself to be Iron Man.",
  },
  {
    name: "Thor odinson",
    tags: ["Test1", "test2", "test3"],
    time: "22/11/2022",
    comment:
      "Thor is a prominently mentioned god throughout the recorded history of the Germanic peoples, from the Roman occupation of regions of Germania, to the Germanic expansions of the Migration Period, to his high popularity during the Viking Age, when, in the face of the process of the Christianization of Scandinavia, emblems of his hammer, Mjölnir, were worn and Norse pagan personal names containing the name of the god bear witness to his popularity.",
  },
  {
    name: "Bucky barnes",
    tags: [],
    thumbsUp: false,
    time: "22/11/2022",
    comment:
      "James Buchanan Bucky Barnes is a fictional character appearing in American comic books published by Marvel Comics. Originally introduced as a sidekick to Captain America, the character was created by Joe Simon and Jack Kirby and first appeared in Captain America Comics #1 (cover-dated March 1941)",
  },
  {
    name: "Steve Rogers",
    tags: ["Test1"],
    time: "22/11/2022",
    thumbsUp: false,
    comment:
      "Steven Grant Rogers, more commonly known as Steve Rogers, is a fictional character primarily portrayed by Chris Evans in the Marvel Cinematic Universe (MCU) media franchise—based on the Marvel Comics character of the same name—commonly known by his alias, Captain America. Rogers is depicted as a World War II-era super soldier who was given a serum that provided him with superhuman abilities including enhanced durability, strength, and athleticism.",
  },
];

export default {
  title: "Components/DisplayComments",
  argTypes: {
    limit: { control: "number" },
    height: { control: "number" },
    ellipsis: { control: "number" },
    readMoreText: { control: "text" },
    readlessText: { control: "text" },
  },
};
const DisplayCommentsTemplate = (args) => (
  <DisplayComments {...args} />
);

export const Primary = DisplayCommentsTemplate.bind({});
Primary.args = {
  height: 200,
  commentList: commentList,
  readMoreText: "...read more",
  readlessText: " show less",
  ellipsis: 500,
};
