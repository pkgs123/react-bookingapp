import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Breadcrumbs } from "./Breadcrumbs";

const crumbs = [
  {
    label: "level",
    link: "#",
    icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  },
  { label: "level 1", link: "#" },
  { label: "level 2", link: "#" },
  { label: "level 3" },
];

export default {
  title: "Components/Breadcrumbs",
  argTypes: {
    homeLink: { control: "text" },
  },
};
const BreadcrumbsTemplate = (args) => (
  <Breadcrumbs {...args} />
);

export const Primary = BreadcrumbsTemplate.bind({});
Primary.args = {
  crumbs: crumbs,
};
