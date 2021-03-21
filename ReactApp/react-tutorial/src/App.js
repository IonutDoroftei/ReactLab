import './App.css';
import React, {Component} from 'react';
import Header from './components/Header';
import WelcomePage from './pages/WelcomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PeoplePage from "./pages/PeoplePage";
import Books from "./pages/BooksPage";
import NavigationBar from "./components/NavigationBar";

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Header />
          <div className="body-container">
            <NavigationBar />
            <Switch>
              <Route path="/" exact  component={WelcomePage} />
              <Route path="/people" component={PeoplePage} />
              <Route path="/books" component={Books} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
