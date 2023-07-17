import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

import LinearProgress from "@mui/material/LinearProgress";

export const calculateProgress = (
  currentProgress,
  size
) => {
  if (currentProgress >= 80) return currentProgress;
  const diff = 10 / size;
  return Math.min(currentProgress + diff, 100);
};

export const LinearDeterminate = ({
  isCompleted,
  size,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (isCompleted) {
      clearInterval(timer);
      setProgress(100);
    } else {
      timer = setInterval(() => {
        setProgress((oldProgress) =>
          calculateProgress(oldProgress, size)
        );
      }, 500);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isCompleted]);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress
        variant="determinate"
        value={progress}
      />
    </Box>
  );
};

LinearDeterminate.propTypes = {
  isCompleted: PropTypes.bool,
  size: PropTypes.number,
};

LinearDeterminate.defaultProps = {
  isCompleted: false,
  size: 1,
};
