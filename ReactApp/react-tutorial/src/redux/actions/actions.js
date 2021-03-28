import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  ADD_TASK,
  POPULATE_DATA,
  CHANGE_STATUS
} from "../actionTypes";
import { GET_ARTICLES, SET_ARTICLES } from "../reducers/articlesReducer";

let nextTodoId = 0;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: { task },
});

export const populateData = (data) => ({
  type: POPULATE_DATA,
  payload: { data },
});

export const changeStatus = (data) => ({
  type: CHANGE_STATUS,
  payload: { data },
});

export const getArticles = () => ({
  type: GET_ARTICLES
});

export const setArticles = (articles) => ({
  type: SET_ARTICLES,
  payload: { articles }
});