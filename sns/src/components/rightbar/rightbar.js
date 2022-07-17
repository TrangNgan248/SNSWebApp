import "./rightbar.css"
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
export default function Rightbar(){
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
    return(
        <div className="rightbar">
             {/* <ul className="rightbarFollowlist">
                <li className="rightbarOnline">
                    <span className="onlinetext">Online</span>
                </li>
                <li className="rightbarFollow">
                    <img className="rightbarFollowImg" src="/assets/testimg/ayame1.png" alt=""></img>
                    <span className="rightbarFollowName">Ayame-chan</span>
                </li>
                <li className="rightbarFollow">
                    <img className="rightbarFollowImg" src="/assets/testimg/ayame1.png" alt=""></img>
                    <span className="rightbarFollowName">Ayame-chan</span>
                </li>
                <li className="rightbarFollow">
                    <img className="rightbarFollowImg" src="/assets/testimg/ayame1.png" alt=""></img>
                    <span className="rightbarFollowName">Ayame-chan</span>
                </li>
                <li className="rightbarFollow">
                    <img className="rightbarFollowImg" src="/assets/testimg/ayame1.png" alt=""></img>
                    <span className="rightbarFollowName">Ayame-chan</span>
                </li>
                <li className="rightbarFollow">
                    <img className="rightbarFollowImg" src="/assets/testimg/ayame1.png" alt=""></img>
                    <span className="rightbarFollowName">Ayame-chan</span>
                </li>
                <li className="rightbarFollow">
                    <img className="rightbarFollowImg" src="/assets/testimg/ayame1.png" alt=""></img>
                    <span className="rightbarFollowName">Ayame-chan</span>
                </li>
                <li className="rightbarFollow">
                    <img className="rightbarFollowImg" src="/assets/testimg/ayame1.png" alt=""></img>
                    <span className="rightbarFollowName">Ayame-chan</span>
                </li>
                <li className="rightbarFollow">
                    <img className="rightbarFollowImg" src="/assets/testimg/ayame1.png" alt=""></img>
                    <span className="rightbarFollowName">Ayame-chan</span>
                </li>
                <li className="rightbarFollow">
                    <img className="rightbarFollowImg" src="/assets/testimg/ayame1.png" alt=""></img>
                    <span className="rightbarFollowName">Ayame-chan</span>
                </li>
                <li className="rightbarFollow">
                    <img className="rightbarFollowImg" src="/assets/testimg/ayame1.png" alt=""></img>
                    <span className="rightbarFollowName">Ayame-chan</span>
                </li>
                <li className="rightbarFollow">
                    <img className="rightbarFollowImg" src="/assets/testimg/ayame1.png" alt=""></img>
                    <span className="rightbarFollowName">Ayame-chan</span>
                </li>
                <li className="rightbarFollow">
                    <img className="rightbarFollowImg" src="/assets/testimg/ayame1.png" alt=""></img>
                    <span className="rightbarFollowName">Ayame-chan</span>
                </li>
                <li className="rightbarFollow">
                    <img className="rightbarFollowImg" src="/assets/testimg/ayame1.png" alt=""></img>
                    <span className="rightbarFollowName">Ayame-chan</span>
                </li>
                <li className="rightbarFollow">
                    <img className="rightbarFollowImg" src="/assets/testimg/ayame1.png" alt=""></img>
                    <span className="rightbarFollowName">Ayame-chan</span>
                </li>
                <li className="rightbarFollow">
                    <img className="rightbarFollowImg" src="/assets/testimg/ayame1.png" alt=""></img>
                    <span className="rightbarFollowName">Ayame-chan</span>
                </li>
            </ul>
                <Button type="link" onClick={showModal}>
                    <button className="btn"><i className="fa-solid fa-circle-plus"> Follow users</i></button>
                </Button>
                <Modal title="Follow users" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                
                    <ul className="channelList">
                    
                        <li className="Search">
                        
                            <div className="topbarCenter">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="searchicon" />
                                <input type="text" placeholder="Seacrh users" className="searchInput" />
                            </div>
                        </li>
                        
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
                        </ul>
                        
                 
                    </ul>
                    
                </Modal>
             */}
        </div>
    )
}