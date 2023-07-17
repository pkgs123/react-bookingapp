import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Settings from "@mui/icons-material/MoreVert";
import Logout from "@mui/icons-material/Logout";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import variables from "../../App.scss";
import { Notifications } from "../../Library/Notifications/Notifications";
import { emptyStateInfo } from "../../redux/slices/ClearStateSlice/ClearState";
import HCLLOGO from '../../images/logo-hcl-healthcare.png';
export const Navbar = ({
  title,
  color,
  position,
  handleItemClick,
  handleDrawerToggle,
  notifications,
  ...props
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);

  const [anchorEl, setAnchorEl] = React.useState(null);


  const [openNotification, setOpenNotifications] =
    useState(false);
  const open = Boolean(anchorEl);

  const {user} = useSelector(state=>state?.user)
  const {name} = user??"";

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setOpenNotifications(false);
  };

  const [openNewRequest, setOpenNewRequest] =
    useState(false);
  const { pathname } = useLocation();

  const handleNotification = () => {
  
    setOpenNotifications(!openNotification);
  };

const handleLogout = () =>{
  dispatch(emptyStateInfo())
  localStorage.clear();
  navigate("/login");
}
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id="profileMenu"
      onClose={handleClose}
      open={open}
      PaperProps={{
        sx: { width: "12rem" },
      }}
    >
      <MenuItem onClick={props.handleMenuClose}>
      
        <Box alignItems="center" display="flex" gap={2}>
          <Box>
            <ListItemIcon>
              <Avatar fontSize="small"></Avatar>
            </ListItemIcon>
          </Box>
          <Box>
            <span>
              { name ?? "User"} <br />
              
            </span>
          </Box>
        </Box>
      </MenuItem>

      <Divider />
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
          {localStorage.getItem("token") === null ? "Login" : "Logout" }
      </MenuItem>
    </Menu>
  );

  /* LEFT SIDE MENU */
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <Typography variant="h6" sx={{ my: 4 }}>
        {"HCL HEALTHCARE" || props.drawerTitle}
      </Typography>
      <Divider />
      <List
        sx={{
          "&& .Mui-selected, && .Mui-selected:hover": {
            bgcolor: variables.color_deep_blue,
            "&, & .MuiListItemIcon-root": {
              color: variables.color_white,
            },
          },
          "& .MuiListItemButton-root:hover": {
            bgcolor: variables.color_deep_blue,
            "&, & .MuiListItemIcon-root": {
              color: variables.color_white,
            },
          },
        }}
      >
        {props.navItems &&
          props.navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={handleItemClick}
                sx={{ textAlign: "left" }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar color={color} position={position} {...props}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon
              sx={{ color: variables.color_deep_blue }}
            />
          </IconButton>
          <Typography
            sx={{
              display: { xs: "none", sm: "block" },
              fontSize: 25,
              fontWeight: "bold",
              whiteSpace:"nowrap"
            }}
          >
            {/* {title} */}
            <img style={{ width: '238px' }} src={HCLLOGO} alt="" />
          </Typography>
          
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
         
          </Grid>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              onClick={() => setOpenNewRequest(true)}
            >
              <AddCircleIcon textAnchor="Search Doctor"
                sx={{ color: variables.color_deep_blue }}
              />
            </IconButton> */}

           <Box sx={{ position: "relative" }}>
              <IconButton
                size="large"
                aria-label="show notifications"
                color="inherit"
                onClick={handleNotification}
              >
                <Badge badgeContent={0} color="error">
                  <NotificationsIcon
                    sx={{
                      color: variables.color_deep_blue,
                    }}
                  />
                </Badge>
              </IconButton>
              <div ref={wrapperRef}>
                <Notifications
                  // notifications={notificationList}
                  isOpen={openNotification}
                  // notificationClickHandler={
                  //   notificationClickHandler
                  // }
                />
              </div>
            </Box>


            <IconButton
              aria-controls="basic-menu"
              onClick={handleClick}
            >
              <AccountCircleRoundedIcon
                sx={{ color: variables.color_deep_blue }}
              />
            </IconButton>
           
          </Box>
          <Box sx={{ display: { xs: "none", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={props.mobileMenuId}
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          {renderMenu}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          onClose={handleDrawerToggle}
          open={props.drawerMenuOpen}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Box>
  
    </Box>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    "default",
    "inherit",
    "primary",
    "secondary",
    "transparent",
  ]),
  position: PropTypes.oneOf([
    "absolute",
    "fixed",
    "relative",
    "static",
    "sticky",
  ]),
  onClick: PropTypes.func,
  handleItemClick: PropTypes.func,
  handleDrawerToggle: PropTypes.func,
  handleProfileToggle: PropTypes.func,
};

Navbar.defaultProps = {
  position: "sticky",
  color: "primary",
  notifications: [],
};
