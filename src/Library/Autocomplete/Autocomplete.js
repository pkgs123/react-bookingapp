import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SearchIcon from "@mui/icons-material/Search";
import {
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Autocomplete.scss";

export const CustomAutocomplete = ({
  className,
  size,
  handleInputChange,
  handleOnChange,
  noOptionsText,
  handleClearSearchText,
  options,
  handleOptionLable,
  handleGroupBy,
  handleOpen,
  placeholder,
  isHandleLoading,
  value,
  maxLength,
  handleFilterOption,
  isSearchDisplay,
  isCancelDisplay,
  isDisabled,
  handleIsOptionEqualToValue
}) => {
  return (
    <Autocomplete
      className={`custom-autocomplete ||  ${className}`}
      id="CustomAutocomplete"
      size={size}
      value={value}
      onInputChange={handleInputChange}
      onChange={handleOnChange}
      filterOptions={handleFilterOption}
      options={options}
      noOptionsText={noOptionsText}
      clearOnBlur={false}
      disabled={isDisabled}
      clearIcon={
        isCancelDisplay && <HighlightOffIcon onClick={handleClearSearchText} />
      }
      getOptionLabel={handleOptionLable}
      isOptionEqualToValue={handleIsOptionEqualToValue}
      groupBy={handleGroupBy}
      renderInput={(params) => (
        <TextField
          {...params}
          label=""
          variant="outlined"
          placeholder={placeholder}
          inputProps={{ ...params.inputProps, maxLength }}
          InputProps={{
            ...params.InputProps,
            maxLength: maxLength,
            startAdornment: (
              <>
                {isSearchDisplay ? <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment> : null
                }
              </>
            ),
            endAdornment: (
              <React.Fragment>
                {isHandleLoading ? (
                  <CircularProgress
                    color="primary"
                    size={20}
                  />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
          open={handleOpen}
        />
      )}
    />
  );
};

CustomAutocomplete.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  noOptionsText: PropTypes.string,
  placeholder: PropTypes.string,
  handleClearSearchText: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  handleOptionLable: PropTypes.func,
  handleOpen: PropTypes.bool,
  handleGroupBy: PropTypes.func,
  isHandleLoading: PropTypes.bool,
  maxLength: PropTypes.number,
  handleFilterOption:PropTypes.func,
  isSearchDisplay: PropTypes.bool,
  isCancelDisplay:PropTypes.bool,
  isDisabled:PropTypes.bool,
  handleIsOptionEqualToValue:PropTypes.func
};

CustomAutocomplete.defaultProps = {
  noOptionsText: "No Result Found",
  placeholder: "Search PID, LOCATION, LOT, CASEID",
  size: "small",
  maxLength: 200,
  custInputValue:"",
  isSearchDisplay:false,
  isCancelDisplay:false,
  isDisabled:false
};
