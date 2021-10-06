import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Wrapper = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;

  ${({ type, theme: { fontSize } }) => css`
    padding: ${fontSize[type]}rem;
    font-size: ${fontSize[type]}rem;
  `}
`;

export function Logo({ type }) {
  return (
    <Wrapper to="/" type={type}>
      TINCASE
    </Wrapper>
  );
}

Logo.propTypes = {};
