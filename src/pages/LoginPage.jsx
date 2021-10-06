import React, { useCallback, useState } from "react";
import { AuthLayout, LoginForm } from "components";
import { authActions } from "modules/auth";
import { useDispatch } from "react-redux";

const initState = {
  email: "",
  password: "",
};

export function LoginPage({ location }) {
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState(initState);

  const from = location.state?.from;

  const onChange = useCallback((event) => {
    event.preventDefault();

    const { name, value } = event.target;

    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const onSubmit = useCallback(() => {
    dispatch(authActions.login(loginForm, from?.pathname || "/"));
  }, [loginForm, from]);

  return (
    <AuthLayout>
      <LoginForm
        title="로그인"
        form={loginForm}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </AuthLayout>
  );
}

LoginPage.propTypes = {};
