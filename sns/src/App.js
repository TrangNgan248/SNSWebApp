import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
import Seek from "./Pages/Seek/seek";
import Edit from "./components/Edit/edit";
import Channel from "./Pages/Channel/channel";
import Profile from "./Pages/Profile/Profile";
import Setting from "./Pages/SettingProfile/setting";
// import { useNavigate } from "react-router-dom";
function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>   
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/edit" element={<Edit/>}/>
          <Route path="/seek" element={<Seek/>}/>
          <Route path="/channel/:id" element={<Channel/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/setting" element={<Setting/>}/>
        </Routes> 
      </Router>
    );
}

export default App;