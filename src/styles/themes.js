import { tokens, palette } from "./tokens";

export const themes = {
  light: {
    ...tokens,
    color: {
      background: palette.gray[100],
      surface: palette.white,
      fontPrimary: palette.black,
      fontSecondary: palette.white,
    },
  },
  dark: {
    ...tokens,
  },
};
