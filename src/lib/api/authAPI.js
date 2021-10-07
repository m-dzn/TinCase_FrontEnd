import { userClient } from "lib/api";
import config from "config.json";
import { authHeader } from "./client";

const { authMapping, ACCESS_TOKEN } = {
  authMapping: config.api.authMapping,
  ACCESS_TOKEN: config.const.ACCESS_TOKEN,
};

export async function join({ joinForm, redirectUrl }) {
  let response = await userClient.post(`${authMapping}/join`, joinForm);

  response.redirectUrl = redirectUrl;

  return response;
}

export async function login({ loginForm, redirectUrl }) {
  let response = await userClient.post(`${authMapping}/login`, loginForm);

  localStorage.setItem(ACCESS_TOKEN, response.headers[ACCESS_TOKEN]);

  response.redirectUrl = redirectUrl;

  return response;
}

export async function getCurrentUser() {
  return userClient.get(`${authMapping}/me`, authHeader());
}
