import Post from "../post/Post"
import "./feed.css"
export default function Feed(){
    return(
        <div className="feed"> 
            <div className="feedWrapper">
                <Post/>
            </div>
        </div>
    )
}