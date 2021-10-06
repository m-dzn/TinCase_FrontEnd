import React from "react";
import styled from "styled-components";
import { PostItem } from "./PostItem/index";

const List = styled.div``;

export function PostList({ posts, pagination }) {
  return (
    <List>
      {posts &&
        posts.map((post) => (
          <PostItem post={post} key={post.id} pagination={pagination} />
        ))}
    </List>
  );
}

PostList.propTypes = {};
