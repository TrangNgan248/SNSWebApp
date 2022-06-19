import Post from "../post/Post"
import Share from "../share/share"
import "./feed.css"
export default function Feed(){
    return(
        <div className="feed"> 
            <div className="feedWrapper">
                <Share/>
                <Post/>
            </div>
        </div>
    )
}