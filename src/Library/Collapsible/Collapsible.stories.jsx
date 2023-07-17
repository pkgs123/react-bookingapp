import React from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

import "./Collapsible.scss";

import { Collapsible } from "./Collapsible";

export default {
  title: "Library/Collapsible",
  argTypes: {
    title: { control: "text" },
  },
};

const Template = (args) => <Collapsible {...args} />;

export const AccordionOpen = Template.bind({});

AccordionOpen.args = {
  title: "Test title",
  shouldBeExpended: true,
  statusIcon: <RemoveCircleIcon fontSize="small" color="error" stroke={"white"} stroke-width={1} />,
  children: <h1>Dummy text</h1>,
};

export const AccordionClose = Template.bind({});

AccordionClose.args = {
  title: "Close title",
  shouldBeExpended: false,
  statusIcon: <ExpandCircleDownIcon fontSize="small" color="success" stroke={"white"} stroke-width={1}/>,
  children: <h1>Dummy text</h1>,
};