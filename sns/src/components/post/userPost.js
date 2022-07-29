import "./post.css";
import 'antd/dist/antd.min.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, Menu, Space, Dropdown } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faComment, faBookmark, faGlobe } from '@fortawesome/free-solid-svg-icons'
import Comment from "../../components/comment/comment"
import CommentTest from "../comment/commentTest";

import { Link } from "react-router-dom"
import Like from "../like/like";


export default function UserPost(props) {
    // console.log(post)
    const [isShow,setIsShow] = useState(false);
    const handleClick = () => {
        setIsShow(!isShow);
    }
    let userid = props.id;
    const [posts, setPosts] = useState([]);
    const [commentID, setCommentID] = useState(null);
    useEffect(() => {
        async function getAllPost() {
            const posts = await axios.get(`http://127.0.0.1:8000/api/post/user/${userid}`)
            console.log(posts.data)
            setPosts(posts.data)
        }
        getAllPost()
    }, []);

    const userLogin = localStorage.getItem("user");
    var userLog = JSON.parse(userLogin);

    const [channels, setChannels] = useState([]);
    useEffect(() => {
        async function getChannel() {
            const channels = await axios.get("http://127.0.0.1:8000/api/channel")
            console.log(channels.data)
            setChannels(channels.data)
        }
        getChannel()
    }, []);

    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function getUser() {
            const users = await axios.get("http://127.0.0.1:8000/api/user")
            console.log(users.data)
            setUsers(users.data)
        }
        getUser()
    }, []);


    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = (id) => {
        setIsModalVisible(true);
        setCommentID(id);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/post/${id}`)
    .then((response)=>{
    //   console.log(response.data);
      alert("Data has been deleted");
   })
    .catch((err) => console.error(err.response.data.errors));
    };
    
    return (
        
        <div className="post">
            {
                posts.map((post) =>
                    <div className={`postwrapper ${post.id}`}>
                        <div className="postTop">
                            <div className="postTopLeft">
                            {users.map((user) => {
                                if (user.id === post.author_id)
                                    return (
                                <Link to="/otherprofile" state ={user}>
                                <img
                                    className="postProfileImg"
                                    src={`http://localhost:8000/storage/${user.img}`}
                                    alt="" /></Link>
                                    )
                                }
                                )}
                                <ul className="postTopLeftList">
                                    <li className="postTopLeftItem1">
                                        {
                                            channels.map((channel) => {
                                            if (channel.id === post.channel_id)
                                                return (
                                                    <span className="postFromChannel">[ From Channel {channel.name}]</span>
                                                )
                                        }
                                        )}
                                    </li>
                                    <li className="postTopLeftItem2">
                                        {/*sưa R Thuưia iện mà
                                          */}
                                        {users.map((user) => {
                                            if (user.id === post.author_id)
                                                return (
                                                    <span className="postUsername">{user.name} </span>
                                                )
                                        }
                                        )}
                                    </li>
                                    <li className="postTopLeftItem3">
                                
                                        <span className="postDate"> {post.created_at} </span>
                                        <FontAwesomeIcon icon={faGlobe} className="postDateIcon" />
                                    </li>

                                </ul>
                            </div>


                            <div className="postTopRight">
                                {post.author_id === userLog.id && <Space direction="vertical">
                                    <Space wrap>
                                        <Dropdown overlay={<Menu
                                                    items={[
                                                        {
                                                            key: '1',
                                                            label: (
                                                                <div className="edit-Testplace">
                                                                    <Link to="/edit" state={post} className="btn btn-primary btn-sm float-end">Edit</Link>
                                                                </div>

                                                            ),
                                                        },
                                                        {
                                                            key: '2',
                                                            label: (
                                                                <div className="delete-Testplace">
                                                                    <button type="submit" className="btn btn-primary btn-sm" onClick={() => handleDelete(post.id)}>DELETE</button>
                                                                </div>

                                                            ),
                                                        },

                                                    ]}
                                                />} placement="bottom">
                                            <FontAwesomeIcon icon={faEllipsis} className="postTopRightIcon" />
                                        </Dropdown>

                                    </Space>
                                </Space>}

                            </div>
                        </div>
                        <div className="postCenter">
                            <div className="postText1">{post.title}</div>
                            <div className="postText">{post.content}</div>
                            <img className="postImg" src={`http://localhost:8000/storage/${post.display}`} alt="Khong hien thi" />
                        </div>

                        <div className={`postBottom ${post.id}`}>
                            <div className="postBottomLeft">
                                <Like id={post.id}/>
                                <div className="postCommentIconHover">
                                    <FontAwesomeIcon icon={faComment} className="postCommentIcon" onClick={handleClick} />
                                </div>   
                                    {/* <div className={`${isShow ? "menuactive" : "menuinactive"}`}>
                                                        <span>Hello</span>
                                        </div>                           */}
                                
                                
                            </div>
                            <div className="postBottomRight">
                                <FontAwesomeIcon icon={faBookmark} className="postBookmarkIcon" />
                            </div> 
                        </div> 
                            <CommentTest id={post.id} />
                            <Comment id={post.id}/>
                    </div>
                )}
                
        </div> 
        
    );
}