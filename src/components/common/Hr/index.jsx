import React from "react";
import styled, { css } from "styled-components";

const StyledHr = styled.div`
  ${({
    theme: {
      hr: { widthPercent, height, color },
    },
  }) => css`
    width: ${widthPercent}%;
    height: ${height}rem;
    background: ${color};
  `}
  margin: auto;
`;

export function Hr() {
  return <StyledHr />;
}
