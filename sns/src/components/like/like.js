import "../post/post.css";
import 'antd/dist/antd.min.css';
import { useState, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'


export default function Like(props) {
    const [isLike, setIsLike] = useState(false);
    let post_id = props.id;

    let like = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://127.0.0.1:8000/api/auth/like", {
                method: "POST",
                body:JSON.stringify({post_id}),
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

    const [likes, setLikes] = useState([]);
    useEffect(() => {
        async function getLike() {
            const likes = await axios.get(`http://127.0.0.1:8000/api/like/${post_id}`)
            console.log(likes.data)
            setLikes(likes.data)
        }
        getLike()
    }, []);
    const count = likes.length;
    return (
        <div className="postLikeIconHover">
            <FontAwesomeIcon icon={faThumbsUp} className="postLikeIcon" onClick={like} style={{ color: isLike ? "blue" : "black" }}  />
            <div className="postLikeHide">
                <span className="postCounterLike"> {count} </span>
            </div>
        </div>

    )

}
