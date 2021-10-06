import React, { useCallback } from "react";
import config from "config.json";
import { SiteLayout } from "components";
import { Redirect, Route, Switch } from "react-router";
import { sidebarRoutes, navbarRoutes, pages } from "routes";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "modules/auth";
import { UserPage } from "pages";
import PrivateRoute from "routes/PrivateRoute";
import { history } from "lib/history";

const { route } = config;

export function DashBoard(props) {
  const dispatch = useDispatch();
  const currentUser = useSelector(({ auth }) => auth.currentUser);

  const onClickLogout = useCallback(() => {
    if (confirm(config.msg.logout)) {
      dispatch(authActions.logout());
      history.push("/");
    }
  }, []);

  const navbarMenus = navbarRoutes.concat([
    {
      label: "회원정보",
      icon: null,
      isLoggedIn: true,
      path: route.userPage,
      page: UserPage,
    },
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
        {sidebarRoutes
          .concat(pages)
          .map((item) =>
            item.isPrivate ? (
              <PrivateRoute
                key={item.path}
                path={item.path}
                exact={item.exact}
                component={item.page}
              />
            ) : (
              <Route
                key={item.path}
                path={item.path}
                exact={item.exact}
                component={item.page}
              />
            )
          )}
        ;
        <Redirect to="/" />
      </Switch>
    </SiteLayout>
  );
}

DashBoard.propTypes = {};
