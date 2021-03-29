import {createStore,applyMiddleware } from 'redux';
import RootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './sagas/rootSaga';

//Saga middleware
const sagaMiddleware = createSagaMiddleware();
//Redux store 
const store = createStore(RootReducer,applyMiddleware(sagaMiddleware));
//Run watchers
sagaMiddleware.run(RootSaga);

export default store;