import React, { useCallback, useEffect, useState } from "react";
import { ContentsLayout, PostEditor } from "components";
import config from "config.json";
import { history } from "lib/history";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "modules/post";

const { postPage, loginPage } = config.route;

const initForm = {
  title: "",
  content: "",
};

export function PostEditPage({ location }) {
  const currentPost = location.state?.currentPost;

  const dispatch = useDispatch();
  const [editPostForm, setEditPostForm] = useState(currentPost || initForm);
  const currentUser = useSelector(({ auth }) => auth.currentUser);

  const { title, content } = editPostForm;

  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    setEditPostForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(postActions.write(editPostForm));
    },
    [editPostForm]
  );

  const onClickList = useCallback((event) => {
    event.preventDefault();
    history.push(postPage);
  }, []);

  useEffect(() => {
    if (!currentUser)
      history.replace({
        pathname: loginPage,
        state: { from: location.pathname, currentPost: currentPost },
      });
    // else if (!currentPost) history.goBack();

    if (currentUser && currentUser.id) {
      setEditPostForm((prev) => ({
        ...prev,
        writerId: currentUser.id,
      }));
    }
  }, [currentPost, currentUser]);

  if (!currentPost) return <div></div>;

  return (
    <ContentsLayout title="글 수정">
      <div>
        <PostEditor
          title={title}
          content={content}
          onChange={onChange}
          onSubmit={onSubmit}
          onClickList={onClickList}
        />
      </div>
    </ContentsLayout>
  );
}

PostEditPage.propTypes = {};
