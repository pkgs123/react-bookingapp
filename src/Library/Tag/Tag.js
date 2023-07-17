import React from "react";
import Chip from "@mui/material/Chip";
import PropTypes from "prop-types";

import "./Tag.scss";

export const Tag = (props) => {
  return (
    <>
      <Chip variant="filled" id="tag-ui" {...props}>{props.children}</Chip>
    </>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};
