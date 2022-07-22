import ChannelPost from "../post/channelPost";
import Share from "../share/share"
import "./feed.css";
import { useState,useEffect } from 'react';
import axios from "axios";
export default function Feed(props){
    let channel_id = props.id;
    console.log(channel_id);
    const userLogin = localStorage.getItem("user");
    console.log("userLogin", userLogin);
    var userLog = JSON.parse(userLogin);
    console.log(userLog.role_id);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function getUser() {
            const users = await axios.get("http://127.0.0.1:8000/api/user")
            console.log(users.data)
            console.log(typeof users)
            setUsers(users.data)
        }
        getUser()
    }, []);
    const loguser = users.filter(user => user.id === userLog.id);
    return(
        <div className="feed">
            <div className="feedWrapper">
                {loguser.map((user) => {if(channel_id === 3  && user.role_id === 3)
                    return(
                        <Share id={channel_id}/>
                    )
                    else if(channel_id !== 3  && user.role_id !== 3)
                    return(
                        <Share id={channel_id}/>
                    )
                })}
                <ChannelPost id={channel_id}/>
            </div>
        </div>
    )
}