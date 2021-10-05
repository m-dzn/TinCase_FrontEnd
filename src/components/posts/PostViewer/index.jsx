import React from "react";

export function PostViewer({ post }) {
  return (
    <div>
      <div>{post.title}</div>
      <div>{post.content}</div>
    </div>
  );
}

PostViewer.propTypes = {};
