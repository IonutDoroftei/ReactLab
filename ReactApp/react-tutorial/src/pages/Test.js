import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask, changeStatus, populateData } from "../redux/actions";

class Test extends Component {
  constructor() {
    super();
    this.state = { inputValue: "" };
  }

  addTaskOnClick() {
    let obj = {
      status: "new",
      name: this.state.inputValue,
    };
    this.props.addTask(obj);
    this.setState({ inputValue: "" });
  }

  callForData() {
    axios
      .get("http://localhost:3000/tasks")
      .then((response) => this.props.populateData(response.data));
  }

  changeStatus(task, index) {
    let tasks = this.props.info;
    tasks[index].status = "done";
    this.props.changeStatus(tasks);
    this.setState({ inputValue: "" });
  }

  render() {
    const { isLoading } = this.props;
    const { info } = this.props;

    if(isLoading) {
        this.callForData() 
        return(
            <p>Loading....</p>
        )
    }

    return(
        <div>
            <ol>
              {info.map((task, index) => (
                <li key={index}>
                  <span>{task.name} {task.status}</span>
                  <button onClick={() => this.changeStatus(task, index)} class="ui primary basic button">Done</button>
                </li>))}
            </ol>
            <input onChange={(value) => this.setState({inputValue: value.target.value})} value={this.state.inputValue}/>
            <button onClick={() => this.addTaskOnClick()}>Add a new ticket</button>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    info: state.info,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => {
    dispatch(addTask(task));
  },
  populateData: (data) => {
    dispatch(populateData(data));
  },
  changeStatus: (data) => {
    dispatch(changeStatus(data));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Test);
