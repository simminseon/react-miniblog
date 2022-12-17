import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MemberContext, SET_LOGIN } from "../../App";
import Button from "../ui/Button";
const StyledWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const StyledText = styled.span`
  font-size: 15px;
  padding-right: 10px;
`;

function LoginInfo() {
  const { memberData, login } = useContext(MemberContext);
  const [member, setMember] = useState({});
  const [isLogin, setIsLogin] = useState({});
  const navigate = useNavigate();
  // console.log("멤버데이터:", memberData);
  // console.log("로그인 정보:", login);
  useEffect(() => {
    setMember(memberData);
    setIsLogin(login);
    console.log(memberData);
    console.log(login);
  }, []);
  // console.log(member);
  return (
    <>
      {isLogin ? (
        <StyledWrapper>
          <StyledText>
            <strong>{}</strong>님이 로그인 하였습니다.
          </StyledText>
          <Button>로그아웃</Button>
        </StyledWrapper>
      ) : (
        <StyledWrapper>
          <StyledText>로그인을 해주세요.</StyledText>
          <Button onClick={() => navigate("/login")}>로그인</Button>
        </StyledWrapper>
      )}
    </>
  );
}

export default LoginInfo;
