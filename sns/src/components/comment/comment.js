import "./comment.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { Button, Menu, Space, Dropdown} from 'antd';
export default function Comment(props) {

const [isLike, setIsLike] = useState(false);
const [comments, setComments] = useState([]);
let id = props.id;
console.log(id);
useEffect(() => {
    async function getComment() {
        const comments = await axios.get(`http://127.0.0.1:8000/api/comment/${id}`)
        console.log(comments.data)
        setComments(comments.data)
    }
    getComment()
}, [])
const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <div className="delete-Testplace">
                        <Button> Delete </Button>
                    </div>

                ),
            },
            {
                key: '2',
                label: (
                    <div className="edit-Testplace">
                        <Button> Edit </Button>
                    </div>


                ),
            },

        ]}
    />
);
  return (

        <div className="comment">
            {
                comments.map((comment) =>
          <div className="commentLeft">
            <img
              className="commentProfileImg"
              src="/assets/testimg/Ayame2.jpg"
              alt="" />
            <div className="commentCenter">
                 <ul className="commentItemList">
                            <li >
                                <span> {comment.content} </span>
                            </li>
                            <li >
                                <div className="commentLikeIconHover">
                                 <FontAwesomeIcon icon={faThumbsUp} className="commentLikeIcon" onClick={()=>{setIsLike(!isLike)
                                 }}  style={{color: isLike? "blue": "black"}}  />
                                </div>
                                <div className="commentLikeHide">
                                 <span className="commentCounterLike"> 10 like</span>
                                </div>
                            </li>
                            
                        </ul>
               
            </div>
            <div className="commentTopRight">
                                <Space direction="vertical">
                                    <Space wrap>
                                        <Dropdown overlay={menu} placement="bottom">
                                            <Button><FontAwesomeIcon icon={faEllipsis} className="commentTopRightIcon" /></Button>
                                        </Dropdown>

                                    </Space>
                                </Space>

                            </div>

            </div>
           )}
        </div>
  )
}