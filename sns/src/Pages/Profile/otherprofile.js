import "./profile.css"
import React, { useState, useEffect } from 'react';
import UserPost from "../../components/post/userPost";
import Sidebar from '../../components/sidebar/sidebar';
import Topbar from '../../components/topbar/Topbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faCakeCandles,faGraduationCap,faGenderless} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from "axios";
import { Button, Modal } from 'antd';
import { useParams, useLocation } from 'react-router-dom';
export default function Profile(props) {
    const location = useLocation();
    const state = location.state;
    console.log(state);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = (id) => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Sidebar/>
        <div className="profileContentAll">
        <div className="navProfile">
        <div className='avatarProfileWrap'>
            <div className="bgDiv">
                <img className='bgImg' src='assets/testimg/Yasuo_0.jpg'></img>
            </div>
            <div className="avaProfileDiv">
                <img className='avaProfileImg' src={`http://localhost:8000/storage/${state.img}`}></img>
            </div>
        </div>
        <div className='UserIntro1'>
            <p className="nameUser">{state.name}</p> 
            <p className='shortIntroUser'>{state.intro}</p>
            <hr/>
        <div class="userFollowNav">
            <Link to="/Profile"><div className='userFollow'>Post</div></Link>
            <Button type="link" onClick={showModal}>
                    <button className="btn">Follower</button>
                </Button>
                <Modal title="Follower" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className='followButton'><button className="btn">Follow User</button></div>         
                    <ul className="channelList">
                        <li className="channelSeekItem">  
                            <img src="assets/testimg/ayame1.png" alt=""className="channelImg"></img>
                            <span className="channelName">Ayame1</span>
                            <div className='followButton'><button className="btn1">Unfollow</button></div>
                            
                        </li>
                        <li className="channelSeekItem">        
                             <img src="assets/testimg/ayame2.jpg" alt="" className="channelImg"></img>
                            <span className="channelName">Ayame2</span>
                            <div className='followButton'><button className="btn">Follow</button></div>
                        </li>
                        <li className="channelSeekItem">
                          
                            <img src="assets/testimg/sunlogo.jpg" alt="" className="channelImg"></img>
                            <span className="channelName">Sun*</span>
                            <div className='followButton'><button className="btn1">Unfollow</button></div>
                        </li>                                   
                           
                    </ul>
                </Modal>
                <Button type="link" onClick={showModal}>
                    <button className="btn">Following</button>
                </Button>
           
        </div>
        </div>
        </div>
        <div className="userProfileStt">
        <UserPost id={state.id}/>
        <div className="profileIntro">
                <div className="channelIntroWrap">
                    <span className='channelIntroOp'>Profile</span>
                    <br></br><br/>
                    <ul className="introUserList">
                    <li className="introUserItem">
                        <FontAwesomeIcon icon={faCakeCandles} className="introUserIcon" />
                        <span className="introUserItemtext">{state.dob}</span>
                    </li>
                    <li className="introUserItem">
                        <FontAwesomeIcon icon={faHome} className="introUserIcon" />
                        <span className="introUserItemtext">{state.address}</span>
                    </li>
                    <li className="introUserItem">
                        <FontAwesomeIcon icon={faGraduationCap} className="introUserIcon"/>
                        <span className="introUserItemtext">User</span>
                    </li>
                    <li className="introUserItem">
                        <FontAwesomeIcon icon={faGenderless}  className="introUserIcon" />
                        <span className="introUserItemtext">Male</span>
                    </li>
                </ul>
                </div>
            </div>
        </div>
         
        </div>
      </div>
    </>
  )
}
