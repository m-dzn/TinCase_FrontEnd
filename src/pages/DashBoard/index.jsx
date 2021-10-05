import React, { useCallback } from "react";
import config from "config.json";
import { SiteLayout } from "components";
import { Redirect, Route, Switch } from "react-router";
import { sidebarRoutes, navbarRoutes, pages } from "routes";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "modules/auth";

export function DashBoard(props) {
  const dispatch = useDispatch();
  const currentUser = useSelector(({ auth }) => auth.currentUser);

  const onClickLogout = useCallback(() => {
    if (confirm(config.msg.logout)) {
      dispatch(authActions.logout());
    }
  }, []);

  const navbarMenus = navbarRoutes.concat([
    {
      label: "로그아웃",
      icon: null,
      isLoggedIn: true,
      onClick: onClickLogout,
    },
  ]);

  return (
    <SiteLayout
      currentUser={currentUser}
      sidebarMenus={sidebarRoutes}
      navbarMenus={navbarMenus}
    >
      <Switch>
        {sidebarRoutes.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            exact={item.exact}
            component={item.page}
          />
        ))}

        {pages.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            exact={item.exact}
            component={item.page}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    </SiteLayout>
  );
}

DashBoard.propTypes = {};
