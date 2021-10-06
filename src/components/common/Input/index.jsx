import React from "react";
import styled, { css } from "styled-components";

const StyledInput = styled.input`
  border: 0.1rem solid black;
  border-radius: 0.4rem;

  ${({
    noLine,
    theme: {
      input: { height, vPad },
    },
  }) => css`
    height: ${height}rem;
    padding: 0 ${vPad}rem;

    ${noLine &&
    css`
      outline: none;
      border: 1px solid transparent;
    `}
  `}
`;

export function Input({ ...rest }) {
  return <StyledInput {...rest} />;
}

Input.propTypes = {};
