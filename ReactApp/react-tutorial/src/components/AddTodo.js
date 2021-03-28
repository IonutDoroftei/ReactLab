import React, { Component } from "react";
import { addTodo } from "../redux/actions/actions";
import { connect } from "react-redux";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input) => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };
  render() {
    return (
      <div>
        <input
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button onClick={this.handleAddTodo}> Add in Todo </button>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
