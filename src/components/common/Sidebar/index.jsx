import React from "react";
import styled, { css } from "styled-components";
import { Avatar } from "components";
import { SideMenuItem } from "./SideMenuItem";

const Section = styled.section`
  ${({
    theme: {
      sidebar: { width, background },
    },
  }) => css`
    width: ${width}rem;
    background: ${background};
  `}
`;

const Aside = styled.aside`
  width: 100%;

  position: sticky;
  top: 0;
  left: 0;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({
    theme: {
      sidebar: { width, avatarSize, logoBMargin },
    },
  }) => css`
    width: ${width}rem;
    height: ${width}rem;

    margin-bottom: ${logoBMargin}rem;

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

  ${({
    theme: {
      sidebar: { itemGap },
    },
  }) => css`
    & > li + li {
      margin-top: ${itemGap}rem;
    }
  `}
`;

export function Sidebar({ menus, currentUser }) {
  return (
    <Section>
      <Aside>
        <Logo>
          <Avatar src={currentUser?.avatar} />
        </Logo>
        <SideMenu>
          {menus &&
            menus.map((item) => <SideMenuItem item={item} key={item.path} />)}
        </SideMenu>
      </Aside>
    </Section>
  );
}

Sidebar.propTypes = {};
