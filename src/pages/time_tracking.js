import React from "react";

import TopMenu from "../components/top_menu.js";
import "../css/time_tracking.scoped.css";
import logo from '../img/logo.svg'

export default function TimeTracking() {
  return (
    <div>
      <div className="top_line">
          <img src={logo} />
          <h1>Time tracking</h1>,
      </div>
      <TopMenu/>

      <div className="body">
        <div className="element">ELEMENT</div>
      </div>
    </div>
  );
}
