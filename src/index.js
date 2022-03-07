import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./public/styles.css"
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//IMPORT BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main"
//Wrap the App Component with the Router component to enable the router features

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes >
        <Route path="/" element={<App />} >
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();