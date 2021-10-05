import { userClient } from "lib/api";
import config from "config.json";

const authMapping = config.api.authMapping;

export async function join({ joinForm }) {
  return userClient.post(`${authMapping}/join`, joinForm);
}

export async function login({ loginForm }) {
  return userClient.post(`${authMapping}/login`, loginForm);
}
