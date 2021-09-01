import React, { Fragment } from "react";
import "./App.css";
import { NavBar } from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactState from "./context/contact/contactState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <NavBar />
        </Fragment>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </ContactState>
  );
};

export default App;
