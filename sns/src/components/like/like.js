import "../post/post.css";
import 'antd/dist/antd.min.css';
import { useState, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'


export default function Like(props) {
    const [isLike, setIsLike] = useState(false);
    let post_id = props.id;

    const userLogin = localStorage.getItem("user");
    var userLog = JSON.parse(userLogin);
    const [liked, setLiked] = useState(false);
    useEffect(() => {
        async function Liked(){
            const liked = await axios.get(`http://127.0.0.1:8000/api/like/${post_id}/${userLog.id}`)
            console.log(liked.data)
            setLiked(liked.data)
        }
        Liked()
    }, []);
    let like = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://127.0.0.1:8000/api/auth/like", {
                method: "POST",
                body: JSON.stringify({ post_id }),
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
            const likeDatabase = await axios.get(`http://127.0.0.1:8000/api/like/${post_id}`)
            // console.log("likeDatabase", likeDatabase.data)

            setLikes(likeDatabase.data)
            let likeByUser = {}
            // console.log("userLogin",userLogin);
            for (let index = 0; index < likes?.length; index++) {
                // console.log("item",likes[index]);
                if (likes[index].user_id !== userLogin.id) {
                    // likeByUser = likes[index].user_id;
                    // console.log("abc");
                    break;

                }

            }
            // const likeByUser = likes?.find(item => item.user_id === userLogin.id)
            // console.log("likeByUser", likeByUser);
        }
        getLike()

        // console.log("localStor", localStorage.getItem("user"));
    }, []);



    const count = likes.length;
    const isliked = liked;
    console.log("isliked", isliked);
    return (
        <div>
            <div class="postLikeIconHover">
                <FontAwesomeIcon icon={faThumbsUp} className="postLikeIcon" onClick={like} style={{ color: isliked || isLike ? "blue" : "black" }}  />
            </div>
            <div class="postLikeHide">
                <span class="postCounterLike"> {count} like </span>
            </div>
        </div>
    )

}
