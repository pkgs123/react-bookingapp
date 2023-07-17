import * as React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import PropTypes from "prop-types";
import "./RadioButton.scss";

export default function RadioButton(props) {
  const {
    label,
    onRadioButtonChange,
    required,
    size,
    showLabel,
  } = props;

  const handleChange = (event) => {
    if (onRadioButtonChange) {
      onRadioButtonChange(event.target.value);
    }
  };

  return (
    <FormControlLabel
      {...props}
      onChange={handleChange}
      className={`formPadding ${
        required ? "required" : ""
      }`}
      data-testid="radioformid"
      value={label}
      sx={{
        "& .MuiTypography-root": {
          fontSize: size,
          fontFamily: "inherit",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "140%",
        },
      }}
      control={
        <Radio
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: size,
            },
          }}
        />
      }
      label={showLabel ? label : ""}
    />
  );
}

RadioButton.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onRadioButtonChange: PropTypes.func,
  size: PropTypes.string,
  showLabel: PropTypes.bool,
};

RadioButton.defaultProps = {
  disabled: false,
  size: "medium",
  required: false,
  showLabel: true,
};
