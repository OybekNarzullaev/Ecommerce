import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Pay from "./Pay";
import Success from "./Success";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
