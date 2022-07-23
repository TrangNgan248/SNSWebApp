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
export default function Profile() {
    const userLogin = localStorage.getItem("user");
    console.log("userLogin", userLogin);
    var userLog = JSON.parse(userLogin);
    console.log("userLogin", userLog);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function getUser() {
            const users = await axios.get("http://127.0.0.1:8000/api/user")
            console.log(users.data)
            console.log(typeof users)
            setUsers(users.data)
        }
        getUser()
    }, []);
    const loguser = users.filter(user => user.id === userLog.id);
    console.log("loguser", loguser);
    console.log(typeof loguser);
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
        {loguser.map((user) => 
        <div className="profileContentAll">
        <div className="navProfile">
        <div className='avatarProfileWrap'>
            <div className="bgDiv">
                <img className='bgImg' src={`http://localhost:8000/storage/${user.bg}`}></img>
            </div>
            <div className="avaProfileDiv">
                <img className='avaProfileImg' src={`http://localhost:8000/storage/${user.img}`}></img>
            </div>
        </div>
        <div className='UserIntro1'>
            <p className="nameUser">{user.name}</p> 
            <p className='shortIntroUser'>{user.intro}</p>
            <hr/>
        <div class="userFollowNav">
            <Link to="/Profile"><div className='userFollow'>Post</div></Link>
            <Button type="link" onClick={showModal}>
                    <div className='userFollow'>Follower</div>
                </Button>
                <Modal title="Follower" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    
                    <ul className="channelList">
                        <li className="channelSeekItem">  
                            <img src="assets/testimg/ayame1.png" alt=""className="channelImg"></img>
                            <div className="listFollowUser">
                            <span className="channelName">Ayame1</span>
                            </div>
                           
                            <div className='followButton'><button className="btn1">Unfollow</button></div>
                            
                        </li>
                        <li className="channelSeekItem">        
                             <img src="assets/testimg/ayame2.jpg" alt="" className="channelImg"></img>
                             <div className="listFollowUser">
                             <span className="channelName">Ayame2</span>
                             </div>
                            
                            <div className='followButton'><button className="btn">Follow</button></div>
                        </li>
                        <li className="channelSeekItem">
                          
                            <img src="assets/testimg/sunlogo.jpg" alt="" className="channelImg"></img>
                            <div className="listFollowUser">
                            <span className="channelName">Sun*</span>
                            </div>
                            
                            <div className='followButton'><button className="btn1">Unfollow</button></div>
                        </li>                                   
                           
                    </ul>
                </Modal>
                <Button type="link" onClick={showModal}>
                    <div className="userFollow">Following</div>
                </Button>
           
        </div>
        </div>
        </div>
        <div className="userProfileStt">
        <UserPost id={user.id}/>
        <div className="profileIntro">
                <div className="channelIntroWrap">
                    <span className='channelIntroOp'>Profile</span>
                    <br></br><br/>
                    <ul className="introUserList">
                    <li className="introUserItem">
                        <FontAwesomeIcon icon={faCakeCandles} className="introUserIcon" />
                        <span className="introUserItemtext">{user.dob}</span>
                    </li>
                    <li className="introUserItem">
                        <FontAwesomeIcon icon={faHome} className="introUserIcon" />
                        <span className="introUserItemtext">{user.address}</span>
                    </li>
                    {user.role_id === 1 && <li className="introUserItem">
                        <FontAwesomeIcon icon={faGraduationCap} className="introUserIcon"/>
                        <span className="introUserItemtext">User</span>
                    </li>}
                    {user.role_id === 3 && <li className="introUserItem">
                        <FontAwesomeIcon icon={faGraduationCap} className="introUserIcon"/>
                        <span className="introUserItemtext">Company</span>
                    </li>}
                    {user.gender === 1 && <li className="introUserItem">
                        <FontAwesomeIcon icon={faGenderless}  className="introUserIcon" />
                        <span className="introUserItemtext">Male</span>
                    </li>}
                    {user.gender === 2 && <li className="introUserItem">
                        <FontAwesomeIcon icon={faGenderless}  className="introUserIcon" />
                        <span className="introUserItemtext">Female</span>
                    </li>}
                    {user.gender === 3 && <li className="introUserItem">
                        <FontAwesomeIcon icon={faGenderless}  className="introUserIcon" />
                        <span className="introUserItemtext">Other</span>
                    </li>}
                </ul>
                </div>
            </div>
        </div>
         
        </div>
        )}
      </div>
    </>
  )
}
