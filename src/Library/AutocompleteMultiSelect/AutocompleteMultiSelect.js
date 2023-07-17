import * as React from "react";
import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./AutocompleteMultiSelect.scss";

export const AutocompleteMultiSelect = ({
  size,
  multiple,
  noOptionsText,
  options,
  handleOnChange,
  handleOptionLabel,
  handleGroupBy,
  handleRenderOption,
  handleOptionDisabled,
  handleRenderInput,
  className,
  placeholder,
  disableCloseOnSelect,
  value,
}) => {
  const defaultInput = (params) => (
    <TextField
      {...params}
      label=""
      placeholder={placeholder}
    />
  );

  return (
    <div id="multiSelectAutocomplete">
      <Autocomplete
        multiple={multiple}
        size={size}
        className={`custom-multi-autocomplete ||  ${className}`}
        value={value}
        options={options}
        noOptionsText={noOptionsText}
        getOptionDisabled={handleOptionDisabled}
        onChange={handleOnChange}
        getOptionLabel={handleOptionLabel}
        groupBy={handleGroupBy}
        renderOption={handleRenderOption}
        disableCloseOnSelect={disableCloseOnSelect}
        renderInput={handleRenderInput ?? defaultInput}
      />
    </div>
  );
};

AutocompleteMultiSelect.propTypes = {
  size: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
  noOptionsText: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
  handleOptionLabel: PropTypes.func,
  className: PropTypes.string,
  handleGroupBy: PropTypes.func,
  handleRenderOption: PropTypes.func,
  handleOptionDisabled: PropTypes.func,
  handleRenderInput: PropTypes.func,
  disableCloseOnSelect: PropTypes.bool,
};
AutocompleteMultiSelect.defaultProps = {
  noOptionsText: "No Result Found",
  size: "small",
  multiple: true,
  placeholder: "select",
  disableCloseOnSelect: true,
};
