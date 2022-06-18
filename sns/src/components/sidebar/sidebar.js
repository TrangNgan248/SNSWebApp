import "./sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faCircleUser,faBookBookmark,faUserGroup,faAngleDown} from '@fortawesome/free-solid-svg-icons'
export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <FontAwesomeIcon icon={faHome} className="sidebarIcon" />
                        <span className="sidebarItemtext">Menu</span>
                    </li>
                    <li className="sidebarItem">
                        <FontAwesomeIcon icon={faCircleUser} className="sidebarIcon"/>
                        <span className="sidebarItemtext">Profile</span>
                    </li>
                    <li className="sidebarItem">
                        <FontAwesomeIcon icon={faBookBookmark}  className="sidebarIcon" />
                        <span className="sidebarItemtext">Bookmark</span>
                    </li>
                    <li className="sidebarItem">
                        <FontAwesomeIcon icon={faUserGroup} className="sidebarIcon" />
                        <span className="sidebarItemtext">Channel</span>
                    </li>
                </ul>
                <ul className="channelList">
                    <li className="channelItem">
                        <img src="assets/testimg/it.png" alt=""className="channelImg"></img>
                        <span className="channelName">IT</span>
                    </li>
                    <li className="channelItem">
                    <img src="assets/testimg/sunlogo.jpg" alt="" className="channelImg"></img>
                        <span className="channelName">Jobfair</span>
                    </li>
                    <li className="channelItem">
                    <img src="assets/testimg/nihon.png" alt="" className="channelImg"></img>
                        <span className="channelName">Nihongo</span>
                    </li>
                </ul>
                <div className="sidebarShowmore">
                <FontAwesomeIcon icon={faAngleDown} />
                <a href="/#" className="showmore">Show more</a>
                </div>
                <hr className="sidebarHr"></hr>
                <button class="btn"><i class="fa-solid fa-circle-plus"> Join new channels</i></button>
            </div>
        </div>
    )
}