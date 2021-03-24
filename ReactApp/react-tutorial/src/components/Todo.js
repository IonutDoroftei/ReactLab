import React from "react";
import { toggleTodo } from "../redux/actions";
import { connect } from "react-redux";

// const Todo = ({ todo, toggleTodo }) => {
//   <li onClick={() => toggleTodo(todo.id)}>{todo.content}</li>;
// };

class Todo extends React.Component {
  render() {
    console.log(this.props.allIds)
      return <li></li>
  }
}

const mapStateToProps = state => ({
  allIds: state.allIds,
})
export default connect(mapStateToProps, { toggleTodo })(Todo);
