import React, { useCallback, useEffect } from "react";
import config from "config.json";
import { ContentsLayout, PostViewer } from "components";
import { postActions } from "modules/post";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const { postEditPage } = config.route;

export function PostDetailPage({ match }) {
  const dispatch = useDispatch();
  const postId = match.params.postId;
  const { currentPost, currentUser } = useSelector(({ auth, post }) => ({
    currentPost: post.currentPost,
    currentUser: auth.currentUser,
  }));

  const isOwner =
    currentPost && currentUser && currentPost.writerId === currentUser.id; // 자바 null 체크를 JS에서는 한 줄로 간단히 쓸 수 있다

  const onClickRemove = useCallback(() => {
    dispatch(postActions.remove(postId));
  }, [postId]);

  useEffect(() => {
    if (postId) {
      dispatch(postActions.fetchById(postId));
    }
  }, [postId]);

  if (!currentPost) return <div>로딩 중</div>;

  return (
    <ContentsLayout title={currentPost.title}>
      <PostViewer post={currentPost} />
      <div>
        {
          <Link
            to={{
              pathname: postEditPage,
              state: {
                currentPost,
              },
            }}
          >
            수정
          </Link>
        }
        {<button onClick={onClickRemove}>삭제</button>}
      </div>
    </ContentsLayout>
  );
}

PostDetailPage.propTypes = {};
