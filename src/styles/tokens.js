const unit = 0.4;

const shadows = {
  level1: `0 0.15rem 0.3rem rgba(0,0,0, 0.2)`,
};

export const palette = {
  primary: "#5B5759",
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
};

const fontSize = {
  h1: 4,
  h2: 3.6,
  h3: 3.2,
  h4: 2.8,
  h5: 2.4,
  h6: 2,
  xl: 1.8,
  lg: 1.6,
  md: 1.5,
  sm: 1.4,
  xs: 1.3,
};

const fontWeight = {
  thin: 400,
  normal: 600,
  bold: 700,
  black: 800,
};

const navAvatarSize = 2.4;

export const aliasTokens = {
  siteLayout: {
    minHeight: "100vh",
    mainVPad: unit * 10,
    mainHPad: unit * 10,
  },
  contentsLayout: {
    vPad: unit * 12,
    hPad: unit * 14,
    headerVPad: unit * 8,
    headerHPad: 0,
  },
  navbar: {
    height: unit * 10,
    hPad: unit * 12,
    shadow: shadows.level1,
    fontSize: fontSize.xs,
    itemGap: unit * 2,
    itemHPad: unit * 2,
    avatarSize: navAvatarSize,
  },
  sidebar: {
    width: unit * 10,
    background: palette.gray[900],
    avatarSize: navAvatarSize,
  },
  postList: {
    vPad: unit * 6,
    hPad: unit * 4,
  },
  authForm: {
    width: unit * 100,
    inputGap: unit * 6,
    marginBottom: unit * 4,
  },
  input: {
    height: unit * 8,
    vPad: unit * 2,
  },
  postCode: {
    iconRatio: 0.7,
    iconMarginRight: 0.4,
  },
  profileImgBox: {
    iconSize: 1.75,
  },
  button: {
    defaultBgColor: palette.gray[300],
    md: {
      vPad: unit * 1.5,
      hPadRatio: 1.75,
      radius: unit,
    },
  },
  hr: {
    widthPercent: 90,
    height: 0.05,
    color: palette.gray[500],
  },
};

export const tokens = {
  unit,
  fontSize,
  fontWeight,
  shadows,
  ...aliasTokens,
};
