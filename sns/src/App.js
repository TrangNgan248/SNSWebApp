import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
import Detail from "./components/Detail/detail";
import Seek from "./Pages/Seek/seek";
import Edit from "./components/Edit/edit";
function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/edit" element={<Edit/>}/>
          <Route path="/seek" element={<Seek/>}/>
        </Routes> 
      </Router>
    );
}

export default App;