import React, { useEffect } from "react";
import config from "config.json";
import { Redirect, Route } from "react-router-dom";
import { history } from "lib/history";

const { loginPage } = config.route;
const { ACCESS_TOKEN } = config.const;

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  return (
    <Route
      location={location}
      {...rest}
      render={(props) => {
        if (localStorage.getItem(ACCESS_TOKEN)) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: loginPage,
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
