import React from "react";
import styled from "styled-components";
import { PostLikeBox } from "./PostLikeBox";

const PostTitle = styled.h1``;

const PostBody = styled.section`
  width: 100%;
`;

const PostContents = styled.div`
  min-height: 20rem;
  padding: 4rem 2rem;
`;

export function PostViewer({ post: currentPost, onClickLike }) {
  return (
    <div>
      <PostTitle>{currentPost.title}</PostTitle>
      <PostBody>
        <PostContents
          className="ql-editor"
          dangerouslySetInnerHTML={{ __html: currentPost.content }}
        />
        <PostLikeBox
          style={{ margin: "2rem auto" }}
          like={currentPost.like}
          onClick={onClickLike}
        />
      </PostBody>
    </div>
  );
}

PostViewer.propTypes = {};
