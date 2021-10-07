import { tokens, palette } from "./tokens";

export const themes = {
  light: {
    ...tokens,
    color: {
      primary: palette.primary,
      highlight: "#20BDA1",
      background: palette.gray[100],
      surface: palette.white,
      gray: palette.gray[500],
      text: palette.black,
      textPrimary: palette.white,
      textSecondary: palette.white,
      textGray: palette.gray[500],
    },
  },
  dark: {
    ...tokens,
  },
};
