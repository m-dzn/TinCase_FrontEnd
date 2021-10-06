import React from "react";
import styled, { css } from "styled-components";
import { Logo } from "components";

const Layout = styled.div`
  ${({
    theme: {
      authForm: { width, inputGap },
    },
  }) => css`
    width: ${width}rem;

    & > * + * {
      margin-top: ${inputGap}rem;
    }
  `}

  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({
    theme: {
      authForm: { marginBottom },
    },
  }) => css`
    margin-bottom: ${marginBottom}rem;
  `}
`;

export function AuthFormLayout({ title, children }) {
  return (
    <Layout>
      <Logo type="h5" />
      <Title>{title}</Title>
      {children}
    </Layout>
  );
}

AuthFormLayout.propTypes = {};
