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
  const response = await userClient.get(`${postMapping}/${id}`, authHeader());
  console.log(response);
  return response;
}

export async function updatePost({ id, editPostForm }) {
  let response = await userClient.patch(
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

export async function like({ postId }) {
  return userClient.post(`${postMapping}/${postId}/like`, null, authHeader());
}

export async function unlike({ postId }) {
  return userClient.delete(`${postMapping}/${postId}/unlike`, authHeader());
}
