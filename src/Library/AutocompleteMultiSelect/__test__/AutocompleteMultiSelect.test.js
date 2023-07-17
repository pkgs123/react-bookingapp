import React from "react";
import {screen,render} from "@testing-library/react";
import {AutocompleteMultiSelect} from "../AutocompleteMultiSelect";
describe("MultiSelect Testing",()=>{

  it("Snapshot Testing",()=>{
    const options=[{ title: "The Shawshank Redemption", year: "1994" },{ title: "The Godfather", year: "1972" }]
    expect(render(<AutocompleteMultiSelect options={options} handleOnChange={jest.fn()} />)).toMatchSnapshot();
  })
  it("Autocomplete Multiselect Testing",()=>{
    const options=[{ title: "The Shawshank Redemption", year: "1994" },{ title: "The Godfather", year: "1972" }]
    render(<AutocompleteMultiSelect options={options} handleOnChange={jest.fn()} />)
  })
})