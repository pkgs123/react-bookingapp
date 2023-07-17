import React from "react";
import {fireEvent, render} from "@testing-library/react";
import MultiSelect from "../MultiSelect";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { act } from "react-dom/test-utils";
describe("MultiSelect Component Testing",()=>{
  it("Snapshot Testing",()=>{
    const props = {
      data:["Example 1", "Example 2", "Example 3"],
      label:"MultiSelect",
      onSelectChange:jest.fn(),
      width:200,
      height:400,
      placeholder:"Select",
      tooltipText:"Dummy text",
      tooltipIcon:<InfoOutlinedIcon />,
    }
    expect(render(<MultiSelect {...props}/>)).toMatchSnapshot();
  })

  it("With Null Value and with HandleChange",()=>{
    const props = {
      data:["Example 1", "Example 2", "Example 3"],
      label:"MultiSelect",
      onSelectChange:jest.fn(),
      width:200,
      height:400,
      placeholder:"Select",
      tooltipText:"",
    }
    const {getByRole,getAllByRole} = render(<MultiSelect {...props}/>)
   
    fireEvent.mouseDown(getByRole("button"));
    act(() => {
      const options = getAllByRole("option");
      fireEvent.mouseDown(options[1]);
      options[1].click();
    });
  })
  it("With Null Value and without HandleChange",()=>{
    const props = {
      data:["Example 1", "Example 2", "Example 3"],
      label:"MultiSelect",
      width:200,
      height:400,
      placeholder:"Select",
      tooltipText:"",
    }
    const {getByRole,getAllByRole} = render(<MultiSelect {...props}/>)
  
    fireEvent.mouseDown(getByRole("button"));
    act(() => {
      const options = getAllByRole("option");
      fireEvent.mouseDown(options[1]);
      options[1].click();
    });
  })
})
