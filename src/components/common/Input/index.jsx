import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 0.1rem solid black;
  height: 3rem;
  border-radius: 0.4rem;
`;

export function Input({ ...rest }) {
  return <StyledInput {...rest} />;
}

Input.propTypes = {};
