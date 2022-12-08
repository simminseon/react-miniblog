import React from "react";
import Button from "../ui/Button";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data/data.json";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";

function BlogPost() {
  const navigate = useNavigate();
  const params = useParams();
  const postNumber = Number(params.post);
  const post = data.blog[postNumber];

  return (
    <>
      <Button onClick={() => navigate("/")}>뒤로가기</Button>
      <div>
        <strong>{post.title}</strong>
        <div>{post.content}</div>
      </div>
      <div>
        <span>댓글</span>
        <CommentList comments={post.comments} />
        <TextInput />
        <Button>댓글 작성하기</Button>
      </div>
    </>
  );
}

export default BlogPost;
