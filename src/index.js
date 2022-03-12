import React from "react";
import ReactDOM from "react-dom";

//styling import
import "./index.css";
import "./public/styles.css"
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//IMPORT BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();