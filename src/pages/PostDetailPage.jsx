import React, { useCallback, useEffect } from "react";
import config from "config.json";
import { ContentsLayout, PostViewer, PostDetailButtonBox } from "components";
import { postActions } from "modules/post";
import { useSelector, useDispatch } from "react-redux";
import { history } from "lib/history";
import styled from "styled-components";

const { postListPage } = config.route;

const PostFooter = styled.footer`
  display: flex;
  flex-direction: column;
`;

const HeaderSubInfoBox = styled.div`
  margin-top: 0.5rem;

  display: flex;
  align-items: center;
`;

const PostNav = styled.div`
  height: 7rem;
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
  }

  a:hover,
  button:hover {
    filter: brightness(140%);
  }

  div {
    margin-left: auto;
    flex: none;
    display: flex;
    align-items: center;
  }
`;

export function PostDetailPage({ match }) {
  const dispatch = useDispatch();
  const postId = match.params.postId;
  const { currentPost, currentUser } = useSelector(({ auth, post }) => ({
    currentPost: post.currentPost,
    currentUser: auth.currentUser,
  }));
  const query = `?postId=${postId}&${location.search.substring(1)}`;

  const isOwner =
    currentPost && currentUser && currentPost.writerId === currentUser.id; // 자바 null 체크를 JS에서는 한 줄로 간단히 쓸 수 있다

  const onClickRemove = useCallback(() => {
    dispatch(postActions.remove(postId));
    history.push(postListPage);
  }, [postId]);

  useEffect(() => {
    if (postId) {
      dispatch(postActions.fetchById(postId));
    }
  }, [postId]);

  if (!currentPost) return <div>로딩 중</div>;

  return (
    <ContentsLayout>
      <PostViewer post={currentPost} />
      <PostDetailButtonBox
        query={query}
        onClickRemove={onClickRemove}
        isOwner={isOwner}
      />
      <PostFooter>
        <HeaderSubInfoBox>
          {/* <TransparentButton>
            <CopyToClipboard
              text={postUrl}
              onCopy={() => alert("주소가 복사되었습니다.")}
            >
              <MdContentCopy />
            </CopyToClipboard>
          </TransparentButton> */}
          {/* <p>{postUrl}</p> */}
        </HeaderSubInfoBox>
      </PostFooter>
    </ContentsLayout>
  );
}

PostDetailPage.propTypes = {};
