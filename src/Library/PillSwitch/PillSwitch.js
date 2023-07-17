import React from "react";
import PropTypes from "prop-types";

import "./PillSwitch.scss";

export const PillSwitch = ({ isOn, handleToggle }) => {
  let classToApply = "undecided";
  if (isOn === true) {
    classToApply = "checked";
  }
  if (isOn === false) {
    classToApply = "unchecked";
  }

  const toggleSwitch = (input) => {
    handleToggle(input);
  };

  return (
    <span id="pill-switch" className={classToApply}>
      <label
        className="custom-switch-label true"
        htmlFor="custom-switch-true"
        data-testid="custom-switch-true"
        onClick={() => toggleSwitch(true)}
      >
        Y
      </label>

      <label
        className="custom-switch-label false"
        htmlFor="custom-switch-false"
        data-testid="custom-switch-false"
        onClick={() => toggleSwitch(false)}
      >
        N
      </label>
    </span>
  );
};

PillSwitch.propTypes = {
  isOn: PropTypes.bool,
  handleToggle: PropTypes.func.isRequired,
};

PillSwitch.defaultProps = {
  isOn: undefined,
};
