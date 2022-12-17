import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import PostList from "../../list/PostList";
import data from "../../../data/data.json";
import LoginInfo from "../../layout/LoginInfo";
import { MemberContext } from "../../../App";

function BlogList() {
  const { login } = useContext(MemberContext);
  const navigate = useNavigate();
  return (
    <>
      <LoginInfo />
      {login && (
        <Button onClick={() => navigate("/blogWrite")}>글 작성하기</Button>
      )}

      <PostList blogDataList={data.blog} />
    </>
  );
}

export default BlogList;
