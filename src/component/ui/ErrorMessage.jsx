import React from "react";
import styled from "styled-components";

const StyledErrorMessage = styled.strong`
  display: block;
  color: red;
  font-size: 12px;
  padding-top: 4px;
`;

function ErrorMessage({ children }) {
  return <StyledErrorMessage>{children}</StyledErrorMessage>;
}

export default ErrorMessage;
