// imported modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// imported components
import Home from "./components/Home";

/* =============================================
App Function Component
This is where all the routes to the app shall be 
put in order to be rendered in our root file
============================================== */

const App = () => {
  return (
    <div>
      <Router>
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </React.StrictMode>
      </Router>
    </div>
  );
};

export default App;
