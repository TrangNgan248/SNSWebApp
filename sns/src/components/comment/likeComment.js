import "./comment.css";
import 'antd/dist/antd.min.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEllipsis } from '@fortawesome/free-solid-svg-icons';


export default function LikeComment(props) {
    const [isLike, setIsLike] = useState(false);
    let comment_id = props.id;

    const userLogin = localStorage.getItem("user")
    let likeComment = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://127.0.0.1:8000/api/auth/likeComment", {
                method: "POST",
                body: JSON.stringify({ comment_id }),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json',
                    "Authorization": 'Bearer ' + localStorage.getItem("access_token"),
                }
            });
            setIsLike(!isLike);
        } catch (err) {
            console.log(err);
        }
    };

    return (

        <li >
            <div className="commentLikeIconHover">
                <FontAwesomeIcon icon={faThumbsUp} className="commentLikeIcon" onClick={likeComment}  style={{ color: isLike ? "blue" : "black" }}/>
                
            </div>
            <div className="commentLikeHide">
                <span className="commentCounterLike"> 10 like</span>
            </div>
        </li>
    )
}

