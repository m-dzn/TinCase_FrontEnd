import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  &:hover {
    color: ${({ theme: { color } }) => color.primary};
  }
`;

export function CustomLink({ children, ...rest }) {
  return (
    <Container>
      <StyledLink {...rest}>{children}</StyledLink>
    </Container>
  );
}

CustomLink.propTypes = {};
