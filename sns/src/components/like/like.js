import "../post/post.css";
import 'antd/dist/antd.min.css';
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'


export default function Like(props) {
    const [isLike, setIsLike] = useState(false);
    let post_id = props.id;
    // http://127.0.0.1:8000/api/auth/like
    // Mấy cái url này làm 1 file constrant xong ghi vào chứ đừng viết như này
    // const apiPath = 'http://127.0.0.1:8000/'
    //  fetch(apiPath+"/api/auth/like",

    // Console.log xong thì xoá đi
    // Quy ước tên file component luôn viết hoa chữ cái đầu tiên
    let userLogin = localStorage.getItem("user")
    userLogin = JSON.parse(userLogin);
    const callApiLike = () => {
        fetch("http://127.0.0.1:8000/api/auth/like", {
            method: "POST",
            body: JSON.stringify({ post_id }),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json',
                "Authorization": 'Bearer ' + localStorage.getItem("access_token"),
            }
        });
    }
   
    let handleClick = (e) => {
        e.preventDefault();
        setIsLike(!isLike);
        callApiLike();
        setLikes(currentLikes => {
            if(isLike) {
                return --currentLikes;
            } 
            return  ++currentLikes;
        })
    }
    const [likes, setLikes] = useState(0);
    useEffect(() => {
        async function getLike() {
            const likeDatabase = await axios.get(`http://127.0.0.1:8000/api/like/${post_id}`)
            if(likeDatabase.data) {
                let listUserLike = likeDatabase.data;
                for(let likeUser of listUserLike) {
                    if(likeUser.user_id == userLogin.id) {
                       
                        setIsLike(true);
                        break;
                    }
                }
                setLikes(likeDatabase.data.length)
            }
 
        }
        getLike()


    }, []);



    return (
        <div>
            <div class="postLikeIconHover">
                <FontAwesomeIcon icon={faThumbsUp} className="postLikeIcon" onClick={handleClick} style={{ color: isLike ? "blue" : "black" }}  />
                {likes} like 
            </div>
            
                
        </div>
    )

}
