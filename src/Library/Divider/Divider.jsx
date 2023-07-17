import * as React from "react";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";

export default function FormDivider(props) {
  const { className, align, label, color } = props;

  return (
    <Divider
      sx={{
        "&::before, &::after": {
          borderColor: color,
        },
      }}
      data-testid="divider-id"
      className={className}
      textAlign={align}
    >
      {label}
    </Divider>
  );
}

FormDivider.propTypes = {
  className: PropTypes.string,
  textAlign: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
};
