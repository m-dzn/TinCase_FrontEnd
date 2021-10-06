import axios from "axios";
import config from "config.json";

const { ACCESS_TOKEN } = config.const;

export const userClient = axios.create({
  baseURL: config.api.userApi,
});

export const authHeader = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
