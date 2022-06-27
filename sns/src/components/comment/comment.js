import "./comment.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
export default function Comment() {
const [isLike, setIsLike] = useState(false);
const [comments, setComments] = useState([]);
let id = 1
useEffect(() => {
    async function getComment() {
        const comments = await axios.get(`http://127.0.0.1:8000/api/comment/${id}`)
        console.log(comments.data)
        setComments(comments.data)
    }
    getComment()
}, [])
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
                       

            </div>
           )}
        </div>
  )
}