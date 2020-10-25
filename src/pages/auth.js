//LIBs
import React from "react";
import axios from "axios";

//CSS
import "../css/auth.css";

//custom
import GLOBAL_VARIABLES from "../global_variables.js";
import popup from "../components/popup.js";
import loader from "../components/loader.js";
import TopMenu from "../components/top_menu.js";

function get_token(login, pwd) {
  const url = GLOBAL_VARIABLES.rest_api_base_url + "/get_token";
  const data = { login, pwd };

  loader.show();
  axios.post(url, data).then(
    function (ans) {
      loader.hide();
    },
    function (err) {
      loader.hide();
    }
  );
}
//lib for post requests
//hooks for inputs

export default function Auth() {
  return (
    <div>
      <img src={require('../img/logo.svg')} />
      <div className="login">
        <p>Login:</p>
        <input />
      </div>
      <div className="pwd">
        <p>Login:</p>
        <input />
      </div>
    </div>
  );
}
