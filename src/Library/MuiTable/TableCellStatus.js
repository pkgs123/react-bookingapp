import React from "react";
import { CircleRounded } from "@mui/icons-material";
import { Grid, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Table.scss";

const TableCellStatus = ({
  title,
  color,
  value,
  showSwatch,
  processType,
  stateType,
  stateTaskType,
}) => {
  return (
    <div className="maxWidth">
      <Grid container direction="row" alignItems="center">
        {showSwatch && (
          <Grid item className="status-grid">
            <Tooltip title={title}>
              <CircleRounded sx={{ color: color }} />
            </Tooltip>
          </Grid>
        )}
        <Grid item className="case-id-link">
          <Link
            to={
              processType?.draftPath ??
              `/sitesourcingassessment`
            }
            state={{
              [stateType]: value.caseId,
              [stateTaskType]: value?.taskId ?? "",
            }}
          >
            {value.caseMasterId}
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

TableCellStatus.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.object,
  showSwatch: PropTypes.bool,
  stateType: PropTypes.string,
  stateTaskType: PropTypes.string,
};

TableCellStatus.defaultProps = {
  showSwatch: true,
  stateType: "caseId",
  stateTaskType: "taskId",
};
export default TableCellStatus;
