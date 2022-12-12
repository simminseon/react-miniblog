import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import CommentList from "../list/CommentList";
import data from "../../data/data.json";

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

function BlogPost() {
  const navigate = useNavigate();
  const params = useParams();
  const postNumber = Number(params.post);
  const post = data.blog[postNumber];

  return (
    <>
      <Button onClick={() => navigate("/")}>뒤로가기</Button>
      <PostContainer>
        <TitleText>{post.title}</TitleText>
        <ContentText>{post.content}</ContentText>
      </PostContainer>

      <CommentLabel>댓글</CommentLabel>
      <CommentList comments={post.comments} />
      <TextInput />
      <Button>댓글 작성하기</Button>
    </>
  );
}

export default BlogPost;
