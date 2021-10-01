import React from "react";
import styled, { css } from "styled-components";
import { SideMenuItem } from "./SideMenuItem";

const Aside = styled.aside`
  ${({
    theme: {
      sidebar: { width, background },
    },
  }) => css`
    width: ${width}rem;
    background: ${background};
  `}

  position: relative;
`;

const Logo = styled.div`
  ${({
    theme: {
      sidebar: { width },
    },
  }) => css`
    width: ${width}rem;
    height: ${width}rem;
  `}
`;

const SideMenu = styled.ul`
  width: 100%;

  position: sticky;
  left: 0;
`;

export function Sidebar({ menus }) {
  return (
    <Aside>
      <Logo />
      <SideMenu>
        {menus.map((item) => (
          <SideMenuItem item={item} key={item.path} />
        ))}
      </SideMenu>
    </Aside>
  );
}

Sidebar.propTypes = {};
