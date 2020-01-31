import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  StateMachineProvider,
  createStore,
  DevTool
} from "little-state-machine";

import { Profile, Experience, Portfolio, Result } from "./components/Form";
import "bulma/css/bulma.css";

createStore({
  data: { step: 1 }
});

function App() {
  return (
    <StateMachineProvider>
      {process.env.NODE_ENV !== "production" && <DevTool />}
      <div className="container is-fluid">
        <h1>Onboarding</h1>
        <Router>
          <Route exact path="/" component={Profile} />
          <Route path="/Experience" component={Experience} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Result" component={Result} />
        </Router>
      </div>
    </StateMachineProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
