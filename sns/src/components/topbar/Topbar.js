
import "./Topbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faUser,faGear,faBell,faAngleDown } from '@fortawesome/free-solid-svg-icons'
export default function Topbar(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <img src="/assets/testimg/logo.png" alt="" className="Logoimg"></img>
                <span className="Logo">Fuurin</span>
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