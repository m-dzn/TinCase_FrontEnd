import { createAsyncSaga } from "lib/createAsyncSaga";
import { createAction, handleActions } from "redux-actions";
import { postAPI } from "lib/api";
import { takeLatest } from "redux-saga/effects";

// 액션 타입
const FETCH_POST_LIST = {
  REQUEST: "post/FETCH_POST_LIST_REQUEST",
  SUCCESS: "post/FETCH_POST_LIST_SUCCESS",
  FAILURE: "post/FETCH_POST_LIST_FAILURE",
};
const WRITE = {
  REQUEST: "post/WRITE_REQUEST",
  SUCCESS: "post/WRITE_SUCCESS",
  FAILURE: "post/WRITE_FAILURE",
};
const EDIT = {
  REQUEST: "post/EDIT_REQUEST",
  SUCCESS: "post/EDIT_SUCCESS",
  FAILURE: "post/EDIT_FAILURE",
};
const FETCH_BY_ID = {
  REQUEST: "post/FETCH_BY_ID_REQUEST",
  SUCCESS: "post/FETCH_BY_ID_SUCCESS",
  FAILURE: "post/FETCH_BY_ID_FAILURE",
};
const REMOVE = {
  REQUEST: "post/REMOVE_REQUEST",
  SUCCESS: "post/REMOVE_SUCCESS",
  FAILURE: "post/REMOVE_FAILURE",
};
const PAGE_CHANGE = "post/PAGE_CHANGE";

// 액션 생성자
const fetchPostList = createAction(
  FETCH_POST_LIST.REQUEST,
  (pageNum = 1, pageSize = 10) => ({
    pageNum,
    pageSize,
  })
);
const write = createAction(WRITE.REQUEST, (newPostForm) => newPostForm);
const edit = createAction(EDIT.REQUEST, (id, editPostForm, redirectUrl) => ({
  id,
  editPostForm,
  redirectUrl,
}));
const fetchById = createAction(FETCH_BY_ID.REQUEST, (id) => ({ id }));
const remove = createAction(REMOVE.REQUEST, (id) => ({ id }));
const pageChange = createAction(PAGE_CHANGE, (pageNum) => ({ pageNum }));

export const postActions = {
  fetchPostList,
  write,
  edit,
  fetchById,
  remove,
  pageChange,
};

// 리덕스 사가
const fetchPostList$ = createAsyncSaga(FETCH_POST_LIST, postAPI.getPostList);
const write$ = createAsyncSaga(WRITE, postAPI.writePost);
const edit$ = createAsyncSaga(EDIT, postAPI.updatePost);
const fetchById$ = createAsyncSaga(FETCH_BY_ID, postAPI.readPost);
const remove$ = createAsyncSaga(REMOVE, postAPI.removePost);

export function* postSaga() {
  yield takeLatest(FETCH_POST_LIST.REQUEST, fetchPostList$);
  yield takeLatest(WRITE.REQUEST, write$);
  yield takeLatest(EDIT.REQUEST, edit$);
  yield takeLatest(FETCH_BY_ID.REQUEST, fetchById$);
  yield takeLatest(REMOVE.REQUEST, remove$);
}

// 초기 상태
const initState = {
  posts: [],
  pagination: {
    pageNum: 1,
    pageSize: 10,
    totalPages: 1,
    totalElements: 0,
  },
  currentPost: undefined,
};

// 리듀서
export const post = handleActions(
  {
    [FETCH_POST_LIST.REQUEST]: (state, action) => state,
    [FETCH_POST_LIST.SUCCESS]: (
      state,
      { payload: { body: posts, ...pagination } }
    ) => ({
      ...state,
      posts,
      pagination,
    }),
    [FETCH_POST_LIST.FAILURE]: (state, action) => state,
    [WRITE.REQUEST]: (state, action) => state,
    [WRITE.SUCCESS]: (state, { payload: id }) => state,
    [WRITE.FAILURE]: (state, action) => state,
    [EDIT.REQUEST]: (state, action) => state,
    [EDIT.SUCCESS]: (state, { payload: id }) => state,
    [EDIT.FAILURE]: (state, action) => state,
    [FETCH_BY_ID.REQUEST]: (state, action) => state,
    [FETCH_BY_ID.SUCCESS]: (state, { payload: currentPost }) => ({
      ...state,
      currentPost,
    }),
    [FETCH_BY_ID.FAILURE]: (state, action) => state,
    [REMOVE.REQUEST]: (state, action) => state,
    [REMOVE.SUCCESS]: (state, { payload: id }) => ({
      ...state,
      posts: state.posts.filter((item) => item.id != id),
      currentPost: undefined,
    }),
    [REMOVE.FAILURE]: (state, action) => state,
    [PAGE_CHANGE]: (state, { payload }) => {
      return {
        ...state,
      };
    },
  },
  initState
);
