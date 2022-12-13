import React from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

function Login() {
  return (
    <form>
      <h2>로그인</h2>
      <div>
        <Label id={"inpId"}>아이디</Label>
        <Input id={"inpId"} />
      </div>
      <div>
        <Label id={"inpPassword"}>비밀번호</Label>
        <Input type={"password"} id={"inpPassword"} />
      </div>
      <Button size={"full"}>로그인</Button>
    </form>
  );
}

export default Login;
