import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
  height: ${(props) => props.height || 36}px;
`;

function TextInput({ height }) {
  return <StyledTextarea height={height} />;
}

export default TextInput;
