import {combineReducers} from 'redux';
import visibilityFilters from './visibilityFilter';
import todos from './todos';
import testReducer from './testReducer';
import articlesReducer from './articlesReducer';

export default combineReducers({todos, visibilityFilters, testReducer, articlesReducer});