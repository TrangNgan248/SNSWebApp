import "./sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from "react";
import axios from "axios";
import { faHome, faCircleUser, faBookBookmark, faUserGroup, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { Button, Modal, Checkbox } from 'antd';

export default function Sidebar() {
    const [channels, setChannels] = useState([]);
    useEffect(() => {
        async function getAllChannel() {
            const channels = await axios.get("http://127.0.0.1:8000/api/channel")
            console.log(channels.data)
            setChannels(channels.data)
        }
        getAllChannel()
    }, []);
    const [searchchannel, setData] = useState([])
    async function SearchChannel(key) {
        console.warn(key)
        let result = await fetch("http://localhost:8000/api/SearchChannel/"+key);
        result= await result.json();
        setData(result)
        
    }  
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
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <Link to="/">
                        <FontAwesomeIcon icon={faHome} className="sidebarIcon" />   
                        <span className="sidebarItemtext">Menu</span></Link>
                    </li>
                    <li className="sidebarItem">
                        <Link to="/profile">
                            <FontAwesomeIcon icon={faCircleUser} className="sidebarIcon" />
                            <span className="sidebarItemtext">Profile</span></Link>
                    </li>
                    <li className="sidebarItem">
                        <FontAwesomeIcon icon={faBookBookmark} className="sidebarIcon" />
                        <span className="sidebarItemtext">Bookmark</span>
                    </li>
                    <li className="sidebarItem">
                        <FontAwesomeIcon icon={faUserGroup} className="sidebarIcon" />
                        <span className="sidebarItemtext">Channel</span>
                    </li>
                </ul>
                {
                    channels.map((channel) =>
                    <ul className="channelList">
                        <li className="channelItem">
                            <Link to={`/channel/${channel.id}`}>
                                <img src="assets/testimg/it.png" alt="" className="channelImg"></img>
                                <span className="channelName">{channel.name}</span></Link>
                        </li>
                    </ul>
                    ) 
                }
                <hr className="sidebarHr"></hr>
                <ul className="sidebarList">
                    <li className="sidebarSearchItem">
                            <Button type="link" onClick={showModal}>
                            <button className="btn"><i className="fa-solid fa-circle-plus"> Join new channels</i></button>
                        </Button>
                        <Modal title="Join New Channel" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        
                            <ul className="channelList">
                            
                                <li className="Search">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="searchicon" />
                                    <div className="topbarCenter">
                                        <input type="text" onChange = {(e)=>SearchChannel(e.target.value)} placeholder="Seacrh channel" className="searchInput" />
                                    </div>
                                </li>
                                {searchchannel.map((get)=>  
                                
                                <div className="channelSeekItem">
                                    <Checkbox onChange={onChange} className="checkBox" ></Checkbox>
                                    <img src="assets/testimg/it.png" alt="" className="channelImg"></img>
                                    <span className="channelName">{get.name}</span>
                                </div>
                                
                            )} 
                            </ul>
                            
                            <button className="btn"> Join</button>
                        </Modal>
                    </li>
                    <li className="sidebarSearchItem">
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
                    </li>
                </ul>
                
                
            </div>
        </div>
    )
}