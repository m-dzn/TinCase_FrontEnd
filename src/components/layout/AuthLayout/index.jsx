import React from "react";
import styled from "styled-components";
import { FlexBox } from "components";

const Container = styled.div`
  padding: 6rem;
`;

export function AuthLayout({ title, children }) {
  return (
    <Container>
      <header>
        <h5>{title}</h5>
        {children}
      </header>
    </Container>
  );
}

AuthLayout.propTypes = {};
