import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomAutocomplete } from "../Library/Autocomplete/Autocomplete";

import {
  getSearchDoctorsBySpecialization,
  getSearchDoctorsFetch,
  getSelectedValue,
} from "../redux/slices/searchDoctorsListSlice";

function SearchBySpecialization({ selectedOption, selectedLocation }) {
  const [globalSearchText, setGlobalText] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const [value,setValue] = useState("");
  
  const dispatch = useDispatch();

  const { searchDoctorsBySpecialization, isLoading } = useSelector(
    (state) => state.searchDoctorsListDetails
  );
  const { data } = searchDoctorsBySpecialization;
  const getSearchDoctorsResponse = (response) => {
  };

  const setGlobalSearchText = (textValue) => {
    if (textValue.length >= 3) {
      dispatch(
        getSearchDoctorsFetch({
          optionText: selectedOption,
          text: textValue,
          locationName: selectedLocation?.city,
          getSearchDoctorsResponse,
        })
      );
    }
    if (textValue.length < 3) {
      dispatch(getSearchDoctorsBySpecialization([]));
    }
  };

  const handleGlobalSearch = (evt, value, reason) => {
    setGlobalText(value);

    if (reason === "input") {
      setGlobalSearchText(value);
    }
    if(reason === "clear"){
      dispatch(getSelectedValue({}))
      dispatch(getSearchDoctorsBySpecialization([]));
    }
  };

  const handleClearSearchText = () => {
    setGlobalText();
    dispatch(getSelectedValue({}))
    dispatch(getSearchDoctorsBySpecialization([]));
  };

  const handleGlobalSearchChange = (event, value) => {
    console.log("selected-value", value);
     setSelectedValue(value);
    dispatch(getSelectedValue([value]))
  };

  const handleOptionLabel = (option) => {
    return `${option.specialization} - Dr. ${option.firstName} ${option.lastName}`;
  };

  return (
    <Stack spacing={2}>
      <CustomAutocomplete
        handleInputChange={handleGlobalSearch}
        handleOnChange={handleGlobalSearchChange}
        options={data?? []}
        handleOptionLable={handleOptionLabel}
        noOptionsText={"No options"}
        isHandleLoading={isLoading && globalSearchText.length >= 3}
        handleOpen={globalSearchText.length >= 3}
        handleClearSearchText={handleClearSearchText}
        placeholder="Search By Specialization"
        isDisabled={!selectedOption}
        isCancelDisplay={selectedValue ?? false}
      />
    </Stack>
  );
}
export default SearchBySpecialization;
