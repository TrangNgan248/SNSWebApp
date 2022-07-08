
import "./Topbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faUser,faGear,faBell,faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
export default function Topbar(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to ="/"><img src="/assets/testimg/logo.png" alt="" className="Logoimg"></img>
                <span className="Logo">Fuurin</span></Link>
            </div>
            <div className="topbarCenter">
                <div className="Search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="searchicon" />
                    <input placeholder="Seacrh for something" className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="iconTopbars">
                    <div className="iconTopbar">
                        <Link to ="/profile"><FontAwesomeIcon icon={faUser} /></Link>
                    </div>
                    
                    <div className="iconTopbar">
                        <Link to="/setting"><FontAwesomeIcon icon={faGear} /></Link>
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