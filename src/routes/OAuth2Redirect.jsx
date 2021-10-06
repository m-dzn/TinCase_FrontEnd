import React, { useEffect } from "react";
import config from "config.json";
import qs from "query-string";
import { Redirect } from "react-router";
import { authActions } from "modules/auth";
import { useSelector, useDispatch } from "react-redux";
import { history } from "lib/history";

const { ACCESS_TOKEN, FROM } = config.const;

export function OAuth2Redirect({ location }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(({ auth }) => auth.currentUser);
  const query = qs.parse(location.search);

  let component = <div>로그인 중</div>;

  useEffect(async () => {
    dispatch(authActions.getCurrentUser());

    if (query.token) {
      localStorage.setItem(ACCESS_TOKEN, query.token && query.token.toString());
    } else {
      if (query.error) {
        alert(query.error);
      }
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      const from = localStorage.getItem(FROM);
      history.push(from || "/");
      localStorage.removeItem(FROM);
    }
  }, [currentUser]);

  return component;
}

OAuth2Redirect.propTypes = {};
