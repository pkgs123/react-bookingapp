import React from "react";
import CustomDatepicker from "./Datepicker";

export default {
  title: "Components/Datepicker",
  component: CustomDatepicker,
};

const Template = (args) => <CustomDatepicker {...args} />;

export const DefaultDatepicker = Template.bind({});

DefaultDatepicker.args = {
  shouldCloseOnSelect:true,
  isClearable: true,
  getDate: () => {},
};

export const MonthYearDatepicker = Template.bind({});

MonthYearDatepicker.args = {
  showMonthYearPicker: true,
  shouldCloseOnSelect:true,
  isClearable: true,
  getDate: () => {},
  dateFormat: "MMM yyyy",
};
