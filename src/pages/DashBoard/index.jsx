import React from "react";
import { Route, Switch } from "react-router";
import { sidebarMenus } from "routes";

export function DashBoard(props) {
  return (
    <Switch>
      {sidebarMenus.map((item) => (
        <Route
          key={item.path}
          path={item.path}
          exact={item.exact}
          component={item.page}
        />
      ))}
    </Switch>
  );
}

DashBoard.propTypes = {};
