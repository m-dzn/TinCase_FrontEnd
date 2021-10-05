import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContentsLayout, PostList, Pagination } from "components";
import { Link } from "react-router-dom";
import config from "config.json";
import { postActions } from "modules/post";
import queryString from "query-string";

const postPage = config.route.postPage;

export function PostListPage({ location }) {
  const query = queryString.parse(location.search);
  const pageNum = Number(query.pageNum || 1);

  const dispatch = useDispatch();
  const {
    posts,
    pagination: { pageSize, totalPages },
  } = useSelector(({ post }) => ({
    posts: post.posts,
    pagination: post.pagination,
  }));

  useEffect(() => {
    dispatch(postActions.fetchPostList(pageNum, pageSize));
  }, [pageNum, pageSize]);

  return (
    <ContentsLayout title="포스트">
      <PostList posts={posts} />
      <Link
        to={{
          pathname: `${postPage}/write`,
        }}
      >
        글쓰기
      </Link>
      <Pagination
        pageNum={pageNum}
        pageSize={pageSize}
        totalPages={totalPages}
      />
    </ContentsLayout>
  );
}

PostListPage.propTypes = {};
