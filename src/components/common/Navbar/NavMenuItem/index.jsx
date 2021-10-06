import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { css } from "styled-components";

export const NavMenuItem = withRouter(function ({ item, location, children }) {
  const { path, label, onClick } = item;

  let elem;

  if (!children && path) {
    elem = (
      <Link
        to={{
          pathname: path,
          state: {
            from: location,
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

  return <li>{children || elem}</li>;
});

NavMenuItem.propTypes = {};
