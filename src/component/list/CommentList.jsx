import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

function CommentList({ comments }) {
  console.log("코멘트 컴포넌트:", comments);
  return (
    <ul>
      {comments.map((data) => {
        return <CommentListItem key={data.id} comments={data} />;
      })}
    </ul>
  );
}

export default CommentList;
