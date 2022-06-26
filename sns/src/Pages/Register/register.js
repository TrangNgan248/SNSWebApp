import { Link, useNavigate } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import "./register.css";

export default function Register() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation, setPasswordConfirmation] = useState("")
  async function register(){
    let item={name, email, password, password_confirmation}
    console.warn(item)
    let result = await fetch("http://127.0.0.1:8000/api/register",{
      method:"POST",
      body:JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
    })
    result = await result.json()
    console.warn("result", result)
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
          <div className="signupBox">
          <h6 className="signupText">Sign up for User</h6>
            <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="loginInput" name="name"/>
            <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="loginInput"name="email"/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="loginInput" name="password" />
            <input type="password" placeholder="Password Again" value={password_confirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)} className="loginInput" name="password_confirmation" />
            <button type="submit" onClick={register} className="loginButton">Sign Up</button>
            <div className="createAcc">
            <Link to ="/login"><button className="loginRegisterButton">Already got account?
            </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}