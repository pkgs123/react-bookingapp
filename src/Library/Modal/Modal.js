import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import PropTypes from "prop-types";
import { CustomButton } from "../Button/Button";
import "./Modal.scss";
import Cancel from "../Assets/Cancel.js";

export const CustomDialog = ({
  isOpen,
  handleConfirmation,
  handleClose,
  title,
  subtitle,
  confirmationLabel,
  closeLabel,
  isConfirmationModal,
  children,
  maxWidth,
}) => {
  const handleAccept = () => {
    if (handleConfirmation) handleConfirmation();
  };

  return (
    <>
      <Dialog
        id="Dialog"
        fullWidth
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        maxWidth={maxWidth}
      >
        <div className="closeWrapper">
          <div  className = {`${title === "Cancel Confirmation?" ? 'Modal-Header-cancel-Container' : 'Modal-Header-Container'}`}>
            <div className="Modal-Header">
              <div
                className="modalCloseIcon"
                onClick={handleClose}
              >
                <Cancel />
              </div>
              {title && (
                <div style={{color:"white"}}>
                  <DialogTitle id="dialog-title" sx={{color:"white"}}>
                    {title}
                  </DialogTitle>
                </div>
              )}
            </div>
          </div>
        </div>

        <DialogContent>
          {subtitle && (
            <DialogContentText>
              {subtitle}
            </DialogContentText>
          )}
          {children}
        </DialogContent>
        {isConfirmationModal && (
          <DialogActions>
            <CustomButton
              size="small"
              onClick={handleClose}
              data-testid="custBtnId"
            >
              {closeLabel}
            </CustomButton>

            {/* <CustomButton
              onClick={handleAccept}
              color="primary"
              data-testid="accept-id"
              size="small"
            >
              {confirmationLabel}
            </CustomButton> */}
          </DialogActions>
        )}
      </Dialog>
    </>
  );
};

CustomDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.element,
  confirmationLabel: PropTypes.string,
  closeLabel: PropTypes.string,
  maxWidth: PropTypes.string,
};

CustomDialog.defaultProps = {
  confirmationLabel: "Agree",
  closeLabel: "OK",
  maxWidth: "md"
};
