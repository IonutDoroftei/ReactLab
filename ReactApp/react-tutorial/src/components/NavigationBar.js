import React, { Component } from "react";
import { Link } from "react-router-dom";
import routes from "../routes";

class NavigationBar extends Component {
  render() {
    return (
      <div className="NavigationContainer">
        { routes.filter(r => r.name !== "Welcome").map(item =>
           <Link to={item.path} key={item.path} >{item.name}</Link>)
        }
      </div>
    );
  }
}

export default NavigationBar;
