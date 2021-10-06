import { createAsyncSaga } from "lib/createAsyncSaga";
import { createAction, handleActions } from "redux-actions";
import { userAPI } from "lib/api";
import { takeLatest } from "redux-saga/effects";

// 액션 타입
const UPDATE_PROFILE = {
  REQUEST: "user/UPDATE_PROFILE_REQUEST",
  SUCCESS: "user/UPDATE_PROFILE_SUCCESS",
  FAILURE: "user/UPDATE_PROFILE_FAILURE",
};

// 액션 생성자
const updateProfile = createAction(
  UPDATE_PROFILE.REQUEST,
  (updateForm) => updateForm
);

export const userActions = {
  updateProfile,
};

// 리덕스 사가
const updateProfile$ = createAsyncSaga(UPDATE_PROFILE, userAPI.updateUser);

export function* userSaga() {
  yield takeLatest(UPDATE_PROFILE.REQUEST, updateProfile$);
}

// 초기 상태
const initState = {};

// 리듀서
export const user = handleActions(
  {
    [UPDATE_PROFILE.REQUEST]: (state, action) => state,
    [UPDATE_PROFILE.SUCCESS]: (state, action) => state,
    [UPDATE_PROFILE.FAILURE]: (state, action) => state,
  },
  initState
);
