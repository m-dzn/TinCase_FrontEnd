import axios from "axios";
import config from "config.json";

export const userClient = axios.create({
  baseURL: config.api.userApi,
});

export const authHeader = () => {
  const token = localStorage.getItem(config.accessToken);
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
