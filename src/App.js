// App.js
import React from "react";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./pages/Routes";

const App = () => {
  return (
    // <Router basename={process.env.PUBLIC_URL} >
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
