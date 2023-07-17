import React, { useEffect, useState } from "react";
import {CustomLabel} from "../Library/Label/Label";
import {CustomAutocomplete} from "../Library/Autocomplete/Autocomplete";
import RadioButton from "../Library/RadioButton/RadioButton";
import SearchDoctorData from "./Search";
import {setSearchDoctorOption} from "../redux/slices/searchDoctorOptionSlice";
import { useSelector, useDispatch } from "react-redux";
import { Grid, RadioGroup } from "@mui/material";
import { Input } from "antd";
import { getLocationFetch } from "../redux/slices/locationListSlice";
import DoctorsTable from "../components/DoctorsTable";
import SearchBySpecialization from "./SearchBySpecialization";
function SearchDoctor(){
const dispatch = useDispatch();

const {locationList} = useSelector(state=>state?.loactionListDetails);
const {data} = locationList;

const {selectedSearchOption} = useSelector(state=>state.searchDoctorOptionDetails.selectedSearchOption)

const [value,setValue] = useState("");

useEffect(()=>{
  dispatch(getLocationFetch())
},[])

const handleDataChange = (value, name) => {
        dispatch(setSearchDoctorOption({ [name]: value }));
};

const handleRadioChange = (value, radioLabel) => {
        let tempValue = value;
        handleDataChange(tempValue, radioLabel);
};

return(
  <>
        <Grid container spacing={2} sx={{mt:2,mr:2,padding:"4px"}}>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <CustomLabel label="Select Location(s)" required={true}/>
                <CustomAutocomplete 
                value={value} 
                handleOnChange={(event,newValue)=>{
                    setValue(newValue);
                }}
                options={data??[]}
                handleOptionLable={(option)=>option?.city ?? ""} 
                isCancelDisplay={value ?? false}
                placeholder="Search Location(s)"
                />
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>

            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <CustomLabel label="Search Doctor(s) By" required={true}/>
                <Grid container>
                <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
                      <RadioGroup
                        onChange={(e) => {
                          handleRadioChange(
                            e.target.value,
                            "selectedSearchOption"
                          );
                        }}
                        value={selectedSearchOption}
                      >
                        <Grid
                          container
                          className="radio-margin"
                        >
                          <Grid item xs={4}>
                            <RadioButton
                              label="Name"
                              name="selectedSearchOption"
                              size="medium"
                            />
                          </Grid>
                          <Grid item xs={4}>
                            <RadioButton
                              label="Specialization"
                              name="selectedSearchOption"
                              size="medium"
                            />
                          </Grid>
                        </Grid>
                      </RadioGroup>
                    </Grid>   
                </Grid>
                <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
              
              {selectedSearchOption === "Name" ? <SearchDoctorData selectedOption={selectedSearchOption} selectedLocation={value}/>
              :
              selectedSearchOption === "Specialization" && <SearchBySpecialization selectedOption={selectedSearchOption} selectedLocation={value}/>   }
                        </Grid>
                
            </Grid>
        </Grid>
        <br/>
        <DoctorsTable/>
    </>
)
}
export default SearchDoctor;