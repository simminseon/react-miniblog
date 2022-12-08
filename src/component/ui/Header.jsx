import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  height: 80px;
`;

const StyledTitle = styled.h1`
  font-size: 30px;
  line-height: 80px;
  text-align: center;
  padding: 0;
  margin: 0;
`;

function Header({ children }) {
  return (
    <StyledHeader>
      <StyledTitle>{children}</StyledTitle>
    </StyledHeader>
  );
}

export default Header;
