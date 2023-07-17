import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./TextArea.scss";
import { CustomLabel } from "../Label/Label";

const CustomWrapper = styled("div")(({ $width }) => ({
  display: "inline-block",
  width: $width,
}));

export default function TextArea(props) {
  const {
    label,
    onTextChange,
    rows,
    placeholder,
    limit,
    tooltipIcon,
    tooltipText,
    width,
    disabled,
    value,
    showLimit,
    required
  } = props;
  const [charLimit, setCharLimit] = useState(limit);

  const handleChange = (event) => {
    if (onTextChange) {
      onTextChange(event.target.value);
    }
    setCharLimit(limit - event.target.value.length);
  };
  return (
    <CustomWrapper id="custom-textarea" $width={width}>
      <CustomLabel
        tooltipIcon={tooltipIcon}
        tooltipText={tooltipText}
        label={label}
        required={required}
      />
      <TextField
        required={required}
        className="field"
        multiline
        rows={rows}
        onChange={handleChange}
        InputProps={{ sx: { width: width } }}
        placeholder={placeholder}
        disabled={disabled}
        inputProps={{ maxLength: limit }}
        value={value}
      />
      {showLimit && (
        <span className="charLimitFont">
          Max: {charLimit}
        </span>
      )}
    </CustomWrapper>
  );
}

TextArea.propTypes = {
  label: PropTypes.string,
  onCheckedChange: PropTypes.func,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  limit: PropTypes.number,
  width: PropTypes.string,
  tooltipIcon: PropTypes.element,
  tooltipText: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  showLimit: PropTypes.bool,
  required: PropTypes.bool,
};

TextArea.defaultProps = {
  rows: 3,
  limit: 200,
  width: "100%",
  tooltipIcon: <InfoOutlinedIcon />,
  disabled: false,
  showLimit: true,
  required: false
};
