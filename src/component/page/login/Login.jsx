import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import ErrorMessage from "../../ui/ErrorMessage";
import { useInput } from "../../../hooks/useInput";
import { MemberContext, SET_LOGIN, SET_USER } from "../../../App";

const errorMessage = {
  emptyId: "아이디를 입력해주세요",
  errorId: "가입된 아이디가 없습니다.",
  emptyPassword: "비밀번호를 입력해주세요",
  errorPassword: "비밀번호가 틀렸습니다.",
};

const StyledField = styled.div`
  padding-bottom: 20px;
`;

function Login() {
  const { memberData, dispatch } = useContext(MemberContext);
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [idErrorMessage, setIdErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmitLogin = (e) => {
    e.preventDefault();

    const idCheck = memberData.filter((data) => {
      return data.id === id;
    });

    if (idCheck.length === 0) {
      setIdError(true);
      setIdErrorMessage(errorMessage.errorId);
    } else {
      setIdError(false);
      idCheck.map((data) => {
        if (data.password === password) {
          setPasswordError(false);
          dispatch({
            type: SET_LOGIN,
            login: true,
          });
          dispatch({
            type: SET_USER,
            user: data,
          });
          navigate("/");
        } else {
          setPasswordError(true);
          setPasswordErrorMessage(errorMessage.errorPassword);
        }
      });
    }

    if (id === "") {
      setIdError(true);
      setIdErrorMessage(errorMessage.emptyId);
    }
    if (password === "") {
      setPasswordError(true);
      setPasswordErrorMessage(errorMessage.emptyPassword);
    }
  };
  return (
    <>
      <form onSubmit={onSubmitLogin}>
        <h2>로그인</h2>
        <StyledField>
          <Label id={"inpId"}>아이디</Label>
          <Input
            id={"inpId"}
            value={id}
            onChange={onChangeId}
            placeholder={"아이디를 입력해주세요"}
          />
          {idError && <ErrorMessage>{idErrorMessage}</ErrorMessage>}
        </StyledField>
        <StyledField>
          <Label id={"inpPassword"}>비밀번호</Label>
          <Input
            type={"password"}
            id={"inpPassword"}
            value={password}
            onChange={onChangePassword}
            placeholder={"비밀번호를 입력해주세요"}
          />
          {passwordError && <ErrorMessage>{passwordErrorMessage}</ErrorMessage>}
        </StyledField>
        <Button size={"full"}>로그인</Button>
      </form>
      <Button onClick={() => navigate("/join")} size={"full"}>
        회원가입
      </Button>
    </>
  );
}

export default Login;
