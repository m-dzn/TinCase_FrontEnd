import React, { Suspense } from "react";
import config from "config.json";
import { DashBoard } from "pages";
import { Route, Switch } from "react-router";
import { OAuth2Redirect } from "./OAuth2Redirect";
import { navbarRoutes } from "./siteRoutes";

const { oAuth2Redirect } = config.route;

export function RootRouter() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <Switch>
        {navbarRoutes.map(
          (item) =>
            item.page && (
              <Route
                key={item.path}
                path={item.path}
                exact={item.exact}
                component={item.page}
              />
            )
        )}

        <Route exact path={oAuth2Redirect} component={OAuth2Redirect} />
        <Route path="/" component={DashBoard} />
      </Switch>
    </Suspense>
  );
}

RootRouter.propTypes = {};
