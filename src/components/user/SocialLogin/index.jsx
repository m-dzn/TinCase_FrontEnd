import React from "react";
import config from "config.json";
import styled, { css } from "styled-components";
import google from "assets/images/google_logo.png";
import naver from "assets/images/naver_logo.png";
import kakao from "assets/images/kakao_logo.png";
import { withRouter } from "react-router";

const { baseUrl, userApi } = config.api;
const { GOOGLE, NAVER, KAKAO, FROM } = config.const;
const { oAuth2Redirect } = config.route;

const getOAuth2ProviderUrl = (provider) =>
  `${userApi}/oauth2/authorize/${provider}?redirect_uri=${baseUrl}${oAuth2Redirect}`;

const Wrapper = styled.div``;

const LinkButton = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 48px;

  font-size: 1.6rem;
  font-weight: bold;

  img {
    width: ${48 * 0.9}px;
    height: ${48 * 0.9}px;
    object-fit: cover;

    position: absolute;
    left: 10px;
  }

  &:hover {
    filter: brightness(90%);
  }

  ${({ bgColor, fontColor }) => css`
    background: ${bgColor};
    color: ${fontColor};
  `}
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;

  & > a + a {
    margin-top: 1.6rem;
  }
`;

export const SocialLogin = withRouter(function ({ type, location }) {
  const msg = type === "로그인" ? type : "가입하기";

  const socialAuthMetaInfo = [
    {
      provider: "google",
      text: `구글 아이디로 ${msg}`,
      url: getOAuth2ProviderUrl(GOOGLE),
      logo: google,
      bgColor: "#fff",
      fontColor: "#525252",
    },
    {
      provider: "naver",
      text: `네이버 아이디로 ${msg}`,
      url: getOAuth2ProviderUrl(NAVER),
      logo: naver,
      bgColor: "#16c900",
      fontColor: "#fff",
    },
    {
      provider: "kakao",
      text: `카카오 아이디로 ${msg}`,
      url: getOAuth2ProviderUrl(KAKAO),
      logo: kakao,
      bgColor: "#fddc3f",
      fontColor: "#342525",
    },
  ];

  const onClickSocialLogin = () => {
    if (location.state && location.state.from) {
      const from = location.state.from;
      localStorage.setItem(FROM, from.pathname + from.search);
    }
  };

  return (
    <Wrapper>
      <ButtonBox>
        {socialAuthMetaInfo &&
          socialAuthMetaInfo.map((item) => (
            <LinkButton
              key={item.provider}
              href={item.url}
              bgColor={item.bgColor}
              fontColor={item.fontColor}
              onClick={onClickSocialLogin}
            >
              <img src={item.logo} alt={item.provider} />
              <div>{item.text}</div>
            </LinkButton>
          ))}
      </ButtonBox>
    </Wrapper>
  );
});
