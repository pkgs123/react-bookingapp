import React, { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import "./Tab.scss";

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default function CustomTabs({
  tabs,
  className,
  variant,
}) {
  const location = useLocation();
  const { tabPosition } = location?.state || 0;

  const [value, setValue] = React.useState(
    tabPosition || 0
  );

  useEffect(() => {
    setValue(tabPosition ? tabPosition : 0);
  }, [tabPosition]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box>
        <Tabs
          id="customTabs"
          className={`custom-tabs ||  ${className}`}
          value={value}
          onChange={handleChange}
          data-testid="tabTestId"
          aria-label="tabs"
          variant={variant}
        >
          {tabs.map(({ label }, i) => (
            <Tab label={label} key={i} />
          ))}
        </Tabs>
      </Box>
      {tabs.map(({ Component }, i) => (
        <TabPanel value={value} index={i} key={i}>
          {Component}
        </TabPanel>
      ))}
    </Box>
  );
}

CustomTabs.propTypes = {
  variant: PropTypes.string,
};

CustomTabs.defaultProps = {
  variant: "fullWidth",
};
