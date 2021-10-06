import React, { useCallback, useEffect, useState } from "react";
import { ContentsLayout, PostEditor, PostEditorButtonBox } from "components";
import config from "config.json";
import { history } from "lib/history";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "modules/post";
import qs from "query-string";

const { postListPage } = config.route;
const { EDIT_MODE } = config.const;

const initForm = {
  title: "",
  content: "",
};

export function PostEditPage({ location }) {
  const query = qs.parse(location.search);
  const postId = query.postId;

  const dispatch = useDispatch();
  const [editPostForm, setEditPostForm] = useState(initForm);
  const { currentUser, currentPost } = useSelector(({ auth, post }) => ({
    currentUser: auth.currentUser,
    currentPost: post.currentPost,
  }));

  useEffect(() => {
    if (currentPost) {
      setEditPostForm((prev) => ({
        ...prev,
        title: currentPost.title,
        content: currentPost.content,
      }));
    } else if (postId) {
      dispatch(postActions.fetchById(postId));
    }
  }, [currentPost, postId]);

  useEffect(() => {
    if (currentUser) {
      setEditPostForm((prev) => ({
        ...prev,
        writerId: currentUser.id,
      }));
    }
  }, [currentUser]);

  const { title, content } = editPostForm;

  const onChange = useCallback((name, value) => {
    setEditPostForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(
        postActions.edit(postId, editPostForm, `${postListPage}/${postId}`)
      );
    },
    [postId, editPostForm]
  );

  const onClickList = useCallback((event) => {
    event.preventDefault();
    history.push({ pathname: postListPage, search: location.search });
  }, []);

  if (!currentPost) return <div>로딩 중</div>;

  return (
    <ContentsLayout title="글 수정">
      <div>
        <PostEditor title={title} content={content} onChange={onChange} />
        <PostEditorButtonBox
          type={EDIT_MODE}
          onSubmit={onSubmit}
          onClickList={onClickList}
        />
      </div>
    </ContentsLayout>
  );
}

PostEditPage.propTypes = {};
