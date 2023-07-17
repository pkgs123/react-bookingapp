import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import "./YearMonthDaySelect.scss";

import CustomSelect from "../SingleSelect/SingleSelect";
import { CustomLabel } from "../Label/Label";

export const generateArray = (max) => {
  return [...Array(max).keys()];
};

export const YearMonthDaySelect = ({
  handleChange,
  maxYears,
  label,
  tooltip,
  disabled,
  days,
  years,
  months,
  isLabel
}) => {
  const [numbers] = useState(
    generateArray(maxYears + 1 > 50 ? maxYears + 1 : 50)
  );

  return (
    <Box id="custom-years-months-days">
      <CustomLabel label={label} tooltipText={tooltip} />
      <Grid container spacing={1}>
        <Grid xs={4}>
          <Box sx={{ display: isLabel ? "block" : "none" }}>
            <CustomLabel
              label="Years"
              className="normalText"
            />
          </Box>
          <CustomSelect
            data={numbers.slice(0, maxYears + 1)}
            placeholder="Years"
            onSelectChange={(val) =>
              handleChange({ years: val, months, days })
            }
            disabled={disabled}
            value={years}
          />
        </Grid>
        <Grid xs={4}>
          <Box sx={{ display: isLabel ? "block" : "none" }}>
            <CustomLabel
              label="Months"
              className="normalText"
            />
          </Box>
          <CustomSelect
            data={numbers.slice(0, 12)}
            placeholder="Months"
            onSelectChange={(val) =>
              handleChange({ years, months: val, days })
            }
            disabled={disabled}
            value={months}
          />
        </Grid>
        <Grid xs={4}>
          <Box sx={{ display: isLabel ? "block" : "none" }}>
            <CustomLabel
              label="Days"
              className="normalText"
            />
          </Box>
          <CustomSelect
            data={numbers.slice(0, 31)}
            placeholder="Days"
            onSelectChange={(val) =>
              handleChange({ years, months, days: val })
            }
            disabled={disabled}
            value={days}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

YearMonthDaySelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  tooltip: PropTypes.string,
  maxYears: PropTypes.number,
  disabled: PropTypes.bool,
  days: PropTypes.number,
  years: PropTypes.number,
  months: PropTypes.number,
  isLabel: PropTypes.bool,
};

YearMonthDaySelect.defaultProps = {
  maxYears: 99,
  disabled: false,
  days: 0,
  years: 0,
  months: 0,
  isLabel: false,
};
