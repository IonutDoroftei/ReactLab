import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavigationBar extends Component {
  render() {
    return (
      <div className="NavigationContainer">
        <Link to="/people"> People </Link>
        <Link to="/books"> Books </Link>
        <Link to="/todo"> To Do </Link>
      </div>
    );
  }
}

export default NavigationBar;