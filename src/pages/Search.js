import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomAutocomplete } from "../Library/Autocomplete/Autocomplete";
import {
  getSearchApiFetch,
  getSearchApiSuccess,
  getSearchByIdSuccess,
} from "../redux/slices/SearchApiState";
import {  getSearchDoctorsFetch, getSearchDoctorsSuccess, getSelectedValue } from "../redux/slices/searchDoctorsListSlice";

function SearchDoctorData({selectedOption,selectedLocation}) {
  const [globalSearchText, setGlobalText] = useState("");
  const [selectedValue,setSelectedValue]= useState(null);
  const dispatch = useDispatch();

  const {searchDoctorsList,isLoading} = useSelector(state=>state.searchDoctorsListDetails);
  const {data} = searchDoctorsList;
  
   
const getSearchDoctorsResponse = (response)=>{

}

  const setGlobalSearchText = (textValue) => {

    if (textValue.length >= 3) {
      dispatch(getSearchDoctorsFetch({
        optionText:selectedOption,
        text:textValue,
        locationName:selectedLocation.city,
        getSearchDoctorsResponse
      }))
    }
    if (textValue.length < 3) {
      dispatch(getSearchDoctorsSuccess([]));
    }
  };

  const handleGlobalSearch = (evt, value, reason) => {
    setGlobalText(value);
  
    if (reason === "input") {
      setGlobalSearchText(value);
    }
  };

  const handleClearSearchText = () => {
    setGlobalText();
    dispatch(getSearchDoctorsSuccess([]));
    dispatch(getSelectedValue([]));
    
  };

  const handleGlobalSearchChange = (event, value) => {
    console.log("selected-value",value);
    setSelectedValue(value);
    dispatch(getSelectedValue([value]));
  };

  const handleOptionLabel = (option) => {
    return `${option.firstName} ${option.lastName}`;
  };

  const handleOptionGroupBy = (option) => {
    return `${option.specialization}`;
  };
  return (
    <Stack spacing={2} >
    <CustomAutocomplete
        handleInputChange={handleGlobalSearch}
        handleOnChange={handleGlobalSearchChange}
        options={data??[]}
        handleOptionLable={handleOptionLabel}
        handleGroupBy={handleOptionGroupBy}
        noOptionsText={"No options"}
        isHandleLoading={
          isLoading && globalSearchText.length >= 3
        }
        handleOpen={globalSearchText.length >= 3}
        handleClearSearchText={handleClearSearchText}
        placeholder="Search By Name"
        isDisabled={!selectedOption}
        isCancelDisplay={selectedValue??false}
      />
  
    </Stack>
    
    
  );
}
export default SearchDoctorData;
