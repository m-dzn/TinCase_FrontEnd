import { authHeader, userClient } from "lib/api";
import config from "config.json";

const postMapping = config.api.postMapping;
const { postListPage } = config.route;

export async function writePost(newPostForm) {
  let response = await userClient.post(postMapping, newPostForm, authHeader());

  response.redirectUrl = `${postListPage}/${response.data}`;
  console.log(response);

  return response;
}

export async function readPost({ id }) {
  return userClient.get(`${postMapping}/${id}`);
}

export async function updatePost({ id, editPostForm }) {
  let response = await userClient.put(
    `${postMapping}/${id}`,
    editPostForm,
    authHeader()
  );

  response.redirectUrl = `${postListPage}/${id}`;

  return response;
}

export async function removePost({ id }) {
  return userClient.delete(`${postMapping}/${id}`);
}

export async function getPostList({ pageNum, pageSize }) {
  return userClient.get(`${postMapping}`, { params: { pageNum, pageSize } });
}
