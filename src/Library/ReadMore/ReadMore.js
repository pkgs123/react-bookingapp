import React, { useState } from "react";
import PropTypes from "prop-types";

import "./ReadMore.scss";

export const ReadMore = ({
  children,
  ellipsis,
  readMoreText,
  readlessText,
}) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const isTextBiggerThanEllipsis = text.length > ellipsis;

  if (!isTextBiggerThanEllipsis) {
    return text;
  }

  return (
    <span className="read-more-text">
      {isReadMore ? text.slice(0, ellipsis) : text}

      <span
        onClick={toggleReadMore}
        className="read-or-hide"
        data-testid="readMore"
      >
        {isReadMore ? readMoreText : readlessText}
      </span>
    </span>
  );
};

ReadMore.propTypes = {
  readMoreText: PropTypes.string,
  readlessText: PropTypes.string,
  ellipsis: PropTypes.number,
};

ReadMore.defaultProps = {
  readMoreText: "...read more",
  readlessText: " show less",
  ellipsis: 300,
};
