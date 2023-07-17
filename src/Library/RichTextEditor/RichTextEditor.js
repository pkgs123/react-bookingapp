import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import { formats, modules } from "./RTEConstants";
import "react-quill/dist/quill.snow.css";
import "./RichTextEditor.scss";
import { Quill } from "react-quill/lib";
import { Box } from "@mui/material";
const ColorClass = Quill.import("attributors/class/color");
Quill.register(ColorClass, true);
export const CustomRTE = ({
  data,
  onRTEChange,
  readOnly,
  placeholder,
  maxLength,
  showLimit,
  height,
}) => {
  const [value, setValue] = useState(data);
  const [count, setCount] = useState(maxLength);
  let quillEditor = useRef();
  const onChange = (data, ...args) => {
    const editor = args[2];
    const length = editor.getLength() - 1;
    if (onRTEChange && length <= maxLength) {
      setValue(data);
      onRTEChange(data);
      setCount(maxLength - length);
    } else {
      setData();
    }
  };
  const setData = () => {
    if (count <= 0) {
      const elm =
        quillEditor.current?.editingArea?.getElementsByClassName(
          "ql-editor"
        )[0];
      elm.innerHTML = value;
    }
  };
  useEffect(() => {
    setValue(data);
    setCount(maxLength - data.length);
  }, [data]);

  return (
    <Box id="customRTE">
      <Box sx={{ height: height }}>
        <ReactQuill
          value={value}
          ref={quillEditor}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          modules={modules}
          formats={formats}
          theme={readOnly ? "bubble" : "snow"}
          className="editor"
        />
      </Box>
      {showLimit && !readOnly && (
        <span className="charLimitFont">
          {count}/{maxLength}
        </span>
      )}
    </Box>
  );
};

CustomRTE.propTypes = {
  onRTEChange: PropTypes.func,
  data: PropTypes.string,
  readOnly: PropTypes.bool,
  height: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  showLimit: PropTypes.bool,
};

CustomRTE.defaultProps = {
  data: "",
  readOnly: false,
  placeholder: "",
  height: "200px",
  maxLength: 2000,
  showLimit: true,
};
