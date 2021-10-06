import React from "react";
import styled, { css } from "styled-components";
import { Avatar } from "components";
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
  display: flex;
  justify-content: center;
  align-items: center;

  ${({
    theme: {
      sidebar: { width, avatarSize },
    },
  }) => css`
    width: ${width}rem;
    height: ${width}rem;

    img {
      width: ${avatarSize}rem;
      height: ${avatarSize}rem;
    }
  `}
`;

const SideMenu = styled.ul`
  width: 100%;

  position: sticky;
  left: 0;
`;

export function Sidebar({ menus, currentUser }) {
  return (
    <Aside>
      <Logo>
        <Avatar src={currentUser?.avatar} />
      </Logo>
      <SideMenu>
        {menus &&
          menus.map((item) => <SideMenuItem item={item} key={item.path} />)}
      </SideMenu>
    </Aside>
  );
}

Sidebar.propTypes = {};
