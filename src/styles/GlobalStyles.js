import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100vh;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    ${({ theme }) => css`
      background: ${theme.color.background};
    `}
  }

  body, a {
    color: ${({ theme }) => theme.color.fontPrimary};
  }

  a {
    text-decoration: none;
  }

  button {
    background: transparent;
    border: none;
    outline: none;

    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }

  h1 {
    ${({ theme: { fontSize } }) => css`
      font-size: ${fontSize.h2}rem;
    `}
  }

  h2 {
    ${({ theme: { fontSize } }) => css`
      font-size: ${fontSize.h2}rem;
    `}
  }

  h3 {
    ${({ theme: { fontSize } }) => css`
      font-size: ${fontSize.h3}rem;
    `}
  }

  h4 {
    ${({ theme: { fontSize } }) => css`
      font-size: ${fontSize.h4}rem;
    `}
  }

  h5 {
    ${({ theme: { fontSize } }) => css`
      font-size: ${fontSize.h5}rem;
    `}
  }

  h6 {
    ${({ theme: { fontSize } }) => css`
      font-size: ${fontSize.h6}rem;
    `}
  }
  
`;
