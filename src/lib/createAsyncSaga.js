import config from "config.json";
import { push, replace } from "connected-react-router";
import { call, put } from "redux-saga/effects";

const { REPLACE } = config.const;

export function createAsyncSaga(type, asyncAPI, routeType) {
  return function* (action) {
    const { redirectUrl, ...payload } = action.payload;

    try {
      const response = yield call(asyncAPI, payload);

      yield put({
        type: type.SUCCESS,
        payload: response.data,
      });

      if (redirectUrl) {
        yield put(
          routeType === REPLACE ? replace(redirectUrl) : push(redirectUrl)
        );
      }
    } catch (e) {
      yield put({
        type: type.FAILURE,
        payload: e,
      });
    }
  };
}
