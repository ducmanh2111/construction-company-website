import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import rootReducers from "../reducers";
import rootSagas from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducers,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSagas);

export default store;
