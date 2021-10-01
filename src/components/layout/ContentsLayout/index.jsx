import React from "react";
import styled, { css } from "styled-components";
import { Sidebar, FlexBox, Navbar } from "components";
import { sidebarMenus, navbarMenus } from "routes";

const Template = styled.div`
  display: flex;

  ${({
    theme: {
      contentsLayout: { minHeight },
    },
  }) => css`
    min-height: ${minHeight};
  `}
`;

const Main = styled.main`
  flex: 1;

  ${({
    theme: {
      contentsLayout: { mainVPad, mainHPad },
    },
  }) => css`
    padding: ${mainVPad}rem ${mainHPad}rem;
  `}
`;

export function ContentsLayout({ title, children }) {
  return (
    <Template>
      <Sidebar menus={sidebarMenus} />
      <FlexBox column>
        <header>
          <Navbar menus={navbarMenus} />
        </header>
        <Main>
          <h3>{title}</h3>
          {children}
        </Main>
      </FlexBox>
    </Template>
  );
}

ContentsLayout.propTypes = {};
