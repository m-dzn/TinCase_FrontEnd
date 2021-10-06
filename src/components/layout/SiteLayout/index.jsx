import React from "react";
import styled, { css } from "styled-components";
import { Sidebar, FlexBox, Navbar } from "components";

const Template = styled.div`
  display: flex;

  ${({
    minWidth,
    theme: {
      siteLayout: { minHeight },
    },
  }) => css`
    min-width: ${minWidth}rem;
    min-height: ${minHeight};
  `}
`;

const Main = styled.main`
  flex: 1;

  ${({
    theme: {
      siteLayout: { mainVPad, mainHPad },
    },
  }) => css`
    padding: ${mainVPad}rem ${mainHPad}rem;
  `}
`;

export function SiteLayout({
  minWidth = 48,
  currentUser,
  sidebarMenus,
  navbarMenus,
  children,
}) {
  return (
    <Template minWidth={minWidth}>
      <Sidebar menus={sidebarMenus} currentUser={currentUser} />
      <FlexBox column>
        <header>
          <Navbar menus={navbarMenus} currentUser={currentUser} />
        </header>
        <Main>{children}</Main>
      </FlexBox>
    </Template>
  );
}

SiteLayout.propTypes = {};
