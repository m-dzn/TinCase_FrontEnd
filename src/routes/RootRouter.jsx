import React, { Suspense } from "react";
import { Route, Switch } from "react-router";
import { DashBoard } from "pages";
import { navbarMenus } from "./siteRoutes";

export function RootRouter() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <Switch>
        {navbarMenus.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            exact={item.exact}
            component={item.page}
          />
        ))}
        <Route path="/" component={DashBoard} />
      </Switch>
    </Suspense>
  );
}

RootRouter.propTypes = {};
