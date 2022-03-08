import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//Import route and our components
import { Outlet } from "react-router";

function App() {
  // We will use the Route component to specify each route
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;