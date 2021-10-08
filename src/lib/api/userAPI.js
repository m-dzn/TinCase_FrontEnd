import { authHeader, userClient } from "lib/api";
import config from "config.json";

const { authMapping, userMapping } = config.api;

const { ACCESS_TOKEN } = config.const;

export async function updateUser(updateForm) {
  return userClient.patch(`${userMapping}`, updateForm, authHeader());
}

export async function updateAvatar({ avatarFile }) {
  return userClient.patch(`${userMapping}/me/avatar`, avatarFile, authHeader());
}

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
