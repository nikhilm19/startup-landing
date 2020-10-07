import React from "react";
import { Route, HashRouter as Router } from "react-router-dom";
import { createHashHistory } from "history";
import logo from "../../logo.svg";
import AboutUs from "./About-us";

import Landing from "./Landing";
import Layout from "./Layout";
import Login from "./Login";
import { pages } from "../../constants/Routes";

function App() {
  return (
    <Router>
      {pages.map((page) => {
        return <Route path={page.path} component={page.component}></Route>;
      })}
    </Router>
  );
}

export default App;
