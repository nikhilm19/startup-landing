import React from "react";
import { Route, HashRouter as Router } from "react-router-dom";
import logo from "../../logo.svg";
import AboutUs from "./About-us";

import Landing from "./Landing";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/about" exact component={AboutUs}></Route>
      </Layout>
    </Router>
  );
}

export default App;
