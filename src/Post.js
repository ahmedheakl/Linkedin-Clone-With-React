import { Avatar } from "@material-ui/core";
import React from "react";
import "./styles/Post.css";
import InputOption from "./InputOption";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="postContainer">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__description">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__options">
        <InputOption title="Like" Icon={ThumbUpIcon} color="blue" />
        <InputOption title="Comment" Icon={CommentIcon} color="blue" />
        <InputOption title="Share" Icon={ShareIcon} color="blue" />
        <InputOption title="Send" Icon={SendIcon} color="blue" />
      </div>
    </div>
  );
};

export default Post;
