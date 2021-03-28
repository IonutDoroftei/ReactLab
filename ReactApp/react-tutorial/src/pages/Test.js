import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask, changeStatus, populateData } from "../redux/actions/actions";

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
    const { isLoading, info } = this.props;

    if( isLoading ) {
        this.callForData() 
        return(
            <p>Loading....</p>
        )
    }

    return(
        <div className="TasksListPage">
            <ol className="tasksConatiner">
              {info.map((task, index) => (
                <li key={index}>
                  <span>{task.name} {task.status}</span>
                  <button onClick={() => this.changeStatus(task, index)} class="TicketBtn">Done</button>
                </li>))}
            </ol>
            <div className="AddNewTickets">
                <input onChange={(value) => this.setState({inputValue: value.target.value})} value={this.state.inputValue}/>
                <button onClick={() => this.addTaskOnClick()}>Add a new ticket</button>
            </div>
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
