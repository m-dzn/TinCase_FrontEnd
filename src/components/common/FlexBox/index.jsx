import React from "react";
import styled, { css } from "styled-components";

const Box = styled.div`
  display: flex;
  width: 100%;
  ${({ direction }) => css`
    flex-direction: ${direction};
  `}
`;

export function FlexBox({ column, children, ...rest }) {
  return (
    <Box direction={column ? "column" : "row"} {...rest}>
      {children}
    </Box>
  );
}

FlexBox.propTypes = {};
