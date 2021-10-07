import React from "react";
import config from "config.json";
import {
  Input,
  AuthFormLayout,
  SocialLogin,
  CustomLink,
  SimpleButton,
  Hr,
} from "components";

const { joinPage } = config.route;

export function LoginForm({ title, form, onChange, onSubmit }) {
  return (
    <AuthFormLayout title={title}>
      <Input
        name="email"
        type="email"
        placeholder="이메일"
        value={form.email}
        onChange={onChange}
      />
      <Input
        name="password"
        type="password"
        placeholder="비밀번호"
        value={form.password}
        onChange={onChange}
      />
      <SimpleButton primary wide onClick={onSubmit}>
        로그인
      </SimpleButton>
      <Hr />
      <SocialLogin type={title} />
      <CustomLink to={joinPage}>회원가입 페이지로 이동</CustomLink>
    </AuthFormLayout>
  );
}

LoginForm.propTypes = {};
