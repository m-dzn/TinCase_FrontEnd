import React from "react";
import config from "config.json";
import {
  Input,
  PostCode,
  AuthFormLayout,
  CustomLink,
  SocialLogin,
  SimpleButton,
  Hr,
} from "components";

const { loginPage } = config.route;

export function JoinForm({ title, form, onChange, onSubmit }) {
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
      <Input
        name="confirmPassword"
        type="password"
        placeholder="비밀번호 확인"
        value={form.confirmPassword}
        onChange={onChange}
      />
      <Input
        name="nickname"
        type="text"
        placeholder="닉네임"
        value={form.nickname}
        onChange={onChange}
      />
      <PostCode
        address={form.address}
        addressDetail={form.addressDetail}
        onChange={onChange}
      />
      <SimpleButton primary wide onClick={onSubmit}>
        회원가입
      </SimpleButton>
      <Hr />
      <SocialLogin type={title} />
      <CustomLink to={loginPage}>로그인 페이지로 이동</CustomLink>
    </AuthFormLayout>
  );
}

JoinForm.propTypes = {};
