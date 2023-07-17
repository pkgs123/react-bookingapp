import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/material/styles";
import "./ProgressBar.scss";
import constants from "../../App.scss";

const CustomStepLabel = styled(StepLabel)`
  & .MuiStepLabel-label.MuiStepLabel-alternativeLabel {
    margin-top: 10px;
  }
`;

const COMMON_STYLES = {
  borderRadius: "20px",
  width: "20px",
  height: " 20px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

const IconContainer = styled(Box)(() => ({
  ...COMMON_STYLES,
  width: "21px",
  height: "21px",
  border: "2px solid",
  padding: "2px !important",
  borderColor: constants.color_default_icon,
}));

const IconWrapper = styled(Box)(() => ({
  ...COMMON_STYLES,
  backgroundColor: constants.color_default_icon,
}));

const ProgressIcon = (props) => {
  const { status, icon } = props;

  let color = "";
  let tickColor = constants.color_white;
  if (status === "completed")
    color = constants.color_low_severity;
  else if (status === "in-progress")
    color = constants.color_medium_severity;
  else if (status === "incomplete")
    color = constants.color_high_severity;
  else tickColor = constants.color_black;
  return (
    <>
      <IconContainer
        sx={{ borderColor: color }}
        className={`custom-progress-bar-icon-wrapper ${status}`}
      >
        <IconWrapper
          sx={{ background: color, color: tickColor }}
          className="custom-progress-bar-icon"
        >
          {icon || <CheckIcon fontSize="12" />}
        </IconWrapper>
      </IconContainer>
    </>
  );
};

export function ProgressBar({ icon, steps, setScroll }) {
  return (
    <Box sx={{ width: "100%" }} id="custom-progress-bar">
      <Stepper alternativeLabel>
        {steps.map((item) => (
          <Step key={item.scrollTo}>
            <CustomStepLabel
              StepIconProps={{ status: item.status, icon }}
              StepIconComponent={ProgressIcon}
            >
              {item.scrollTo ? (
                <span
                  className="link"
                  onClick={() => setScroll(item.scrollTo)}
                >
                  {item.label}
                </span>
              ) : (
                <span>{item.label}</span>
              )}
            </CustomStepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

ProgressBar.propTypes = {
  icon: PropTypes.element,
  steps: PropTypes.array.isRequired,
  setScroll: PropTypes.func,
};
