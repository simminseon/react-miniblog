import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import PostList from "../list/PostList";
import data from "../../data/data.json";

function BlogList() {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate("/blogWrite")}>글 작성하기</Button>
      <PostList blogDataList={data.blog} />
    </>
  );
}

export default BlogList;
