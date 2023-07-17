import React, { useEffect, useState } from "react";
import Checkbox, {
  checkboxClasses,
} from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import PropTypes from "prop-types";

export default function ControlledCheckbox(props) {
  const { label, size, onCheckedChange, color, checked, isDisabled } =
    props;
  const [selected, setSelected] = useState(checked);
  useEffect(() => {
    setSelected(checked);
  }, [checked]);

  const handleChange = (event) => {
    setSelected(event.target.checked);

    if (onCheckedChange) {
      onCheckedChange(event.target.checked);
    }
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={selected}
          sx={{
            [`&, &.${checkboxClasses.checked}`]: {
              color: color,
            },
          }}
          onChange={handleChange}
          inputProps={{
            "aria-label": "controlled",
            "data-testid": "checkbox-id",
          }}
          size={size}
          disabled={isDisabled}
        />
      }
      label={label}
    />
  );
}

ControlledCheckbox.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string,
  onCheckedChange: PropTypes.func,
  color: PropTypes.string,
  checked: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

ControlledCheckbox.defaultProps = {
  size: "medium",
  checked: false,
  isDisabled: false,
};
