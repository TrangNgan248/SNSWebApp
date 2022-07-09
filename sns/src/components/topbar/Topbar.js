
import "./Topbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faUser,faGear,faBell,faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
export default function Topbar(){
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
                    <span placeholder="Seacrh for something" className="searchInput"></span>
                    </Link>
                </div>
            </div>
            <div className="topbarRight">
                <div className="iconTopbars">
                    <div className="iconTopbar">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    
                    <div className="iconTopbar">
                        <FontAwesomeIcon icon={faGear} />
                    </div>
                    <div className="iconTopbar">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className="iconTopbar">
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                </div>

            </div>
         </div>
    )
}