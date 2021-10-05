import React from "react";
import styled, { css } from "styled-components";
import { Sidebar, FlexBox, Navbar } from "components";

const Template = styled.div`
  display: flex;

  ${({
    theme: {
      siteLayout: { minHeight },
    },
  }) => css`
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
  currentUser,
  sidebarMenus,
  navbarMenus,
  children,
}) {
  return (
    <Template>
      <Sidebar menus={sidebarMenus} />
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
