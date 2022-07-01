
import "./Topbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faUser,faGear,faBell,faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
function Topbar(){
    const [data,setData] = useState([])
    async function search(key) {
        console.warn(key)
        let result = await fetch("http://localhost:8000/api/search/"+key);
        result= await result.json();
        setData(result)
    }
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <img src="/assets/testimg/logo.png" alt="" className="Logoimg"></img>
                <span className="Logo">Fuurin</span>
            </div>
            <div className="topbarCenter">
                <div className="Search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="searchicon" />
                    <input type="text" onChange = {(e)=>search(e.target.value)} placeholder="Seacrh for something" className="searchInput"/>
                    
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
export default Topbar