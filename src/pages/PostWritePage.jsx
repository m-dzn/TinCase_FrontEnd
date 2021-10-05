import React, { useCallback, useEffect, useState } from "react";
import { ContentsLayout, PostEditor } from "components";
import config from "config.json";
import { history } from "lib/history";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "modules/post";

const { postPage, loginPage } = config.route;

const initForm = {
  title: "",
  writerId: "",
  content: "",
};

export function PostWritePage({ location }) {
  const dispatch = useDispatch();
  const [newPostForm, setNewPostForm] = useState(initForm);
  const currentUser = useSelector(({ auth }) => auth.currentUser);

  const { title, writerId, content } = newPostForm;

  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    setNewPostForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(postActions.write(newPostForm));
    },
    [newPostForm]
  );

  const onClickList = useCallback((event) => {
    event.preventDefault();
    history.push(postPage);
  }, []);

  useEffect(() => {
    if (currentUser && currentUser.id) {
      setNewPostForm((prev) => ({
        ...prev,
        writerId: currentUser.id,
      }));
    } else {
      history.replace({
        pathname: loginPage,
        state: { from: location.pathname },
      });
    }
  }, [currentUser]);

  return (
    <ContentsLayout title="글 작성">
      <div>
        <PostEditor
          title={title}
          writerId={writerId}
          content={content}
          onChange={onChange}
          onSubmit={onSubmit}
          onClickList={onClickList}
        />
      </div>
    </ContentsLayout>
  );
}

PostWritePage.propTypes = {};
