import { Link, useNavigate} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import "./login.css"
import axios from "axios";
export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  useEffect(()=>{
    if(localStorage.getItem('access_token')) {
      navigate("/")
    }
  }, [])
   
  async function login(){
    console.warn(email, password)
    let item = {email, password};
    let result = await fetch("http://127.0.0.1:8000/api/auth/login",{
      method:"POST",
      body:JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json',
      }
    });
  
    result = await result.json();
    if (result.access_token) {
    localStorage.setItem('access_token', result.access_token);
    localStorage.setItem('user', JSON.stringify(result.user));
    navigate("/")
    } else {
      alert("Sai ten dang nhap hoac mat khau");
    }
    
  }
  
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        <div className="loginBar"> 
            <img src="/assets/testimg/logo.png" alt="" className="logoIcon1"></img>
          <h3 className="loginLogo">Fuurin</h3>
          </div>
          <span className="loginDesc">
                Find job, connect with Japanese and IT learners
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text"placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="loginInput" name="email" />
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="loginInput" name="password" />
            <button type="submit" onClick={login} className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <div className="createAcc"> 
            <div className="createAccUser">
              <Link to = "/register"> <button className="btnlogin" >Sign up for User</button></Link>
            </div>
            <div className="createAccBus">
            <Link to = "/cpnregister"> <button className="btnlogin" >Sign up for Business</button></Link>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}