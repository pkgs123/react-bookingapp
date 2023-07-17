import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

import "./TagSelect.scss";

import { Tag } from "../Tag/Tag";

export const TagSelect = ({
  limit,
  options,
  placeholder,
  disabled,
  handleTags,
  size,
  selectedValues,
  handleOptionLabel,
  tagLabel
}) => {
  return (
    <div id="custom-tag-select">
      <Autocomplete
        multiple
        disabled={disabled}
        options={options}
        getOptionLabel={handleOptionLabel}
        filterSelectedOptions
        disableCloseOnSelect
        size={size}
        value={selectedValues}
        getOptionDisabled={() =>
          selectedValues?.length >= limit
        }
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Tag
              label={option[tagLabel]}
              key={option}
              {...getTagProps({ index })}
              deleteIcon={
                <CloseIcon className="tag-cancel-btn" />
              }
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            className="field"
          />
        )}
        onChange={(_event, newValue) => {
          handleTags(newValue);
        }}
      />
    </div>
  );
};

TagSelect.propTypes = {
  disabled: PropTypes.bool,
  limit: PropTypes.number,
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
  handleTags: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["small", "medium"]),
  selectedValues: PropTypes.array.isRequired,
  handleOptionLabel:PropTypes.func.isRequired,
};

TagSelect.defaultProps = {
  disabled: false,
  placeholder: "Select",
  size: "small",
  selectedValues: [],
};
