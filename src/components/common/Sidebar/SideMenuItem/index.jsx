import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Item = styled.li`
  ${({
    theme: {
      color,
      sidebar: { width: size },
    },
  }) => css`
    width: ${size}rem;
    height: ${size}rem;

    &,
    & a {
      color: ${color.textSecondary};
    }
    &,
    & svg {
      font-size: ${size * 0.4}rem;
    }

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export function SideMenuItem({ item, ...rest }) {
  const { path, label, icon: Icon } = item;
  return (
    <Item>
      <Link to={path} {...rest}>
        {Icon && <Icon />}
        {/*label*/}
      </Link>
    </Item>
  );
}

SideMenuItem.propTypes = {
  size: Number,
};
