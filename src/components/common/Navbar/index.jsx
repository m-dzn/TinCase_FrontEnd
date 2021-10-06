import React from "react";
import styled, { css } from "styled-components";
import { Avatar, Logo } from "components";
import { NavMenuItem } from "./NavMenuItem";

const Nav = styled.nav`
  ${({
    theme: {
      color,
      navbar: { height, hPad, shadow },
    },
  }) => css`
    background: ${color.surface};

    height: ${height}rem;
    padding: 0 ${hPad}rem;

    box-shadow: ${shadow};
  `}

  display: flex;
`;

const Menu = styled.ul`
  height: 100%;
  margin-left: auto;

  display: flex;

  & > li {
    height: 100%;

    ${({
      theme: {
        navbar: { fontSize, itemGap, itemHPad, avatarSize },
      },
    }) => css`
      & > * {
        font-size: ${fontSize}rem;
      }

      & + & {
        margin-left: ${itemHPad}rem;
      }

      & a,
      &.avatar {
        padding: 0 ${itemGap}rem;

        img {
          width: ${avatarSize}rem;
          height: ${avatarSize}rem;
        }
      }

      & a {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      display: flex;
      justify-content: center;
      align-items: center;
    `}
  }
`;

export function Navbar({ menus, currentUser }) {
  let menuItems = [];

  const isLoggedIn = !!currentUser;

  if (isLoggedIn) {
    const userAvatar = (
      <li key="avatar" className="avatar">
        <Avatar src={currentUser.avatar} />
      </li>
    );
    menuItems.push(userAvatar);
  }

  if (menus) {
    menuItems.push(
      menus
        .filter((item) => item.isLoggedIn === isLoggedIn)
        .map((item) => <NavMenuItem key={item.label} item={item} />)
    );
  }

  return (
    <Nav>
      <Logo />
      <Menu>{menuItems}</Menu>
    </Nav>
  );
}

Navbar.propTypes = {};
