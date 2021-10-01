import { globalTokens, aliasTokens } from "./tokens";

export const themes = {
  light: {
    ...aliasTokens,
    color: {
      background: tokens.color.gray[100],
      surface: tokens.color.white,
      fontPrimary: tokens.color.black,
      fontSecondary: tokens.color.white,
    },
  },
  dark: {
    ...aliasTokens,
  },
};
