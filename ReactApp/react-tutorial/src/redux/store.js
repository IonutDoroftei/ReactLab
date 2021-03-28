import {createStore,applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer,applyMiddleware(...sagaMiddleware));
sagaMiddleware.run(mySaga);
