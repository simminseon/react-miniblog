import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  :hover {
    background: lightgray;
  }
`;

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

function PostListItem({ title, id }) {
  // const params = useParams();
  const navigate = useNavigate();

  // const onClick = () => {
  //   // console.log(params);
  //   console.log(params);
  //   console.log("test");
  // };
  return (
    <Wrapper onClick={() => navigate(`/blogPost/${id}`)}>
      {/* <TitleText onClick={() => navigate(`/blogPost:${id}`)}>{title}</TitleText> */}
      <TitleText>{title}</TitleText>
    </Wrapper>
  );
}

export default PostListItem;
