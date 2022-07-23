import "./sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from "react";
import axios from "axios";
import { faHome, faCircleUser, faBookBookmark, faUserGroup, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { Button, Modal, Checkbox } from 'antd';
import { useParams } from 'react-router-dom'
import Follow from "../follow/follow";

export default function Sidebar() {
    const userLogin = localStorage.getItem("user");
    console.log("userLogin", userLogin);
    var userLog = JSON.parse(userLogin);
    console.log(userLog.id);
    const [channels, setChannels] = useState([]);
    const [isActive,setIsActive] = useState(false);
    const [buttonText,setButtonText]=useState(false);
    const {id} = useParams();
        let channel_id = id;
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
        }
    function click(){
        setButtonText(current=> !current);
    }
    const HandleClick=()=>{
        setIsActive(current=> !current);
    }
    useEffect(() => {
        async function getAllChannel() {
            const channels = await axios.get(`http://127.0.0.1:8000/api/channel/user/${userLog.id}`)
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
    const [searchUser, Data] = useState([])
    async function SearchUser(key) {
        console.warn(key)
        let result = await fetch("http://localhost:8000/api/SearchUser/"+key);
        result= await result.json();
        Data(result)
        
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

    const [isVisible, setIsVisible] = useState(false);
    const showVisibles = (id) => {
        setIsVisible(true);
    };
    const handOk = () => {
        setIsVisible(false);
    };

    const handCancel = () => {
        setIsVisible(false);
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
                            <Link to={`/channel/${channel.id}`} state={channel}>
                                <img src={`http://localhost:8000/storage/${channel.img}`} alt="" className="channelImg"></img>
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
                                    <Link to={`/channel/${get.id}`} state={get}>
                                    <img src={`http://localhost:8000/storage/${get.img}`}  alt="" className="channelImg"></img>
                                    </Link>
                                    <div className="listFollowUser">
                                    <span className="channelName">{get.name}</span>
                                    </div>
                                    <button className="btnjoin" onClick={() => { join(); click()}} style={{ color: buttonText ? "black" : "white" }}> {`${buttonText? "Join":"Joined"}`}</button>
                                  
                                </div>
                            )} 
                            </ul>
                            
                            {/* //<button className="btn"> Join</button> */}
                        </Modal>
                    </li>
                    <li className="sidebarSearchItem">
                            <Button type="link" onClick={showVisibles}>
                            <button className="btn"><i className="fa-solid fa-circle-plus"> Follow users</i></button>
                        </Button>
                        <Modal title="Follow users" visible={isVisible} onOk={handOk} onCancel={handCancel}>
                        
                            <ul className="channelList">
                            
                                <li className="Search">
                                
                                    <div className="topbarCenter">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className="searchicon" />
                                        <input type="text" onChange = {(e)=>SearchUser(e.target.value)} placeholder="Seacrh users" className="searchInput" />
                                    </div>
                                </li>
                                {searchUser.map((get)=>  
                                    <ul className="channelList">
                                <li className="channelSeekItem">  
                                    <img className="channelImg" src={`http://localhost:8000/storage/${get.img}`}></img>
                                    <div className="listFollowUser">
                                    <span className="channelName">{get.name}</span>
                                    {/* <div className='followButton'><button className="btn1">Unfollow</button></div> */}
                                    </div>
                                        <Follow id={get.id}/>
                                   
                                  
                                    
                                </li>
                                {/* <li className="channelSeekItem">        
                                    <img src="assets/testimg/ayame2.jpg" alt="" className="channelImg"></img>
                                    <span className="channelName">Ayame2</span>
                                    <div className='followButton'><button className="btn">Follow</button></div>
                                </li> */}
                                </ul>
                                )} 
                        
                            </ul>
                            
                        </Modal>
                    </li>
                </ul>
                
                
            </div>
        </div>
    )
}