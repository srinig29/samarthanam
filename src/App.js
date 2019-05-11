import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage.js";
import PageNotFound from "./components/PageNotFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />

          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
