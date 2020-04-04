import "regenerator-runtime/runtime";
import { createStore, compose, applyMiddleware } from "redux";
import DevTools from "../containers/DevTools";
import thunk from "redux-thunk";
//import * as R from "ramda";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas/userSaga";

const sagaMiddlewareObj = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const logger = () => (next) => (action) => {
    console.log("%j", initialState);
    return next(action);
  };

  const myStore = createStore(
    rootReducer,
    /*initialState,*/
    /* applyMiddleware(sagaMiddlewareObj)*/
    compose(
      applyMiddleware(thunk, logger, sagaMiddlewareObj),
      DevTools.instrument()
    )
  );

  sagaMiddlewareObj.run(rootSaga);

  return myStore;
}
