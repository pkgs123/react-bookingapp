import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import {
  ListItemIcon,
  Avatar,
  ListItem,
  ListItemText,
  IconButton,
  List,
  Tooltip,
  Divider,
} from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Settings, Logout } from "@mui/icons-material";
import variables from "../../App.scss";
import {useNavigate} from "react-router-dom"

function AccountMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const userProfileLogoutSetting = [
    { label: "Settings", icon: <Settings /> },
    { label: "Logout", icon: <Logout /> },
  ];
  const userProfileAccount = [
    { label: "Profile", icon: <Avatar /> },
    { label: "My account", icon: <Avatar /> },
  ];

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogoutSettings = (event, index) => {
    console.log("event",event,"index",index);
    navigate("/login");
  };
  const handleProfileAccount = () => {
    handleClose();
  };

  return (
    <Box>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <List style={{cursor:"pointer"}}>
                {userProfileAccount.map((item, index) => (
                  <ListItem
                    key={index}
                    style={{ zoom: "80%" }}
                    onClick={(event) => handleProfileAccount(event, index)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.label}</ListItemText>
                  </ListItem>
                ))}
                <Divider />
                {userProfileLogoutSetting.map((item, index) => (
                  <ListItem
                    key={index}
                    style={{ zoom: "80%" }}
                    onClick={(event) => handleLogoutSettings(event, index)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.label}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Fade>
        )}
      </Popper>

      <Grid container justifyContent="right">
        <Grid item>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick("bottom-end")}
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              aria-controls={open ? "account-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
            >
              <AccountCircleRoundedIcon sx={{color:variables.color_deep_blue}}/>
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
}
export default AccountMenu;
