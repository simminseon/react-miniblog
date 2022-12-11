import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 30px 50px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
