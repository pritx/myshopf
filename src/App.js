    // App.js
    import React, { useEffect } from "react";
    import "./App.css";

    import { BrowserRouter as Router} from "react-router-dom";
    import Routes from "./pages/Routes";

    const App = () => {

      return (
        <Router basename="/" >
            <Routes />
        </Router>
      );
    };

    export default App;
