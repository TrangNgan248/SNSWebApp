import "./comment.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { Button, Menu, Space, Dropdown } from 'antd';
import LikeComment from "./likeComment";

export default function Comment(props) {
    const [isLike, setIsLike] = useState(false);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        async function getComment() {
            const comments = await axios.get(`http://127.0.0.1:8000/api/comment/${props.id}`)
            setComments(comments.data)
        }
        getComment()
    }, [])
let id = props.id;
console.log(id);
useEffect(() => {
    async function getComment() {
        const comments = await axios.get(`http://127.0.0.1:8000/api/comment/${id}`)
        console.log(comments.data)
        setComments(comments.data)
    }
    getComment()
}, []);
const [content, setContent]= useState("");
async function editComment(cmid) {
    let item = {content}
    console.warn(item)
    const formData = new FormData();
    formData.append('content', content);
    await fetch(`http://127.0.0.1:8000/api/comment/edit/${cmid}`, {
        method: 'POST',
        body: formData,
    });
    alert("Data has been updated");
}
const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/comment/${id}`)
.then((response)=>{
  console.log(response.data);
  alert("Data has been deleted");
})
.catch((err) => console.error(err.response.data.errors));
};

const [users, setUsers] = useState([]);
useEffect(() => {
    async function getUser() {
        const users = await axios.get("http://127.0.0.1:8000/api/user")
        console.log(users.data)
        setUsers(users.data)
    }
    getUser()
}, []);

  return (

        <div className="comment">
            {
            comments.map((comment) =>
          <div className="commentLeft">
            {users.map((user) => {
                if (user.id === comment.user_id)
                    return (
            <img
              className="commentProfileImg"
              src={`http://localhost:8000/storage/${user.img}`}
              alt="" />
              )
            }
            )}
            <div className="commentCenter">
                 <ul className="commentItemList">
                            <li>
                                <span className="commentUsername">Tuan Anh </span>
                            </li>
                            <li >
                                <span> {comment.content} </span>
                            </li>

                            
                        </ul>
                        <div >
                                <div className="commentLikeIconHover">
                                 <FontAwesomeIcon icon={faThumbsUp} className="commentLikeIcon" onClick={()=>{setIsLike(!isLike)
                                 }}  style={{color: isLike? "blue": "black"}}  />
                                </div>
                                <div className="commentLikeHide">
                                 <span className="commentCounterLike"> 10 like</span>
                                </div>
                            </div>
            </div>
            <div className="commentTopRight">
            <Space direction="vertical">
                                    <Space wrap>
                                        <Dropdown overlay={<Menu
                                                    items={[
                                                        {
                                                            key: '1',
                                                            label: (
                                                                <div className="edit-Testplace">
                                                                    <Button> Edit </Button>
                                                                </div>

                                                            ),
                                                        },
                                                        {
                                                            key: '2',
                                                            label: (
                                                                <div className="delete-Testplace">
                                                                    <button type="submit" onClick={() => handleDelete(comment.id)}>DELETE</button>
                                                                </div>

                                                            ),
                                                        },

                                                    ]}
                                                />} placement="bottom">
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