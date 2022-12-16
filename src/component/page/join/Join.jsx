import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import { useInput } from "../../../hooks/useInput";
import ErrorMessage from "../../ui/ErrorMessage";
import { MemberContext, ADD_MEMBER } from "../../../App";

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

  const [member, setMember] = useState({
    id,
    password,
    email,
  });
  // console.log(memberData);

  useEffect(() => {
    if (password !== passwordCheck) {
      setPasswordCheckError(true);
    } else {
      setPasswordCheckError(false);
    }
  }, [password, passwordCheck]);

  // const checkValue = (id, password, email) => {
  //   if (id.length <= 0) {
  //     return setIdError(true);
  //   }
  //   // else {
  //   //   setIdError(false);
  //   // }
  //   if (password.length <= 0) {
  //     return setPasswordError(true);
  //   }
  //   // else {
  //   //   setPasswordError(false);
  //   // }
  //   if (email.length <= 0) {
  //     return setEmailError(true);
  //   }
  //   // else {
  //   //   setEmailError(false);
  //   // }

  //   return true;
  // };

  const onSubmitJoin = (e) => {
    e.preventDefault();

    if (id.length <= 0) {
      setIdError(true);
    } else {
      setIdError(false);
    }
    if (password.length <= 0) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (email.length <= 0) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    // if (!checkValue(id, password, email)) {
    //   return;
    // }

    dispatch({
      type: ADD_MEMBER,
      memberData: [...memberData, { id: id, password: password, email: email }],
    });
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
        {/* {error} */}
        {passwordCheckError && (
          <ErrorMessage>비밀번호가 다릅니다.</ErrorMessage>
        )}
        {/* {passwordError && <ErrorMessage>비밀번호를 입력해주세요.</ErrorMessage>} */}
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
