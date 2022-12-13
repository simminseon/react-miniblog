import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 15px;
  font-size: 14px;
`;

function Input({ type, id, onChange, value, placeholder }) {
  return (
    <StyledInput
      type={type ? type : "text"}
      value={value}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Input;
