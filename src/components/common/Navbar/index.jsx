import React from "react";
import styled, { css } from "styled-components";
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

const Logo = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
`;

const Menu = styled.ul`
  height: 100%;
  margin-left: auto;

  display: flex;
`;

export function Navbar({ menus }) {
  return (
    <Nav>
      <Logo>TINCASE</Logo>
      <Menu>
        {menus &&
          menus.map((item) => <NavMenuItem key={item.path} item={item} />)}
      </Menu>
    </Nav>
  );
}

Navbar.propTypes = {};
