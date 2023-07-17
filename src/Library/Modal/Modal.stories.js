import React from "react";
import { CustomDialog } from "./Modal";

export default {
  title: "Components/Modal",
  component: CustomDialog,
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },

  },
};


const Template = args => <CustomDialog {...args} />

export const ModalOpen = Template.bind({});

ModalOpen.args = {
  isOpen: true,
  title: "Model Header",
  subtitle: "body",
  handleClose: () => {

  },

};

export const ModalClose = Template.bind({});

ModalClose.args = {
  isOpen: false,
  title: "Model Header",
  subtitle: "body",
  handleClose: () => {

  },

};



