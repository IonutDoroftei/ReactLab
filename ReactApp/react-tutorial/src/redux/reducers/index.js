import {combineReducers} from 'redux';
import testReducer from './testReducer';
import articlesReducer from './articlesReducer';

const RootReducer = combineReducers({ testReducer, articlesReducer});
export default RootReducer