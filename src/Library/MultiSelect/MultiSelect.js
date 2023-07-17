import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";
import variables from "../../App.scss";
import { CustomLabel } from "../Label/Label";
import { styled } from "@mui/material/styles";

import "./MultiSelect.scss";

const CustomWrapper = styled(FormControl)(({ $width }) => ({
  display: "inline-block",
  width: $width,
}));
export default function MultiSelect(props) {
  const [selectedData, updateSelectedData] = React.useState(
    []
  );
  const {
    data,
    label,
    onSelectChange,
    width,
    height,
    placeholder,
    tooltipText,
    tooltipIcon,
    disabled,
  } = props;

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    updateSelectedData(
      typeof value === "string" ? value.split(",") : value
    );

    if (onSelectChange) {
      onSelectChange(value);
    }
  };

  return (
    <CustomWrapper id="custom-multiSelect" $width={width}>
      <CustomLabel
        tooltipIcon={tooltipIcon}
        tooltipText={tooltipText}
        label={label}
      />
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        data-testid="multipleselect-id"
        multiple
        displayEmpty
        value={selectedData}
        size="small"
        className="field"
        onChange={handleChange}
        disabled={disabled}
        inputProps={{
          sx: { height: height, width: width },
        }}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <div>{placeholder}</div>;
          }

          return selected.join(", ");
        }}
        MenuProps={{
          sx: { width: width },
        }}
      >
        {data.map((option) => (
          <MenuItem
            sx={{ height: 30 }}
            divider={true}
            key={option.id}
            value={option.value}
          >
            <Checkbox
              checked={selectedData.indexOf(option.value) > -1}
            />
            {selectedData.indexOf(option.value) > -1 ? (
              <ListItemText
                sx={{ color: variables.color_deep_blue }}
                primary={option.value}
                
              />
            ) : (
              <ListItemText primary={option.value} />
            )}
          </MenuItem>
        ))}
      </Select>
    </CustomWrapper>
  );
}

MultiSelect.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
  onSelectChange: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  tooltipIcon: PropTypes.element,
  tooltipText: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

MultiSelect.defaultProps = {
  placeholder: "Select",
  width: "100%",
  height: "50px",
  disabled: false,
};
