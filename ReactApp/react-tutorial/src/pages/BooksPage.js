import React, { Component } from "react";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  render() {
    return <div className="body-page-content">Books </div>;
  }
}

export default Books;
