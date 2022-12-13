import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLabel = styled.label`
  display: block;
  padding-bottom: 10px;
  font-size: 15px;
  color: black;
  font-weight: bold;
`;

function Label({ id, children }) {
  return <StyledLabel htmlFor={id}>{children}</StyledLabel>;
}

Label.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Label;
