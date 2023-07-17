import React from "react";
// import PropTypes from "prop-types";
import { Navbar } from "./Navbar";

export default {
  title: "components/Navbar",
  component: Navbar
};

const Template = (args) => <Navbar {...args} />;

export const AppNavbar = Template.bind({});

export const DrawerMenuOpen = Template.bind({});

export const ProfileMenuOpen = Template.bind({});

DrawerMenuOpen.args = {
  drawerMenuOpen: true,
  handleClose: () => {

  },
};

ProfileMenuOpen.args = {
  profileMenuOpen: true,
  handleClose: () => {

  },
};

AppNavbar.args = {
  // primary: true,
  title: "Atlas",
  color:  "primary",
  position: "sticky"
};