import React, { useCallback, useState } from "react";
import { AuthLayout, Input } from "components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import config from "config.json";
import { authActions } from "modules/auth";
import { useDispatch } from "react-redux";

const Form = styled.form`
  width: 625px;
  margin-top: 40px;

  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 10px;
  }
`;

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

  const onSubmit = useCallback(
    async (event, form) => {
      event.preventDefault();
      dispatch(authActions.login(form, from));
    },
    [from]
  );

  return (
    <AuthLayout>
      로그인
      <Form onSubmit={(event) => onSubmit(event, loginForm)}>
        <Input
          name="email"
          type="email"
          placeholder="이메일"
          onChange={onChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={onChange}
        />
        <button>로그인</button>
        <Link to={config.route.joinPage}>회원가입 페이지로 이동</Link>
      </Form>
    </AuthLayout>
  );
}

LoginPage.propTypes = {};
