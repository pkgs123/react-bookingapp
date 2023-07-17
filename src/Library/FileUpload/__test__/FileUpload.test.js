import {
  render,
  screen,
  act,
  fireEvent,
} from "@testing-library/react";
import { FileUpload, formatBytes } from "../FileUpload";

const fileSize = 1024 * 1024 * 2;
const handleFiles = () => {};

function mockData(files) {
  return {
    dataTransfer: {
      files,
      items: files.map((file) => ({
        kind: "file",
        type: file.type,
        getAsFile: () => file,
      })),
      types: ["Files"],
    },
  };
}

test("Should load File upload", async () => {
  render(<FileUpload handleFiles={handleFiles} />);

  expect(
    screen.getByText("Select a file or drag and drop here")
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "All file types allowed. File size no more than 10 MB"
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText("Select file")
  ).toBeInTheDocument();
});

test("Should load simple File upload", async () => {
  render(<FileUpload handleFiles={handleFiles} simple />);

  expect(
    screen.queryByText(
      "Select a file or drag and drop here"
    )
  ).toBeNull();
  expect(
    screen.queryByText(
      "All file types allowed. File size no more than 10 MB"
    )
  ).toBeNull();
  expect(
    screen.getByText("Select file")
  ).toBeInTheDocument();
});

test("Test file fize", async () => {
  const file = new File(
    [JSON.stringify({ ping: true })],
    "ping.json",
    { type: "application/json" }
  );
  Object.defineProperty(file, "size", {
    value: fileSize,
  });
  const data = mockData([file]);

  const ui = (
    <FileUpload handleFiles={handleFiles} maxSize={1} />
  );
  const { container } = render(ui);

  await act(() =>
    fireEvent.drop(container.querySelector("div"), data)
  );
  const text = screen.getByText(
    "ping.json 2 MB is bigger than maximum the file size (1 MB) allowed."
  );
  expect(text).toBeInTheDocument();
});

test("Test file type", async () => {
  const file = new File(
    [JSON.stringify({ ping: true })],
    "ping.sh",
    { type: "application/x-sh" }
  );
  const data = mockData([file]);

  const ui = <FileUpload handleFiles={handleFiles} />;
  const { container } = render(ui);

  await act(() =>
    fireEvent.drop(container.querySelector("div"), data)
  );
  const text = screen.getByText(
    "ping.sh File type must be image/*,video/*,audio/*,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/pdf,text/plain,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/json"
  );
  expect(text).toBeInTheDocument();
});

test("Test formatBytes", async () => {
  const data = formatBytes(fileSize, -1);
  expect(data).toBe("2 MB");
});

test("Test formatBytes", async () => {
  const data = formatBytes(0, 0);
  expect(data).toBe("0 Bytes");
});
