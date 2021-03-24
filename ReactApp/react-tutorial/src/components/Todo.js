import React from "react";
import { toggleTodo } from "../redux/actions";
import { connect } from "react-redux";

const Todo = ({ todo, toggleTodo }) => {
  <li onClick={() => toggleTodo(todo.id)}>{todo.content}</li>;
};

export default connect(null, { toggleTodo })(Todo);
