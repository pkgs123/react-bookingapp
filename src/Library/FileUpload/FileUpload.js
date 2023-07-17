import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import "./FileUpload.scss";

import { CustomButton } from "../Button/Button";

export const FileUpload = ({
  handleFiles,
  maxSize,
  title,
  subTitle,
  simple,
  buttonLabel,
  multiple,
  showErrors,
  buttonPrimary,
  accept,
  disabled,
}) => {
  const maxSizeBytes = maxSize * 1024 * 1024;

  const sizeValidation = (file) => {
    if (file.size > maxSizeBytes) {
      return {
        code: "name-too-large",
        message: `${formatBytes(
          file.size
        )} is bigger than maximum the file size (${maxSize} MB) allowed.`,
      };
    }
  };
  const onDrop = useCallback(
    (fileList) => {
      handleFiles(fileList);
    },
    []
  );

  const { getRootProps, getInputProps, fileRejections } =
    useDropzone({
      accept: accept,
      multiple: multiple,
      validator: sizeValidation,
      disabled: disabled,
      onDrop,
    });
  const fileRejectionItems = fileRejections.map(
    ({ file, errors }) => (
      <ul key={file.name}>
        {errors.map((e) => (
          <li
            className="upload-errors"
            key={e.code}
          >{`${file.name} ${e.message}`}</li>
        ))}
      </ul>
    )
  );

  return (
    <>
      <div {...getRootProps()} id="form-file-upload">
        <input {...getInputProps()} />

        {simple && (
          <CustomButton
            primary={buttonPrimary}
            size="small"
          >
            {<span>{buttonLabel}</span>}
          </CustomButton>
        )}

        {!simple && (
          <div
            id="label-file-upload"
            htmlFor="input-file-upload"
          >
            <div>
              <p>{title}</p>
              <p className="subtext">{subTitle}</p>
              <CustomButton
                size="small"
                primary={buttonPrimary}
              >
                {<span>{buttonLabel}</span>}
              </CustomButton>
            </div>
          </div>
        )}
      </div>
      {showErrors && fileRejectionItems}
    </>
  );
};

FileUpload.propTypes = {
  simple: PropTypes.bool,
  maxSize: PropTypes.oneOf([1, 2, 5, 10, 20, 30, 40, 50]),
  buttonLabel: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  multiple: PropTypes.bool,
  showErrors: PropTypes.bool,
  handleFiles: PropTypes.func.isRequired,
  buttonPrimary: PropTypes.bool,
  accept: PropTypes.object,
  disabled: PropTypes.bool,
  files: PropTypes.array,
};

FileUpload.defaultProps = {
  simple: false,
  maxSize: 10,
  buttonLabel: "Select file",
  title: "Select a file or drag and drop here",
  subTitle:
    "All file types allowed. File size no more than 10 MB",
  multiple: true,
  showErrors: true,
  buttonPrimary: false,
  disabled: false,
  accept: {
    "image/*": [],
    "video/*": [],
    "audio/*": [],
    "application/msword": [],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      [],
    "application/vnd.ms-powerpoint": [],
    "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      [],
    "application/pdf": [],
    "text/plain": [],
    "application/vnd.ms-excel": [],
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      [],
    "application/json": [],
  },
  files: [],
};

export const formatBytes = (bytes, decimals = 2) => {
  if (!+bytes) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat(
    (bytes / Math.pow(k, i)).toFixed(dm)
  )} ${sizes[i]}`;
};
