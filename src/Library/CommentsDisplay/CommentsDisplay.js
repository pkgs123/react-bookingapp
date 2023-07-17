import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import {
  formatDate,
  timestampFromDate,
} from "../../Utilities/common";

import "./CommentsDisplay.scss";

import { Tag } from "../Tag/Tag";
import { ReadMore } from "../ReadMore/ReadMore";

export function hashCode(str) {
  if (!str) return;

  let stringUniqueHash = [...str].reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 15) - acc);
  }, 0);
  return `hsl(${stringUniqueHash % 360}, 95%, 35%)`;
}

export function DisplayComments({
  commentList,
  height,
  readMoreText,
  readlessText,
  ellipsis,
  placeholder,
}) {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        maxHeight: height,
      }}
      id="custom-comment-list"
    >
      {commentList && commentList.length > 0 ? (
        commentList.map((list, i) => (
          <ListItem
            alignItems="flex-start"
            key={i}
            disableGutters
            className="custom-comment-list-item"
            disablePadding
          >
            <ListItemAvatar sx={{ minWidth: "32px" }}>
              <Avatar
                sx={{
                  bgcolor: hashCode(list.createdBy),
                  width: 24,
                  height: 24,
                }}
              >
                {""}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={<CommentInfo {...list} />}
              disableTypography
              secondary={
                <ReadMore
                  readMoreText={readMoreText}
                  readlessText={readlessText}
                  ellipsis={ellipsis}
                >
                  {list.commentsText}
                </ReadMore>
              }
            />
          </ListItem>
        ))
      ) : (
        <span className="placeholderText">
          {placeholder}
        </span>
      )}
    </List>
  );
}

const CommentInfo = (info) => {
  const { createdBy, commentsTags, thumbsUp, createdDate } =
    info;
  const tagsReversed = commentsTags
    ? [...commentsTags].reverse()
    : [];
  const date = formatDate(createdDate);

  const hoursAndMinutes = timestampFromDate(createdDate);

  return (
    <Grid container className="comment-list">
      <Grid
        item
        className="createdBy"
        xs={3}
        sx={{ fontWeight: 600 }}
      >
        {createdBy}
      </Grid>
      <Grid item className="response" xs={1}>
        {thumbsUp === true && <ThumbUpAltIcon />}
        {thumbsUp === false && <ThumbDownAltIcon />}
      </Grid>
      <Grid item className="commentsTags" xs={5}>
        {tagsReversed.map((tag, i) => (
          <span className="tag" key={i + tag}>
            <Tag label={tag} size="small" />
          </span>
        ))}
      </Grid>

      <Grid
        item
        className="createdDate"
        xs={3}
        justifyContent={"flex-end"}
      >
        {`${date} ${hoursAndMinutes}`}
      </Grid>
    </Grid>
  );
};

DisplayComments.propTypes = {
  commentList: PropTypes.array.isRequired,
  height: PropTypes.number,
  readMoreText: PropTypes.string,
  readlessText: PropTypes.string,
  ellipsis: PropTypes.number,
  placeholder: PropTypes.string,
};

DisplayComments.defaultProps = {
  height: 200,
  readMoreText: "...read more",
  readlessText: " read less",
  ellipsis: 300,
  placeholder: "No comments to display...",
};
