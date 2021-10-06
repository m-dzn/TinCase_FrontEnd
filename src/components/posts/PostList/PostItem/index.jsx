import React from "react";
import config from "config.json";
import styled, { css } from "styled-components";
import { Avatar } from "components";
import { Link } from "react-router-dom";

const { postListPage } = config.route;

const Container = styled.div`
  display: flex;

  ${({
    theme: {
      postList: { vPad, hPad },
    },
  }) => css`
    padding: ${vPad}rem ${hPad}rem;
  `}
`;

const Title = styled.h6``;

const Writer = styled.div``;

export function PostItem({ post, pagination }) {
  const { pageNum, pageSize } = pagination;

  return (
    <Container>
      <div>
        <Avatar src="http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg" />
        <Writer>{post.writer}</Writer>
      </div>
      <div>
        <Title>
          <Link
            to={`${postListPage}/${post.id}?pageNum=${pageNum}&pageSize=${pageSize}`}
          >
            {post.title}
          </Link>
        </Title>
        <div>{post.createdAt}</div>
      </div>
      <div style={{ display: "flex" }}>
        <div>{post.viewCnt}</div>
        <div>{post.replyCnt}</div>
        <div>{post.likeCnt}</div>
      </div>
    </Container>
  );
}

PostItem.propTypes = {};
