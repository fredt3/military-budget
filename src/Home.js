import React, { Component } from "react";
import Jumbo from "./Jumbo";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Budget from "./Budget";
import NavigationBar from "./NavigationBar";

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbo />
        <p>Welcome to the Military Budget App</p>
      </div>
    );
  }
}

export default Home;
