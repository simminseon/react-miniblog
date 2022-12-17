import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import ErrorMessage from "../../ui/ErrorMessage";
import { MemberContext, ADD_MEMBER } from "../../../App";
import { useInput } from "../../../hooks/useInput";

const StyledField = styled.div`
  padding-bottom: 20px;
`;

function Join() {
  const { memberData, dispatch } = useContext(MemberContext);
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState(false);
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (password !== passwordCheck) {
      setPasswordCheckError(true);
    } else {
      setPasswordCheckError(false);
    }
  }, [password, passwordCheck]);

  const onSubmitJoin = (e) => {
    e.preventDefault();

    if (id.length <= 0) {
      setIdError(true);
      return;
    } else {
      setIdError(false);
    }
    if (password.length <= 0) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }
    if (password !== passwordCheck) {
      setPasswordCheckError(true);
      return;
    } else {
      setPasswordCheckError(false);
    }
    if (email.length <= 0) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    dispatch({
      type: ADD_MEMBER,
      memberData: [...memberData, { id: id, password: password, email: email }],
    });

    alert("회원가입이 완료되었습니다.");
    navigate("/login");
  };

  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  return (
    <form onSubmit={onSubmitJoin}>
      <h2>회원가입</h2>
      <StyledField>
        <Label id={"inpId"}>아이디</Label>
        <Input
          id={"inpId"}
          value={id}
          onChange={onChangeId}
          placeholder={"아이디를 입력해주세요"}
        />
        {idError && <ErrorMessage>아이디를 입력해주세요.</ErrorMessage>}
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
        {passwordError && <ErrorMessage>비밀번호를 입력해주세요.</ErrorMessage>}
      </StyledField>
      <StyledField>
        <Label id={"inpPasswordCheck"}>비밀번호 확인</Label>
        <Input
          type={"password"}
          id={"inpPasswordCheck"}
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          placeholder={"비밀번호를 한번 더 입력해주세요"}
        />
        {passwordCheckError && (
          <ErrorMessage>비밀번호가 다릅니다.</ErrorMessage>
        )}
      </StyledField>
      <StyledField>
        <Label id={"inpEmail"}>이메일</Label>
        <Input
          type={"email"}
          id={"inpEmail"}
          value={email}
          onChange={onChangeEmail}
          placeholder={"이메일을 입력해주세요"}
        />
        {emailError && <ErrorMessage>이메일을 입력해주세요.</ErrorMessage>}
      </StyledField>
      <Button size={"full"}>회원가입</Button>
    </form>
  );
}

export default Join;
