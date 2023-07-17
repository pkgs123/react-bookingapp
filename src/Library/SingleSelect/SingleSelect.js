import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

import "./SingleSelect.scss";

import { CustomLabel } from "../Label/Label";

const CustomWrapper = styled("div")(({ $width }) => ({
  display: "inline-block",
  width: $width,
}));
export default function SingleSelect(props) {
  const {
    data,
    label,
    onSelectChange,
    helperText,
    width,
    height,
    tooltipIcon,
    tooltipText,
    disabled,
    placeholder,
    value,
    required,
    objectKey,
    objectValue
  } = props;
  const [selectedData, updateSelectedData] =
    useState(value);
    
  useEffect(() => {
    updateSelectedData(value);
  }, [value]);

  const findObjectValue = (val) =>
    data.filter((i) => i[objectKey] === val);

  const handleChange = (event) => {
    let output = event.target.value;

    if (objectKey && objectValue) {
      output = findObjectValue(output);
    }
    updateSelectedData(output);
    onSelectChange(output);
  };

  return (
    <CustomWrapper id="custom-singleSelect" $width={width}>
      <CustomLabel
        tooltipIcon={tooltipIcon}
        tooltipText={tooltipText}
        label={label}
        required={required}
      />
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        name="singleselectid"
        data-testid="singleselect-id"
        value={selectedData}
        onChange={handleChange}
        inputProps={{
          sx: { height: height, width: width },
        }}
        MenuProps={{
          disableScrollLock: true,
        }}
        size="small"
        displayEmpty
        className="field"
        disabled={disabled}
        renderValue={(selected) => {
          if (!selected) {
            if(value){
              let val = value;
              val = value[0]?.[objectValue];
              return val;
            }
            return placeholder;
          }
          let val = selected;
          if (objectKey && objectKey) {
            val = selectedData[0]?.[objectValue];
          }
          return val;
        }}
      >
        {data.map((row, key) => (
          <MenuItem key={key} value={row[objectKey] ?? row}>
            {row[objectValue] ?? row}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </CustomWrapper>
  );
}

SingleSelect.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.string || PropTypes.number
  ),
  label: PropTypes.string,
  onSelectChange: PropTypes.func,
  helperText: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  tooltipIcon: PropTypes.element,
  tooltipText: PropTypes.string,
  disabled: PropTypes.bool,
  required:PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string || PropTypes.number,
  objectKey: PropTypes.string,
  objectValue: PropTypes.string,
};

SingleSelect.defaultProps = {
  width: "100%",
  height: "50px",
  disabled: false,
  required:false,
};
