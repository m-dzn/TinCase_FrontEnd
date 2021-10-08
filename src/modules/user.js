import config from "config.json";
import { createAsyncSaga } from "lib/createAsyncSaga";
import { createAction, handleActions } from "redux-actions";
import { userAPI } from "lib/api";
import { takeLatest } from "redux-saga/effects";

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
const UPDATE_PROFILE = {
  REQUEST: "user/UPDATE_PROFILE_REQUEST",
  SUCCESS: "user/UPDATE_PROFILE_SUCCESS",
  FAILURE: "user/UPDATE_PROFILE_FAILURE",
};
const UPDATE_AVATAR = {
  REQUEST: "user/UPDATE_AVATAR_REQUEST",
  SUCCESS: "user/UPDATE_AVATAR_SUCCESS",
  FAILURE: "user/UPDATE_AVATAR_FAILURE",
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
const updateProfile = createAction(
  UPDATE_PROFILE.REQUEST,
  (updateForm) => updateForm
);
const updateAvatar = createAction(UPDATE_AVATAR.REQUEST, (avatarFile) => ({
  avatarFile,
}));

export const userActions = {
  join,
  login,
  logout,
  getCurrentUser,
  updateProfile,
  updateAvatar,
};

// 리덕스 사가
const join$ = createAsyncSaga(JOIN, userAPI.join);
const login$ = createAsyncSaga(LOGIN, userAPI.login);
const getCurrentUser$ = createAsyncSaga(
  GET_CURRENT_USER,
  userAPI.getCurrentUser
);
const updateProfile$ = createAsyncSaga(UPDATE_PROFILE, userAPI.updateUser);
const updateAvatar$ = createAsyncSaga(UPDATE_AVATAR, userAPI.updateAvatar);

export function* userSaga() {
  yield takeLatest(JOIN.REQUEST, join$);
  yield takeLatest(LOGIN.REQUEST, login$);
  yield takeLatest(GET_CURRENT_USER.REQUEST, getCurrentUser$);
  yield takeLatest(UPDATE_PROFILE.REQUEST, updateProfile$);
  yield takeLatest(UPDATE_AVATAR.REQUEST, updateAvatar$);
}

// 초기 상태
const initState = {
  currentUser: undefined,
};

// 리듀서
export const user = handleActions(
  {
    [JOIN.REQUEST]: (state, action) => state,
    [JOIN.SUCCESS]: (state, action) => state,
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
    [UPDATE_PROFILE.REQUEST]: (state, action) => state,
    [UPDATE_PROFILE.SUCCESS]: (state, action) => state,
    [UPDATE_PROFILE.FAILURE]: (state, action) => state,
    [UPDATE_AVATAR.REQUEST]: (state, action) => state,
    [UPDATE_AVATAR.SUCCESS]: (state, action) => state,
    [UPDATE_AVATAR.FAILURE]: (state, action) => state,
  },
  initState
);
