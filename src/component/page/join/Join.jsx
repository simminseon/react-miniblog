import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import { useInput } from "../../../hooks/useInput";
import ErrorMessage from "../../ui/ErrorMessage";

const StyledField = styled.div`
  padding-bottom: 20px;
`;

function Join() {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState(false);

  useEffect(() => {
    if (password !== passwordCheck && passwordCheck.length > 0) {
      setPasswordCheckError(true);
    } else if (password === passwordCheck) {
      setPasswordCheckError(false);
    }
  }, [password, passwordCheck]);

  const onSubmitJoin = (e) => {
    e.preventDefault();
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
        {<ErrorMessage>아이디를 입력해주세요.</ErrorMessage>}
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
        {/* {error && <ErrorMessage>비밀번호를 입력해주세요.</ErrorMessage>} */}
      </StyledField>
      <StyledField>
        <Label id={"inpPasswordConfirm"}>비밀번호 확인</Label>
        <Input
          type={"passwordConfirm"}
          id={"inpPasswordConfirm"}
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          placeholder={"비밀번호를 한번 더 입력해주세요"}
        />
        {/* {error} */}
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
        {/* {error && <ErrorMessage>이메일을 입력해주세요.</ErrorMessage>} */}
      </StyledField>
      <Button size={"full"}>회원가입</Button>
    </form>
  );
}

export default Join;
