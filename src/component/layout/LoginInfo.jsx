import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import { MemberContext, SET_LOGIN } from "../../App";

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
  const { user, login, dispatch } = useContext(MemberContext);
  const navigate = useNavigate();

  const onClickLogout = () => {
    dispatch({
      type: SET_LOGIN,
      login: false,
    });
  };

  return (
    <>
      {login ? (
        <StyledWrapper>
          <StyledText>
            <strong>{user.id}</strong>님 안녕하세요!
          </StyledText>
          <Button onClick={onClickLogout}>로그아웃</Button>
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
