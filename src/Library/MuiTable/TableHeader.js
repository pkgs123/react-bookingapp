import React, { useState } from "react";
import { Grid } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import PropTypes from "prop-types";

const TableHeader = ({ id, title }) => {
  const [isIcon, setisIcon] = useState(false);
  const headerClickHandler = () => {
    setisIcon((isIcon) => !isIcon);
  };
  return (
    <div
      onClick={headerClickHandler}
      id={id}
      data-testid="header-click"
    >
      <Grid
        direction="row"
        className="center-div"
        style={{
          textTransform: "capitalize",
          width: "auto",
        }}
      >
        <Grid item sx={{ textOverflow: "ellipsis" }}>
          {title}
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <ArrowDropUpIcon
              fontSize="small"
              className="sort-icon-margin"
              sx={{
                opacity: isIcon ? 0.5 : 1,
              }}
            />
            <ArrowDropDownIcon
              fontSize="small"
              className="sort-icon-margin"
              sx={{
                opacity: !isIcon ? 0.5 : 1,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

TableHeader.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};

TableHeader.defaultProps = {
  id: "",
};
export default TableHeader;
