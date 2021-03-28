import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";

const TodoList = ({ todos }) => (
  <ul>
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo todo={todo} />;
        })
      : "There are not any tasks"}
  </ul>
);

const mapStateToProps = state => {
  const {visibilityFilter} = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return {todos};
};

export default connect(mapStateToProps)(TodoList);
