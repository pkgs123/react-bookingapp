import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";

import constant from "../../App.scss";

export const Loader = ({ isOpen, color }) => {
  return (
    <div>
      <Backdrop
        sx={{
          color: { color },
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={isOpen}
      >
        <CircularProgress
          color="inherit"
          data-testid="progressbar"
        />
      </Backdrop>
    </div>
  );
};

Loader.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  color: PropTypes.string,
};

Loader.defaultProps = {
  isOpen: false,
  color: constant.color_info_main,
};
