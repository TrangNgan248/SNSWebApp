import "./post.css";
import 'antd/dist/antd.min.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, Menu, Space, Dropdown } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faThumbsUp, faComment, faBookmark, faGlobe } from '@fortawesome/free-solid-svg-icons'
import Comment from "../../components/comment/comment"
import CommentTest from "../comment/commentTest";

import { Link } from "react-router-dom"
import Like from "../like/like";



export default function Post() {
    // console.log(post)
    const [posts, setPosts] = useState([]);
    const [commentID, setCommentID] = useState(null);
    useEffect(() => {
        async function getAllPost() {
            const posts = await axios.get("http://127.0.0.1:8000/api/post")
            console.log(posts.data)
            setPosts(posts.data)
        }
        getAllPost()
    }, []);



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
    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <div className="detail-Testplace">
                            <Link to="/detail" className="btn btn-primary btn-sm float-end">Detail</Link>
                        </div>

                    ),
                },
                {
                    key: '2',
                    label: (
                        <div className="edit-Testplace">
                            <Link to="/edit" className="btn btn-primary btn-sm float-end">Edit</Link>
                        </div>

                    ),
                },

            ]}
        />
    );


    return (
        <div className="post">
            {
                posts.map((post) =>
                    <div className={`postwrapper ${post.id}`}>
                        <div className="postTop">
                            <div className="postTopLeft">
                                <img
                                    className="postProfileImg"
                                    src="/assets/testimg/Ayame2.jpg"
                                    alt="" />
                                <ul className="postTopLeftList">
                                    <li className="postTopLeftItem1">
                                        {channels.map((channel) => {
                                            if (channel.id === post.channel_id)
                                                return (
                                                    <span className="postFromChannel"> {channel.name} </span>
                                                )
                                        }
                                        )}
                                    </li>
                                    <li className="postTopLeftItem2">
                                        {users.map((user) => {
                                            if (user.id === post.author_id)
                                                return (
                                                    <span className="postUsername">{user.name} </span>
                                                )
                                        }
                                        )}
                                    </li>
                                    <li className="postTopLeftItem3">
                                        <FontAwesomeIcon icon={faGlobe} className="postDateIcon" />
                                        <span className="postDate"> 5 mins ago </span>
                                    </li>

                                </ul>
                            </div>


                            <div className="postTopRight">
                                <Space direction="vertical">
                                    <Space wrap>
                                        <Dropdown overlay={menu} placement="bottom">
                                            <Button><FontAwesomeIcon icon={faEllipsis} className="postTopRightIcon" /></Button>
                                        </Dropdown>

                                    </Space>
                                </Space>

                            </div>
                        </div>
                        <div className="postCenter">
                            <div className="postText">{post.title}</div>
                            <div className="postText">{post.content}</div>
                            <img className="postImg" src={`http://localhost:8000/storage/${post.display}`} alt="Khong hien thi" />
                        </div>

                        <div className={`postBottom ${post.id}`}>
                            <div className="postBottomLeft">
                                <Like id={post.id}/>
                                <div className="postCommentIconHover">
                                    <FontAwesomeIcon icon={faComment} className="postCommentIcon" />
                                </div>

                                <Button type="link" onClick={() => showModal(post.id)}>
                                    Comment
                                </Button>
                                <Modal title="Comment" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                    <CommentTest id={commentID} />
                                    <Comment />
                                </Modal>
                            </div>
                            <div className="postBottomRight">
                                <FontAwesomeIcon icon={faBookmark} className="postBookmarkIcon" />
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
}
