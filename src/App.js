import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./comp/views/home";
import Navbar from "./comp/views/navbar";
import View from "./comp/views/view";
import About from "./comp/views/about";
import Subscribe from "./comp/views/subscribe";
// import Footer from "./comp/views/footer";
import Footer from "./comp/views/footer";

require("dotenv").config();

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <>
            <Navbar />
            <div className="main-component">
              <Switch>
                <Route path={"/subscribe"} component={Subscribe} />
                <Route path={"/about"} component={About} />
                <Route path={"/view"} component={View} />
                <Route path={"/"} component={Home} />
              </Switch>
            </div>
            <Footer className="footer" />
          </>
        </Router>
      </div>
    );
  }
}
