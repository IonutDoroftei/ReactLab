import React, { Component } from "react";
import axios from "axios";

class PeoplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3000/people").then((res) => {
      this.setState({ people: res.data });
    });
  }

  render() {
    return (
      <div className="body-page-content">
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Books</th>
          </tr>

          {this.state.people.map((p) => (
            <tr>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.booksLibrary.length}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default PeoplePage;
