import React from "react";
import styled, { css } from "styled-components";
import { FlexBox } from "components";

const Header = styled.div`
  ${({
    theme: {
      contentsLayout: { headerBottom },
    },
  }) =>
    css`
      padding-bottom: ${headerBottom}rem;
    `}
`;

export function ContentsLayout({ title, children }) {
  return (
    <>
      <Header>
        <h4>{title}</h4>
      </Header>
      <FlexBox column>{children}</FlexBox>
    </>
  );
}

ContentsLayout.propTypes = {};
