import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";

function BlogWrite() {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate("/")}>뒤로가기</Button>
      <TextInput />
      <TextInput height={500} />
      <Button>글 작성하기</Button>
    </>
  );
}

export default BlogWrite;
