import React, { useState, useRef } from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import { Paper } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useOutsideClickHandle } from "../../Utilities/Hooks/useOutsideClickHandle";

const TableActions = ({ data,children }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const wrapperRef = useRef(null);
  useOutsideClickHandle({
    ref: wrapperRef,
    onOutsideClick: handleClose,
    when: open,
  });
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      sx={{ position: "relative" }}
    >
      <IconButton
        aria-label="more"
        id="long-button"
        aria-haspopup="true"
        onClick={handleClick}
        data-testid="action-btn"
      >
        <MoreVertIcon />
      </IconButton>
      <Paper
        sx={{ display: open ? "block" : "none" }}
        className="quick-menu menu-items"
        ref={wrapperRef}
        onBlur={handleClose}
        onClick={handleClose}
      >
        {children}
      </Paper>
    </Grid>
  );
};

TableActions.propTypes = {
  data: PropTypes.object,
  children: PropTypes.element,
};

export default TableActions;
