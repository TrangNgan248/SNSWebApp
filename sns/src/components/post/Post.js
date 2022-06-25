import "./post.css"
import 'antd/dist/antd.css';
import { Button, Modal} from 'antd';
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faThumbsUp, faComment, faBookmark, faGlobe } from '@fortawesome/free-solid-svg-icons'
import Comment from "../../components/comment/comment"

export default function Post() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getAllPost(){
            const posts = await axios.get("http://127.0.0.1:8000/api/post")
            console.log(posts.data)
            setPosts(posts.data)
        }
        getAllPost()
    },[])
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    return (
        <div className="post">
        {
            posts.map((post)=>
                <div className="postwrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src="/assets/testimg/Ayame2.jpg"
                            alt="" />
                        <ul className="postTopLeftList">
                            <li className="postTopLeftItem1">
                                <span className="postFromChannel">[From IT Channel] </span>
                            </li>
                            <li className="postTopLeftItem2">

                                <span className="postUsername">{post.title} </span>
                            </li>
                            <li className="postTopLeftItem3">
                                <FontAwesomeIcon icon={faGlobe} className="postDateIcon" />
                                <span className="postDate"> 5 mins ago </span>
                            </li>
                            
                        </ul>
                    </div>


                    <div className="postTopRight">
                        <FontAwesomeIcon icon={faEllipsis} className="postTopRightIcon" />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">ajdshfj</span>
                    <img className="postImg" src="assets/testimg/Ayame2.jpg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <div className="postLikeIconHover">
                            <FontAwesomeIcon icon={faThumbsUp} className="postLikeIcon" />
                        </div>
                        <div className="postLikeHide">
                            <span className="postCounterLike"> 10 like</span>
                        </div>
                        <div className="postCommentIconHover">
                            <FontAwesomeIcon icon={faComment} className="postCommentIcon" />
                        </div>
                        <Button type="link" onClick={showModal}>
                             Comment
                        </Button>
                        <Modal title="Comment" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <Comment/>
                                <Comment/>
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
