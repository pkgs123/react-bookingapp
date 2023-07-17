import * as React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import "./TextField.scss";

import { CustomLabel } from "../Label/Label";

const CustomWrapper = styled("div")(({ $width }) => ({
  display: "inline-block",
  width: $width,
}));
export default function InputTextField(props) {
  const {
    type,
    label,
    placeholder,
    onTextChange,
    height,
    width,
    tooltipIcon,
    tooltipText,
    disabled,
    value,
    required,
    maxLength,
    pattern,
  } = props;

  const inputPattern = React.useMemo(() => {
    if (pattern) return pattern;
    if (type === "number") return /[^\d.]+/g;
    if (type === "text") return /[^0-9a-zA-Z ]+/g;
  }, [pattern, type]);

  let filteredValue = "";
  const handleChange = (event) => {
    const { value: newValue } = event.target;
    filteredValue = newValue.replace(inputPattern, "");
    if (onTextChange) {
      onTextChange(filteredValue);
    }
  };

  return (
    <CustomWrapper id="custom-input" $width={width}>
      <CustomLabel
        tooltipIcon={tooltipIcon}
        tooltipText={tooltipText}
        label={label}
        required={required}
      />
      <TextField
        required={required}
        id="outlined-required"
        className="field"
        InputProps={{
          sx: { height: height, width: width },
        }}
        inputProps={{
          maxLength: maxLength,
          pattern: inputPattern,
          "data-testid": "password-text-field",
        }}
        onChange={handleChange}
        placeholder={placeholder}
        type={type === "password" ? "password" : "text"}
        disabled={disabled}
        value={value}
      />
    </CustomWrapper>
  );
}

InputTextField.propTypes = {
  type: PropTypes.oneOf(["text", "number", "password"]),
  label: PropTypes.string,
  onTextChange: PropTypes.func,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  tooltipIcon: PropTypes.element,
  tooltipText: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  pattern: PropTypes.instanceOf(RegExp),
};

InputTextField.defaultProps = {
  width: "100%",
  height: "40px",
  tooltipIcon: <InfoOutlinedIcon />,
  disabled: false,
  required: false,
  type: "text",
  maxLength: 30,
};
