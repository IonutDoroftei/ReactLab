import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import { VISIBILITY_FILTERS } from "../constants";

const TodoList = ({ todos }) => (
  <ul>
    {todos && todos.length
      ? todos.map((todos, index) => {
          return <Todo key={"todo-${todo.is}"} todo={todo} />;
        })
      : "There are not any tasks"}
  </ul>
);
