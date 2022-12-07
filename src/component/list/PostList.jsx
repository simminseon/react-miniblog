import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: colum;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function PostList() {
  return (
    <Wrapper>
      <PostListItem />
    </Wrapper>
  );
}

export default PostList;
