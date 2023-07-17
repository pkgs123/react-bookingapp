import React, {
  useState,
  forwardRef,
  useEffect,
} from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Calender from "../Assets/Calender";
import "react-datepicker/dist/react-datepicker.css";
import "./Datepicker.scss";
import { CustomLabel } from "../Label/Label";
const CustomDatepicker = ({
  getDate,
  minDate,
  maxDate,
  isClearable,
  placeholder,
  shouldCloseOnSelect,
  showMonthYearPicker,
  className,
  closeOnScroll,
  dateFormat,
  value,
  disabled,
  label,
  tooltipText,
  height,
}) => {
  const [selectedDate, setSelectedDate] = useState();

  useEffect(() => {
    if (value && value !== "") {
      const date = new Date(value);
      setSelectedDate(date);
    } else if (value === "") {
      setSelectedDate();
    }
  }, [value]);
  function handleDateChange(date) {
    setSelectedDate(date);
    getDate(date);
  }

  const CustomInput = forwardRef(
    ({ value, onClick }, ref) => (
      <div className="custom-datepicker">
        <CustomLabel
          label={label}
          tooltipText={tooltipText}
        />
        <TextField
          data-testid="custinput-textfield"
          // name={name}
          className="field"
          type="text"
          placeholder={placeholder}
          onClick={onClick}
          ref={ref}
          value={value}
          disabled={disabled}
          InputProps={{
            sx: { height: height },
            endAdornment: (
              <Calender onClick={onClick}></Calender>
            ),
          }}
        />
      </div>
    )
  );
  CustomInput.displayName = "CustomInput";
  if (showMonthYearPicker) {
    return (
      <DatePicker
        wrapperClassName="datePicker"
        id="CustomDatepicker"
        className={className}
        data-testid="datepicker-monthvalue"
        dateFormat={dateFormat}
        showMonthYearPicker={showMonthYearPicker}
        dropdownMode="scroll"
        selected={selectedDate}
        isClearable={isClearable}
        onChange={(date) => handleDateChange(date)}
        closeOnScroll={closeOnScroll}
        shouldCloseOnSelect={shouldCloseOnSelect}
        customInput={<CustomInput />}
        minDate={minDate}
        maxDate={maxDate}
        disabled={disabled}
      />
    );
  }

  return (
    <DatePicker
      wrapperClassName="datePicker"
      id="CustomDatepicker"
      className={className}
      data-testid="datepickerDefault"
      dateFormat={dateFormat}
      dropdownMode="scroll"
      selected={selectedDate}
      isClearable={isClearable}
      onChange={(date) => handleDateChange(date)}
      closeOnScroll={closeOnScroll}
      shouldCloseOnSelect={shouldCloseOnSelect}
      customInput={<CustomInput />}
      minDate={minDate}
      maxDate={maxDate}
      disabled={disabled}
      
      // showTimeSelect
      // timeIntervals={30}
      
    />
  );
};

CustomDatepicker.propTypes = {
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  handleDateChange: PropTypes.func,
  getDate: PropTypes.func,
  shouldCloseOnSelect: PropTypes.bool,
  isClearable: PropTypes.bool,
  closeOnScroll: PropTypes.bool,
  className: PropTypes.string,
  dateFormat: PropTypes.string,
  showMonthYearPicker: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  tooltipText: PropTypes.string,
  height: PropTypes.string,
};

CustomDatepicker.defaultProps = {
  showMonthYearPicker: false,
  dateFormat: "dd-MM-yyyy",
  placeholder: "dd/MM/yyyy",
  height: "40px",
};

export default CustomDatepicker;
