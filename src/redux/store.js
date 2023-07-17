import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { combineReducer } from "./CombineReducer";
import rootSaga from "../saga/index";
import { getLocationFetch } from "./slices/locationListSlice";
const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware, logger];

const rootReducer = (state, action) => {
  if(action.type === "clearstate/emptyStateInfo"){
    state=undefined;
  }
  return combineReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: middleWares,
});

sagaMiddleware.run(rootSaga);

export default store;
store.dispatch(getLocationFetch())