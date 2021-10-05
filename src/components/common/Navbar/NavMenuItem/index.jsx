import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { css } from "styled-components";

const MenuItem = styled.li`
  height: 100%;

  ${({
    theme: {
      navbar: { fontSize, itemGap, itemHPad },
    },
  }) => css`
    font-size: ${fontSize}rem;

    & + & {
      margin-left: ${itemHPad}rem;
    }

    & a {
      padding: 0 ${itemGap}rem;

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
`;

export const NavMenuItem = withRouter(function ({ item, location }) {
  const { path, label, onClick } = item;

  let elem;

  if (path) {
    elem = (
      <Link
        to={{
          pathname: path,
          state: {
            from: location.pathname,
          },
        }}
      >
        {label}
      </Link>
    );
  } else if (onClick) {
    elem = <button onClick={onClick}>{label}</button>;
  } else {
    elem = label;
  }

  return <MenuItem>{elem}</MenuItem>;
});

NavMenuItem.propTypes = {};
