import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styled, { css } from "styled-components";
const heartIconSize = 1.7;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  ${({ theme: { unit, fontSize } }) => css`
    border: 0.1rem solid black;
    padding: ${unit * 4}rem ${unit * 3}rem;
    font-size: ${fontSize.sm}rem;

    svg {
      width: ${heartIconSize}rem;
      height: ${heartIconSize}rem;
      margin-right: ${heartIconSize * 0.2}rem;
    }
  `}
`;

export function PostLikeBox({ like, onClick, ...rest }) {
  return (
    <Wrapper onClick={() => onClick(like)} {...rest}>
      {like ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
      좋아요
    </Wrapper>
  );
}
