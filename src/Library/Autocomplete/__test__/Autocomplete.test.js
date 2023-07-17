import React from "react";
import {render} from "@testing-library/react";
import {CustomAutocomplete} from "../Autocomplete" 
const mockFn = jest.fn();
const mockHandleChangeFn = jest.fn();
const mockHandleInputChange = jest.fn();
describe("Test Autocomplete component",()=>{
  it("Snapshot testing",()=>{
    const options=[{ title: "The Shawshank Redemption", year: "1994" },{ title: "The Godfather", year: "1972" },]
    expect(render(<CustomAutocomplete options={options} handleClearSearchText={mockFn}  handleOnChange={mockHandleChangeFn} handleInputChange={mockHandleInputChange}/>)).toMatchSnapshot();
  })
  it("Check HandleLoading with true",()=>{
    const options=[{ title: "The Shawshank Redemption", year: "1994" },
      { title: "The Godfather", year: "1972" },];
    render(<CustomAutocomplete isHandleLoading={true} options={options} handleClearSearchText={mockFn} handleOnChange={mockHandleChangeFn} handleInputChange={mockHandleInputChange}/>)
    expect(mockFn).not.toHaveBeenCalled();
    expect(mockHandleChangeFn).not.toHaveBeenCalled();
    expect(mockHandleInputChange).not.toHaveBeenCalled();
  })
  it("Check HandleLoading with false",()=>{
    const options=[{ title: "The Shawshank Redemption", year: 1994 },
      { title: "The Godfather", year: "1972" },];
    render(<CustomAutocomplete isHandleLoading={false} options={options} handleClearSearchText={mockFn} handleOnChange={mockHandleChangeFn} handleInputChange={mockHandleInputChange}/>)
    
  })
})