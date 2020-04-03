import React, { useState } from "react";
import { Route, HashRouter } from "react-router-dom";
import Budget from "./Budget";
import Home from "./Home";

import NavigationBar from "./NavigationBar";

const Main = props => {
  return (
    <HashRouter>
      <div>
        <NavigationBar />
      </div>

      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/budget" component={Budget} />
      </div>
      <div>
        <footer>the Military Budget App</footer>
      </div>
    </HashRouter>
  );
};

export default Main;
