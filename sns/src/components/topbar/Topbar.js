
import "./Topbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faUser,faGear,faBell,faAngleDown,faCircleQuestion,faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import React, {useState, useEffect} from 'react';
export default function Topbar(){
    const userLogin = localStorage.getItem("user");
    var userLog = JSON.parse(userLogin);
    const [isShow,setIsShow] = useState(false);
    const handleClick = () => {
        setIsShow(!isShow);
    }
    const token = localStorage.getItem('access_token');
    const navigate = useNavigate()
    // let user = JSON.parse(localStorage.getItem("user-"))
    function logout() {
        localStorage.clear();
        navigate('/login')
    }

    useEffect(()=>{
        if (!token) {
            navigate("/login");
        }
    }, [])
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">

            <Link to="/">
                <img src="/assets/testimg/logo.png" alt="" className="Logoimg"></img>
                <span className="Logo">Fuurin</span>
                </Link>

            </div>
            <div className="topbarCenter">
                <div className="Search">
                    
                    {/* <button onclick="myFunction()">Replace document</button>

                    <div>
                    function myFunction() {
                        window.location.replace("http://localhost:3000/seek")
                    }
                    </div> */}
                    <Link to ="/seek">
                        
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="searchicon" />
                    <span  className="searchInput">Seacrh for something</span>
                    </Link>
                </div>
            </div>
            <div className="topbarRight">
                <ul className="iconTopbars">
                    <li className="iconTopbar">
                        <Link to ="/profile"><FontAwesomeIcon icon={faUser} /></Link>
                    </li>
                    
                    <li className="iconTopbar">
                        <Link to="/setting"><FontAwesomeIcon icon={faGear} /></Link>
                    </li>
                    <li className="iconTopbar">
                        <FontAwesomeIcon icon={faBell} />
                    </li>
                    <li className="iconTopbar">
                        <FontAwesomeIcon icon={faAngleDown} onClick={handleClick} /> 
                    <div className={`${isShow ? "menuactive" : "menuinactive"}`}>
                    <div className="showmoreTopbarWrapper">
                        <div className="showmoreTopbarAvatar">
                            <img className="showmoreTopbarPic" src="assets/testimg/ayame1.png" alt=""></img>
                            <span className="showmoreTopbarUserName">{userLog.name}</span>
                        </div>
                         <div className="showmoreTopbarTabs">
                            <div className="showmoreTab">
                                <Link to="/setting"><FontAwesomeIcon className="iconTopbar" icon={faGear} /></Link>
                                    <span className="showmoreTopbarSj">Setting</span>
                            </div>
                                <div className="showmoreTab" >
                                    <FontAwesomeIcon className="iconTopbar" icon={faCircleQuestion}/>
                                    <span className="showmoreTopbarSj">Question</span>
                                </div>
                                <hr/>
                                {localStorage.getItem('user') ?
                                <div className="showmoreTab">
                                    <FontAwesomeIcon className="iconTopbar" icon={faRightFromBracket} />
                                    <span onClick={logout} className="showmoreTopbarSj">Log out</span>
                                </div>   
                                : null}             
                            </div>
                    </div>
                    </div>                            
                    </li>
                </ul>
            </div>


         </div>    
    )
}
