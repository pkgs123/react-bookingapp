import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TaskIcon from "@mui/icons-material/Task";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DraftsIcon from "@mui/icons-material/Drafts";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HistoryIcon from "@mui/icons-material/History";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./NavbarBase";
function NavBar() {
  const navigate = useNavigate();

  const [drawerMenuOpen, setDrawerMenuOpen] =
    useState(false);

  const [profileMenuOpen, setProfileMenuOpen] =
    useState(false);

  const handleItemClick = (e) => {
    let currentItem = e.target.textContent;
    switch (currentItem) {
    case "Home":
      navigate("/");
      break;
    case "Search Doctor(s)":
      navigate("/searchdoctor");
      break;
    case "Logout":
      localStorage.clear();
      navigate("/login");
    case "Login":
      localStorage.clear();
      navigate("/login");
      break;
    default:
      navigate("/");
    }
  };

  const handleDrawerToggle = () => {
    setDrawerMenuOpen(!drawerMenuOpen);
  };

  const handleProfileToggle = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  //Clicking new request handler from navbar
  const handleNewRequest = () => {};

  const navItems = [
    { name: "Home", icon: <HomeIcon /> },
    {name:"Search Doctor(s)", icon:<PeopleAltIcon/>},
    { name: "Appointments", icon: <AssignmentIcon /> },
    // { name: "Upcoming", icon: <UpcomingIcon /> },
    // { name: "Historical", icon: <HistoryIcon /> },
    { name: "Notifications", icon: <NotificationsIcon /> },
    {
      name: localStorage.getItem("token") ? "Logout" : "Login",
      icon: <DraftsIcon />,
    },
  ];

  return (
    <>
      <Navbar
        title={"HCL HEALTHCARE"}
        handleItemClick={handleItemClick}
        handleDrawerToggle={handleDrawerToggle}
        handleProfileToggle={handleProfileToggle}
        handleNewRequest={handleNewRequest}
        color={"default"}
        navItems={navItems}
        drawerMenuOpen={drawerMenuOpen}
        profileMenuOpen={profileMenuOpen}
       
      />
    </>
  );
}
export default NavBar;
