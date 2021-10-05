import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Img = styled.img`
  border-radius: 50%;
  object-fit: cover;

  ${({ size }) => css`
    width: ${size}rem;
    height: ${size}rem;
  `}
`;

export function Avatar({ src, size = 32 }) {
  return <Img src={src} alter="Avatar" size={size / 10} />;
}

Avatar.propTypes = {};
