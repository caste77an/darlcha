import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Product from "./Product";
import Subscription from "./Subscription";
import Story from "./Story";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/list" exact component={Product} />
          <Route path="/subscription" exact component={Subscription} />
          <Route path="/story" exact component={Story} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
