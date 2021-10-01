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

  h3 {
    font-size: 2.8rem;
    font-weight: bold;
  }
  
`;
