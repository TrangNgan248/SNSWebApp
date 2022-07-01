import "./seeksidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faA,faCircleUser,faBookBookmark,faUserGroup,faBook} from '@fortawesome/free-solid-svg-icons'
export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <span className= "seekText" > Ket Qua Tim Kiem </span>
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <FontAwesomeIcon icon={faA} className="sidebarIcon" />
                        <span className="sidebarItemtext">All</span>
                    </li>
                    <li className="sidebarItem">
                        <FontAwesomeIcon icon={faCircleUser} className="sidebarIcon"/>
                        <span className="sidebarItemtext">User</span>
                    </li>
                    <li className="sidebarItem">
                        <FontAwesomeIcon icon={faUserGroup}  className="sidebarIcon" />
                        <span className="sidebarItemtext">Channel</span>
                    </li>
                    <li className="sidebarItem">
                        <FontAwesomeIcon icon={faBookBookmark} className="sidebarIcon" />
                        <span className="sidebarItemtext">Bookmark</span>
                    </li>
                    <li className="sidebarItem">
                        <FontAwesomeIcon icon={faBook} className="sidebarIcon" />
                        <span className="sidebarItemtext">Post</span>
                    </li>
                </ul>
              
               
            </div>
        </div>
    )
}