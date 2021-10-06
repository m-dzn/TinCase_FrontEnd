import { authHeader, userClient } from "lib/api";
import config from "config.json";

const userMapping = config.api.userMapping;

export async function updateUser(updateForm) {
  return userClient.put(`${userMapping}`, updateForm, authHeader());
}
