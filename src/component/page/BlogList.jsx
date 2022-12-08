import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import PostList from "../list/PostList";
import data from "../data/data.json";

function BlogList() {
  const [blogData, setBlogData] = useState(data.blog);
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate("/blogWrite")}>글 작성하기</Button>
      <PostList blogDataList={blogData} />
    </>
  );
}

export default BlogList;
