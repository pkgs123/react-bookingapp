import React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/system";
import { Box, ListItemButton, Paper } from "@mui/material";
import Fade from "@mui/material/Fade";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import PropTypes from "prop-types";

import "./Notifications.scss";

const CustomWrapper = styled("span")(({ $lines }) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: $lines,
  WebkitBoxOrient: "vertical",
}));

export const Notifications = ({
  notifications,
  maxWidth,
  width,
  lines,
  isOpen,
  containerWidth,
  showArrow,
  notificationClickHandler,
}) => {
  const itemClickHandler = (id) => {
    if (notificationClickHandler)
      notificationClickHandler(id);
  };

  return (
    <Box id="notifications" sx={{ width: containerWidth }}>
      <Fade in={isOpen}>
        <Paper
          sx={{
            width: width,
            maxWidth: { maxWidth },
          }}
          className="notifications-wrapper"
        >
          {showArrow && notifications.length > 0 && (
            <ArrowDropUpIcon
              className="arrow"
              fontSize="18px"
            />
          )}
          <List className="containerHeight">
            {notifications?.map((item, i) => (
              <div key={i} className="paddingDiv">
                <ListItemButton
                  data-testid="itemButton"
                  className={!item.read ? "bold" : ""}
                  id={item.notificationId}
                  onClick={() =>
                    itemClickHandler(item.notificationId)
                  }
                >
                  <ListItemText
                    primary={item.createdBy}
                    secondary={
                      <CustomWrapper $lines={lines}>
                        {item.notification}
                      </CustomWrapper>
                    }
                  />
                </ListItemButton>
              </div>
            ))}
          </List>
        </Paper>
      </Fade>
    </Box>
  );
};

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
  width: PropTypes.string,
  lines: PropTypes.number,
  isOpen: PropTypes.bool,
  showArrow: PropTypes.bool,
  containerWidth: PropTypes.string,
  notificationClickHandler: PropTypes.func,
};

Notifications.defaultProps = {
  notifications: [],
  containerWidth: "100%",
  width: "300px",
  lines: 2,
  isOpen: false,
  showArrow: true,
};
