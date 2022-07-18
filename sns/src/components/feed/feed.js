import Post from "../post/Post"
import Share from "../share/share"
import "./feed.css"
import { useState, useEffect } from "react";
import axios from "axios";
export default function Feed(props){
    let channel_id = props.id;
    console.log(channel_id);
    
        // console.log(post)
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getAllPost() {
            const posts = await axios.get("http://127.0.0.1:8000/api/post")
            console.log(posts.data)
            setPosts(posts.data)
        }
        getAllPost()
    }, []);
    
    return(
        <div className="feed"> 
            <div className="feedWrapper">
                <Share id={channel_id}/>
                <div className="postSa">
                
                {posts.map((p) => (
                        <Post key={p.id} post={p} />
                ))}
                </div>
                   
                
            </div>
        </div>
    )
}