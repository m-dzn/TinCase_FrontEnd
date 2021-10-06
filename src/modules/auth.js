import config from "config.json";
import { createAsyncSaga } from "lib/createAsyncSaga";
import { handleActions, createAction } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import { authAPI } from "lib/api";

const { ACCESS_TOKEN } = config.const;

// 액션 타입
const JOIN = {
  REQUEST: "auth/JOIN_REQUEST",
  SUCCESS: "auth/JOIN_SUCCESS",
  FAILURE: "auth/JOIN_FAILURE",
};
const LOGIN = {
  REQUEST: "auth/LOGIN_REQUEST",
  SUCCESS: "auth/LOGIN_SUCCESS",
  FAILURE: "auth/LOGIN_FAILURE",
};
const LOGOUT = "auth/LOGOUT";
const GET_CURRENT_USER = {
  REQUEST: "auth/GET_CURRENT_USER_REQUEST",
  SUCCESS: "auth/GET_CURRENT_USER_SUCCESS",
  FAILURE: "auth/GET_CURRENT_USER_FAILURE",
};

// 액션 생성자
const join = createAction(JOIN.REQUEST, (joinForm, redirectUrl = "/") => ({
  joinForm,
  redirectUrl,
}));
const login = createAction(LOGIN.REQUEST, (loginForm, redirectUrl = "/") => ({
  loginForm,
  redirectUrl,
}));
const logout = createAction(LOGOUT);
const getCurrentUser = createAction(GET_CURRENT_USER.REQUEST);

export const authActions = {
  join,
  login,
  logout,
  getCurrentUser,
};

// 리덕스 사가
const join$ = createAsyncSaga(JOIN, authAPI.join);
const login$ = createAsyncSaga(LOGIN, authAPI.login);
const getCurrentUser$ = createAsyncSaga(
  GET_CURRENT_USER,
  authAPI.getCurrentUser
);

export function* authSaga() {
  yield takeLatest(JOIN.REQUEST, join$);
  yield takeLatest(LOGIN.REQUEST, login$);
  yield takeLatest(GET_CURRENT_USER.REQUEST, getCurrentUser$);
}

// 초기 상태
const initState = {
  currentUser: undefined,
};

// 리듀서
export const auth = handleActions(
  {
    [JOIN.REQUEST]: (state, action) => state,
    [JOIN.SUCCESS]: (state, { payload }) => {
      return state;
    },
    [JOIN.FAILURE]: (state, action) => state,
    [LOGIN.REQUEST]: (state, action) => state,
    [LOGIN.SUCCESS]: (state, { payload: currentUser }) => {
      return {
        ...state,
        currentUser,
      };
    },
    [LOGIN.FAILURE]: (state, action) => state,
    [LOGOUT]: (state, action) => {
      localStorage.removeItem(ACCESS_TOKEN);
      return {
        ...state,
        currentUser: undefined,
      };
    },
    [GET_CURRENT_USER.REQUEST]: (state, action) => state,
    [GET_CURRENT_USER.SUCCESS]: (state, { payload: currentUser }) => ({
      ...state,
      currentUser,
    }),
    [GET_CURRENT_USER.FAILURE]: (state, action) => state,
  },
  initState
);
