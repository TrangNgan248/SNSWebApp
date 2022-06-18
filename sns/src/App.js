import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes> 
      </Router>
    );
}

export default App;