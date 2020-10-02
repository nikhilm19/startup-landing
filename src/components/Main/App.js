import React from "react";
import { Route, HashRouter as Router } from "react-router-dom";
import { createHashHistory } from "history";
import logo from "../../logo.svg";
import AboutUs from "./About-us";

import Landing from "./Landing";
import Layout from "./Layout";
import Login from "./Login";
import Switch from "react-bootstrap/esm/Switch";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Landing}></Route>
      <Route path="/about" exact component={AboutUs}></Route>

      <Route path="/login" exact component={Login}></Route>
    </Router>
  );
}

export default App;
