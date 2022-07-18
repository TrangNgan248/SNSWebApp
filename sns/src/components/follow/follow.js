import "../sidebar/sidebar.css";
import 'antd/dist/antd.min.css';
import { useState, useEffect } from "react";
import axios from "axios";

export default function Follow(props) {
    const [isFollow, setIsFollow] = useState(false);
    let user_id = props.id;
    const [buttonText,setButtonText]=useState(false);
    function click(){
        setButtonText(current=> !current);
    }
    const userLogin = localStorage.getItem("user")
    let follow = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://127.0.0.1:8000/api/auth/follow", {
                method: "POST",
                body: JSON.stringify({ user_id }),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json',
                    "Authorization": 'Bearer ' + localStorage.getItem("access_token"),
                }
            });
            setIsFollow(!isFollow);
        } catch (err) {
            console.log(err);
        }
    };

    const [follows, setFollows] = useState([]);
    useEffect(() => {
        async function getFollow() {
            const followDatabase = await axios.get(`http://127.0.0.1:8000/api/follow/${user_id}`)


            setFollows(followDatabase.data)
            let followByUser = {}

            for (let index = 0; index < follows?.length; index++) {

                if (follows[index].user_id !== userLogin.id) {

                    break;

                }

            }

        }
        getFollow()

    }, []);



    return (
        <div>
            <div class="followButton">
                
                {/* <FontAwesomeIcon icon={faThumbsUp} className="postLikeIcon" onClick={follow} style={{ color: isLike ? "blue" : "black" }}  /> */}

                <button className="btn"  onClick={() => { follow(); click()}} style={{ color: buttonText ? "black" : "white" }} >{`${buttonText? "UnFollow":"Follow"}`}</button>
            </div>
        </div>
    )

}
