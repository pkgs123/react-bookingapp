import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import "./Button.scss";

import { CustomDialog } from "../Modal/Modal";

export const CustomButton = ({
  primary,
  size,
  children,
  ...props
}) => {
  const { disabled } = props;
  const mode = primary
    ? "custom-button--primary"
    : "custom-button--secondary";
  return (
    <Button
      id="CustomButton"
      className={`custom-button custom-button--${size} ${
        !disabled ? mode : "disabled"
      }`}
      {...props}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  children: PropTypes.element.isRequired,
};

export const ConfirmationButton = ({
  buttonProps,
  modalProps,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <CustomDialog
        isConfirmationModal={true}
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        {...modalProps}
      />
      <CustomButton
        {...buttonProps}
        onClick={() => setIsOpen(true)}
      >
        {children}
      </CustomButton>
    </>
  );
};

ConfirmationButton.propTypes = {
  children: PropTypes.element.isRequired,
};
