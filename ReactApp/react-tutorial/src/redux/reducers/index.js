import {combineReducers} from 'redux';
import visibilityFilters from './visibilityFilter';
import todos from './todos';
import testReducer from './testReducer';

export default combineReducers({todos, visibilityFilters, testReducer});