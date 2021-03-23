import {combineReducers} from 'redux';
import visibilityFilters from './visibilityFilter';
import todos from './todos';

export default combineReducers({todos, visibilityFilters});