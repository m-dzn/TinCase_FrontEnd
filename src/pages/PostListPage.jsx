import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContentsLayout, PostList, Pagination } from "components";
import { Link } from "react-router-dom";
import config from "config.json";
import { postActions } from "modules/post";
import queryString from "query-string";
import { SimpleButton } from "components/common/SimpleButton/index";
import styled from "styled-components";

const { postListPage } = config.route;

const ButtonBox = styled.div`
  display: flex;
  & > * {
    margin-left: auto;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

export function PostListPage({ location }) {
  const query = queryString.parse(location.search);
  const pageNum = Number(query.pageNum || 1);

  const dispatch = useDispatch();
  const { posts, pagination } = useSelector(({ post }) => ({
    posts: post.posts,
    pagination: post.pagination,
  }));

  const { pageSize, totalPages } = pagination;

  useEffect(() => {
    dispatch(postActions.fetchPostList(pageNum, pageSize));
  }, [pageNum, pageSize]);

  return (
    <ContentsLayout title="포스트">
      <PostList posts={posts} pagination={pagination} />
      <ButtonBox>
        <Link
          to={{
            pathname: `${postListPage}/write`,
            search: location.search,
            state: {
              from: location,
            },
          }}
        >
          <SimpleButton>글쓰기</SimpleButton>
        </Link>
      </ButtonBox>
      <Footer>
        <Pagination
          pageNum={pageNum}
          pageSize={pageSize}
          totalPages={totalPages}
        />
      </Footer>
    </ContentsLayout>
  );
}

PostListPage.propTypes = {};
