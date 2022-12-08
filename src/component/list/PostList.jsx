import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-top: 16px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function PostList({ blogDataList }) {
  return (
    <Wrapper>
      {blogDataList.map((data) => {
        return <PostListItem key={data.id} id={data.id} title={data.title} />;
      })}
    </Wrapper>
  );
}

export default PostList;
