import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="body-container">
            <NavigationBar />
            <Switch>
              {routes.map((item) => (
                <Route exact path={item.path} component={item.component} />
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
