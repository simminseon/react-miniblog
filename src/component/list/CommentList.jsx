import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function CommentList({ comments }) {
  return (
    <Wrapper>
      {comments.map((data) => {
        return <CommentListItem key={data.id} comment={data} />;
      })}
    </Wrapper>
  );
}

export default CommentList;
