import React, { useState } from "react";
import PropTypes from "prop-types";
import CommentIcon from "@mui/icons-material/Comment";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import constant from "../../App.scss";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

import "./CommentBox.scss";
import { styled } from "@mui/system";

const CommentWrapper = styled(Box)`
  display: flex;
  min-height: 50px;
`;

export function CommentBox({
  handleSubmit,
  placeholder,
  limit,
  disabled,
  height,
  comment,
  setComment,
  showThumbs,
  handleThumbsDown,
}) {
  const [commentlength, setCommentlength] = useState(limit);

  const handleClear = () => {
    setComment("");
    setCommentlength(limit);
  };

  const sumbitComment = async (role) => {
    handleSubmit(role);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setComment(value);
    setCommentlength(limit - value.length);
  };

  return (
    <div id="custom-comment-box">
      <CommentWrapper
        className="input-wrapper"
        sx={{ height: height }}
      >
        <textarea
          className="text-area"
          maxLength={limit}
          value={comment}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          data-testid="commentInput"
        />
        {showThumbs && (
          <div className="button-container">
            <div className="button-wrapper">
              <ThumbUpAltIcon
                sx={{
                  cursor: "pointer",
                  color: constant.color_blue,
                }}
                onClick={sumbitComment}
                role="button"
              />
            </div>
            <div className="button-wrapper">
              <ThumbDownAltIcon
                sx={{
                  cursor: "pointer",
                  color: constant.color_blue,
                }}
                onClick={handleThumbsDown}
                role="button"
              />
            </div>
            <div className="button-wrapper">
              <ClearIcon
                sx={{
                  cursor: "pointer",
                  color: constant.color_error_main,
                }}
                role="button"
                onClick={handleClear}
              />
            </div>
          </div>
        )}

        {!showThumbs && (
          <div className="button-container">
            <div className="button-wrapper">
              <CommentIcon
                sx={{
                  cursor: "pointer",
                  color: constant.color_blue,
                }}
                onClick={sumbitComment}
                role="button"
              />
            </div>
            <div className="button-wrapper">
              <ClearIcon
                sx={{
                  cursor: "pointer",
                  color: constant.color_error_main,
                }}
                role="button"
                onClick={handleClear}
              />
            </div>
          </div>
        )}
      </CommentWrapper>
      <div className="limit">
        {commentlength}/{limit}
      </div>
    </div>
  );
}

CommentBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  limit: PropTypes.number,
  disabled: PropTypes.bool,
  height: PropTypes.number,
  showThumbs: PropTypes.bool,
  handleThumbsDown: PropTypes.func,
};

CommentBox.defaultProps = {
  limit: 200,
  disabled: false,
  height: 120,
  showThumbs: false,
};
