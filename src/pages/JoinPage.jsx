import React, { useCallback, useState } from "react";
import { AuthLayout, Input } from "components";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { authActions } from "modules/auth";

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
  nickname: "",
};

export function JoinPage({ location }) {
  const dispatch = useDispatch();
  const [joinForm, setJoinForm] = useState(initState);

  const from = location.state?.from;

  const onChange = useCallback((event) => {
    event.preventDefault();

    const { name, value } = event.target;

    setJoinForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const onSubmit = useCallback((event, form) => {
    event.preventDefault();
    dispatch(authActions.join(form, from));
  }, []);

  return (
    <AuthLayout>
      회원가입
      <Form onSubmit={(event) => onSubmit(event, joinForm)}>
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
        <Input
          name="nickname"
          type="text"
          placeholder="닉네임"
          onChange={onChange}
        />
        <button>회원가입</button>
        <Link to="/login">로그인 페이지로 이동</Link>
      </Form>
    </AuthLayout>
  );
}

JoinPage.propTypes = {};
