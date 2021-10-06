import React, { useEffect } from "react";
import config from "config.json";
import { GlobalStyles, themes } from "styles";
import { ThemeProvider } from "styled-components";
import { RootRouter } from "routes";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "modules/auth";

const { ACCESS_TOKEN } = config.const;

export function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(({ auth }) => auth.currentUser);

  useEffect(() => {
    if (!currentUser && localStorage.getItem(ACCESS_TOKEN)) {
      dispatch(authActions.getCurrentUser());
    }
  }, [currentUser]);

  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyles />
      <RootRouter />
    </ThemeProvider>
  );
}

App.propTypes = {};
