import React from "react";
import {
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import TextArea from "../TextArea";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
describe("TextArea Component Testing", () => {
  it("Snapshot Testing", () => {
    expect(render(<TextArea />)).toMatchSnapshot();
  });
  it("WITHOUT NULL", async () => {
    const onMockChange = jest.fn();
    const { container } = render(
      <TextArea
        limit={200}
        tooltipText="number"
        tooltipIcon={<InfoOutlinedIcon />}
        onTextChange={onMockChange}
        showLimit
      />
    );

    const textAreaField =
      container.querySelector("textarea");
    await waitFor(() => {
      fireEvent.change(textAreaField, {
        target: { value: "demo" },
      });
    });
  });
  it("WITH NULL", async () => {
    const { container } = render(
      <TextArea
        limit={200}
        tooltipText=""
        tooltipIcon={<InfoOutlinedIcon />}
        showLimit={false}
      />
    );

    const textAreaField =
      container.querySelector("textarea");
    await waitFor(() => {
      fireEvent.change(textAreaField, {
        target: { value: "demo" },
      });
    });
  });
});
