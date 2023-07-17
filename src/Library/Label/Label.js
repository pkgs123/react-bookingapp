import React from "react";
import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./Label.scss";
import { Typography } from "@mui/material";

export const CustomLabel = ({
  label,
  tooltipIcon,
  tooltipText,
  required,
  className
}) => {
  return (
    <div className={`custom-label || ${className}`}>
      {label}
      {required && <Typography variant="body1" component="span" className="asterisk">*</Typography>}
      {tooltipText ? (
        <Tooltip title={tooltipText} placement="top" classes={{ tooltip: "label-tooltip" }}>
          <span className="tooltipIcon">{tooltipIcon}</span>
        </Tooltip>
      ) : null}
    </div>
  );
};

CustomLabel.propTypes = {
  label: PropTypes.string,
  tooltipIcon: PropTypes.element,
  tooltipText: PropTypes.string,
};

CustomLabel.defaultProps = {
  tooltipIcon: <InfoOutlinedIcon />,
};
