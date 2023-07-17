import { userEvent } from "@storybook/testing-library";
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { TagSelect } from "../TagSelect";

const top100Films = [
  { label: "The Shawshank Redemption", id: 1 },
  { label: "The Godfather", id: 2 },
  { label: "The Godfather: Part II", id: 3 },
  { label: "The Dark Knight", id: 4 },
  { label: "12 Angry Men", id: 5 },
  { label: "Schindler's List", id: 6 },
  { label: "Pulp Fiction", id: 7 },
];

let values = [
  { label: "The Shawshank Redemption", id: 1 },
  { label: "The Godfather", id: 2 },
  { label: "The Godfather: Part II", id: 3 },
];

const handleTags = (tags) => {
  values = [...tags];
};

test("Should load TagSelect", async () => {
  expect(
    render(
      <TagSelect
        selectedValues={values}
        handleTags={handleTags}
        options={top100Films}
        placeholder={"Select Tags"}
        limit={5}
        tagLabel="label"
      />
    )
  ).toMatchSnapshot();
});

test("Should load TagSelect", async () => {
  render(
    <TagSelect
      selectedValues={values}
      handleTags={handleTags}
      options={top100Films}
      placeholder={"Select Tags"}
      limit={5}
      tagLabel="label"
    />
  );
  values.map((tag) => {
    expect(screen.getByText(tag.label)).toBeInTheDocument();
  });
  expect(
    screen.getByPlaceholderText("Select Tags")
  ).toBeInTheDocument();
});
test("Should open list", async () => {
  render(
    <TagSelect
      selectedValues={values}
      handleTags={handleTags}
      options={top100Films}
      placeholder={"Select Tags"}
      tagLabel="label"
      limit={5}
    />
  );
  const placeholder =
    screen.getByPlaceholderText("Select Tags");
  fireEvent.click(placeholder);
  await waitFor(() => {
    expect(
      screen.getByText("The Godfather")
    ).toBeInTheDocument();
  });
});

test("Should add to tags list", async () => {
  let values = ["The Dark Knight", "12 Angry Men"];

  const { rerender } = render(
    <TagSelect
      selectedValues={values}
      handleTags={handleTags}
      options={top100Films}
      tagLabel="label"
      placeholder={"Select Tags"}
    />
  );
  const textBox = screen.getByRole("combobox");

  userEvent.click(textBox);

  // wait for option to appear
  await waitFor(() => {
    screen.getByRole("listbox");
  });

  const text = screen.getByText("Pulp Fiction");

  fireEvent.click(text);
  rerender(
    <TagSelect
      selectedValues={values}
      handleTags={handleTags}
      tagLabel="label"
      options={top100Films}
      placeholder={"Select Tags"}
    />
  );
  await waitFor(() => {
    expect(
      screen.getByText("Pulp Fiction")
    ).toBeInTheDocument();
  });
});
