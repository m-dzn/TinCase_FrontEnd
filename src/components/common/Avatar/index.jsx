import React from "react";
import defaultAvatar from "assets/images/defaultAvatar.png";
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
  return <Img src={src || defaultAvatar} alter="Avatar" size={size / 10} />;
}

Avatar.propTypes = {};
