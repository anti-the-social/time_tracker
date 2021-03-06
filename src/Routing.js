import React, { useEffect } from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import logo from "./logo.svg";
import "./css/general.css";

import Auth from "./pages/auth.js";
import CreateReport from "./pages/create_report.js";
import Report from "./pages/report.js";
import TimeTracking from "./pages/time_tracking.js";

export default function Routing() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/">
            <TimeTracking />
          </Route>
          <Route path="/create_report">
            <CreateReport />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
