import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const sizeStyle = css`
  ${(props) =>
    props.size === "full" &&
    css`
      width: 100%;
    `}
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
  ${sizeStyle}
`;

function Button({ onClick, children, size }) {
  return (
    <StyledButton onClick={onClick} size={size}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Button;
