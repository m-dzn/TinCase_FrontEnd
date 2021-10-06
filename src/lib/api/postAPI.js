import { authHeader, userClient } from "lib/api";
import config from "config.json";

const postMapping = config.api.postMapping;

export async function writePost(newPostForm) {
  return userClient.post(postMapping, newPostForm, authHeader());
}

export async function readPost({ id }) {
  return userClient.get(`${postMapping}/${id}`);
}

export async function updatePost({ id, editPostForm }) {
  return userClient.put(`${postMapping}/${id}`, editPostForm, authHeader());
}

export async function removePost({ id }) {
  return userClient.delete(`${postMapping}/${id}`);
}

export async function getPostList({ pageNum, pageSize }) {
  return userClient.get(`${postMapping}`, { params: { pageNum, pageSize } });
}
