import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { auth, authSaga } from "modules/auth";
import { post, postSaga } from "modules/post";
import { user, userSaga } from "modules/user";
import { history } from "lib/history";
import { connectRouter, routerMiddleware } from "connected-react-router";

const rootReducer = combineReducers({
  auth,
  post,
  user,
  router: connectRouter(history),
});

function* rootSaga() {
  yield all([fork(authSaga), fork(postSaga), fork(userSaga)]);
}

const sagaMiddleware = createSagaMiddleware({
  context: {
    history: history,
  },
});

const middlewares = [sagaMiddleware, routerMiddleware(history)];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
