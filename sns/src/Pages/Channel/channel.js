
import Feed from '../../components/feed/feed'
import Sidebar from '../../components/sidebar/sidebar'
import "./channel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import Topbar from '../../components/topbar/Topbar';
import {  useState } from 'react';
import { useParams, useLocation } from 'react-router-dom'
export default function Channel(props) {
    const [isActive,setIsActive] = useState(false);
    const [buttonText,setButtonText]=useState(false);
    function click(){
        setButtonText(current=> !current);
    }
    const HandleClick=()=>{
        setIsActive(current=> !current);
    }
    const location = useLocation();
    const state = location.state;
    let channel_id = state.id;
    console.log(channel_id);
    let join = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://127.0.0.1:8000/api/auth/joinChannel", {
                method: "POST",
                body: JSON.stringify({ channel_id }),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json',
                    "Authorization": 'Bearer ' + localStorage.getItem("access_token"),
                }
            });
        } catch (err) {
            console.log(err);
        }
    };

  return (
    <>
    <Topbar/>
        <div className="homeContainer">
            <Sidebar />
            <div className="channelContentAll">
            <div className='avatarWrap'>
                <div className="bgDiv">
                    <img className='bgImg' alt='' src={`http://localhost:8000/storage/${state.img}`}></img>
                </div>
                <div className="avaDiv">
                <img className='avaImg' alt='' src={`http://localhost:8000/storage/${state.bg}`}></img>
                </div>
            </div>
            <div className="navChannel">
                <span className='channelText'> {state.name}</span>             
                {/* <button className="btnjoin" onClick={() => { join(); click()}} style={{ color: buttonText ? "black" : "white" }}> {`${buttonText? "Join":"Joined"}`}</button> */}
                <button className="btnjoin" onClick={join}>Join</button>
                <FontAwesomeIcon icon={faBell} className="notiIcon" onClick={HandleClick} style={{ color: isActive ? "blue" : "black" }}/>            
            </div>
            <div className="channelContent">
            <Feed id={channel_id}/>
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
