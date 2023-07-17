import React from "react";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import {
  render,
  fireEvent
} from "@testing-library/react";
import  {Collapsible} from "../Collapsible";

describe("Test Collapsible Component", () => {
 
  it("Rendering Collapsible component", () => {
    (render(<Collapsible  title="Test title"
      shouldBeExpended={true}
      statusIcon={<ExpandCircleDownIcon />}
    >dummy text</Collapsible>))
  });

  it("can open accordion items to see the contents", () => {
    const data = { title: "Test title" ,content:"dummy text"};
    const { getByText } = render(
      <Collapsible  title="Test title"
        shouldBeExpended={true}
        statusIcon={<ExpandCircleDownIcon />}
      >dummy text</Collapsible>
    );

    fireEvent.click(getByText(data.title));
    expect(getByText(data.content)).toBeInTheDocument();
   
  });
  
});
  
  