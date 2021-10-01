const unit = 0.4;

const shadows = {
  level1: `0 0.3rem 0.2rem rgba(0,0,0, 0.3)`,
};

export const globalTokens = {
  unit,
  shadows,
  color: {
    red: "#f9320c",
    green: "#3ac569",
    yellow: "#f8ca00",
    blue: "#4f86c6",
    gray: {
      100: "#f5f5f5",
      200: "#eee",
      300: "#d5d5d5",
      400: "#bdbdbd",
      500: "#999",
      600: "#767676",
      700: "#616161",
      800: "#4e4e4e",
      900: "#333",
    },
    white: "#fff",
    black: "#000",
  },
};

export const aliasTokens = {
  contentsLayout: {
    minHeight: "100vh",
    mainVPad: unit * 10,
    mainHPad: unit * 10,
  },
  navbar: {
    height: unit * 10,
    hPad: unit * 12,
    shadow: shadows.level1,
  },
  sidebar: {
    width: unit * 10,
    background: tokens.color.gray[900],
  },
};
