import React from "react";
import { GlobalStyles, themes } from "styles";
import { ThemeProvider } from "styled-components";
import { RootRouter } from "routes";

export function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyles />
      <RootRouter />
    </ThemeProvider>
  );
}

App.propTypes = {};
