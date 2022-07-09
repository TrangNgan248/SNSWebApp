import "./sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from "react";
import axios from "axios";
import { faHome, faCircleUser, faBookBookmark, faUserGroup, faAngleDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
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

                <div className="sidebarShowmore">
                    <FontAwesomeIcon icon={faAngleDown} />
                    <a href="/#" className="showmore">Show more</a>
                </div>
                <hr className="sidebarHr"></hr>
                <Button type="link" onClick={showModal}>
                    <button className="btn"><i className="fa-solid fa-circle-plus"> Join new channels</i></button>
                </Button>
                <Modal title="Join New Channel" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                    <ul className="channelList">
                        <li className="Search">
                            <div className="topbarCenter">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="searchicon" />
                                <input placeholder="Seacrh channel" className="searchInput" />
                            </div>
                        </li>
                        <li className="channelSeekItem">
                            <Checkbox onChange={onChange} className="checkBox" ></Checkbox>
                            <img src="assets/testimg/it.png" alt="" className="channelImg"></img>
                            <span className="channelName">IT</span>
                        </li>
                        <li className="channelSeekItem">
                            <Checkbox onChange={onChange} className="checkBox"></Checkbox>

                            <img src="assets/testimg/sunlogo.jpg" alt="" className="channelImg"></img>
                            <span className="channelName">Jobfair</span>
                        </li>
                        <li className="channelSeekItem">
                            <Checkbox onChange={onChange} className="checkBox"></Checkbox>

                            <img src="assets/testimg/nihon.png" alt="" className="channelImg"></img>
                            <span className="channelName">Nihongo</span>
                        </li>

                    </ul>
                    <div className="sidebarShowmore">
                        <FontAwesomeIcon icon={faAngleDown} />
                        <a href="/#" className="showmore">Show more</a>
                    </div>
                    <button className="btn"> Join</button>
                </Modal>

            </div>
        </div>
    )
}