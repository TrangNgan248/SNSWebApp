
import Feed from '../../components/feed/feed'
import Sidebar from '../../components/sidebar/sidebar'
import "./channel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import Topbar from '../../components/topbar/Topbar';
import {  useState } from 'react';
export default function Channel() {
    const [isActive,setIsActive] = useState(false);
    const [buttonText,setButtonText]=useState(false)
    const HandleClick=()=>{
        setIsActive(current=> !current);
    }

  return (
    <>
    <Topbar/>
        <div className="homeContainer">
            <Sidebar />
            <div className="channelContentAll">
            <div className='avatarWrap'>
                <div className="bgDiv">
                    <img className='bgImg' src='assets/testimg/Ayame-Xmas(2).png'></img>
                </div>
                <div className="avaDiv">
                <img className='avaImg' src='assets/testimg/nihon.png'></img>
                </div>
            </div>
            <div className="navChannel">
                <span className='channelText'> 「日本語チャンネル」</span>             
                <button className="btnjoin"> Join</button>
                <FontAwesomeIcon icon={faBell} className="notiIcon" onClick={HandleClick} style={{ color: isActive ? "blue" : "black" }}/>            
            </div>
            <div className="channelContent">
            <Feed />
            <div className="channelIntro">
                <div className="channelIntroWrap">
                    <span className='channelIntroOp'>Introduction</span>
                    <br></br>
                    <span className='channelDesc'>This is the Introduction.I gonna write someting here just to make sure it long enough for testing. Dont mind me<br></br></span>
                    <p className='channelJoinNum'><hr></hr>5101 Members<br></br>
                    Created day: 1/7/2022</p>
                </div>
            </div>
            </div>
            
        </div>
        </div>
        </>
  );
}
