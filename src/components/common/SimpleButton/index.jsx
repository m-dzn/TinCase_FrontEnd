import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  ${({
    primary,
    bgColor,
    fontColor,
    wide,
    theme: {
      button: {
        defaultBgColor,
        md: { vPad, hPadRatio, radius },
      },
      color,
      fontSize,
      fontWeight,
    },
  }) => css`
    background: ${(primary && color.primary) || bgColor || defaultBgColor};
    color: ${(primary && color.textPrimary) || fontColor};
    ${wide !== 1 && "width: 100%;"}
    border-radius: ${radius * wide}rem;

    padding: ${vPad * wide}rem ${vPad * hPadRatio * wide}rem;

    font-size: ${fontSize.sm}rem;
    font-weight: ${fontWeight.bold};
  `}
`;

export function SimpleButton({ bgColor, children, wide, ...rest }) {
  return (
    <StyledButton bgColor={bgColor} wide={wide ? 1.8 : 1} {...rest}>
      {children}
    </StyledButton>
  );
}

SimpleButton.propTypes = {};
