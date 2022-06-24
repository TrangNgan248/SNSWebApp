import { Link } from "react-router-dom";
import "./login.css"
export default function Login() {
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
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <div className="createAcc"> 
            <div className="createAccUser">
              <Link to = "/register"> <button className="btnlogin" >Sign up for User</button></Link>
            </div>
            <div className="createAccBus">
              <button className="btnlogin">
              Sign up for Business
              </button>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}