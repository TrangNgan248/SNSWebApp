import Post from "../post/Post"
import Share from "../share/share"
import "./feed.css"
export default function Feed(props){
    let channel_id = props.id;
    console.log(channel_id);
    return(
        <div className="feed"> 
            <div className="feedWrapper">
                <Share id={channel_id}/>
                <Post/>
            </div>
        </div>
    )
}