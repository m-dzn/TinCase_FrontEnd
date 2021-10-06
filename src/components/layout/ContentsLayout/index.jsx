import React from "react";
import styled, { css } from "styled-components";
import { FlexBox } from "components";

const Container = styled.div`
  margin: 0 auto;
  ${({
    maxWidth,
    theme: {
      color,
      contentsLayout: { vPad, hPad },
    },
  }) => css`
    background: ${color.surface};
    max-width: ${maxWidth}rem;
    padding: ${vPad}rem ${hPad}rem;
  `}
`;

const Header = styled.div`
  ${({
    theme: {
      contentsLayout: { headerVPad, headerHPad },
    },
  }) =>
    css`
      padding: ${headerVPad}rem ${headerHPad}rem;
    `}
`;

export function ContentsLayout({ maxWidth = 102.4, title, children }) {
  return (
    <Container maxWidth={maxWidth}>
      <Header>{title && <h4>{title}</h4>}</Header>
      <FlexBox column>{children}</FlexBox>
    </Container>
  );
}

ContentsLayout.propTypes = {};
