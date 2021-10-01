import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function NavMenuItem({ item }) {
  const { path, label } = item;

  const elem = path ? <Link to={path}>{label}</Link> : label;

  return <MenuItem>{elem}</MenuItem>;
}

NavMenuItem.propTypes = {};
