import axios from 'axios';
import React, {Component} from 'react';
import  {connect} from 'react-redux';
import {addTask, populateData} from "../redux/actions"

class Test extends Component {
    constructor() {
        super()
        this.state = {inputValue:""};
    }

    addTaskOnClick() {
        let obj = {
            status:"new",
            name : this.state.inputValue
        }
        this.props.addTask(obj);
        this.setState({inputValue:""});
    }

    callForData(){
        axios.get("http://localhost:3000/tasks")
    .then(response => this.props.populateData(response.data))
    }

    render() {
        console.log(this.props.info)
        if(this.props.isLoading) {
            this.callForData() 
            return(
                <p>Loading....</p>
            )
        }

        return(
            <div>
                <ul>
                  {this.props.info.map((task, index) => 
                    (<li key={index}><span>{task.name}</span></li> )
                    )}
                </ul>
                <input onChange={(value) => this.setState({inputValue: value.target.value})} value={this.state.inputValue}/>
                <button onClick={() => this.addTaskOnClick()}>Click</button>
            </div>
        )
    }
}

const mapStateToProps  = state => {
    return{
        info: state.info,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = dispatch => ({
    addTask: task => {
    dispatch(addTask(task));
    },
    populateData: data => {
        dispatch(populateData(data));
    }
   });
export default connect(mapStateToProps, mapDispatchToProps) (Test)