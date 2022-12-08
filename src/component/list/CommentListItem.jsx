import React from "react";
import styled from "styled-components";

function CommentListItem({ comments }) {
  return <li>{comments.title}</li>;
}

export default CommentListItem;
