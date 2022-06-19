import "./post.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsis,faThumbsUp,faThumbsDown,faComment,faBookmark, faGlobe} from '@fortawesome/free-solid-svg-icons'
export default function Post(){
    return(
        <div className="post">
            <div className="postwrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                         <img
                                className="postProfileImg"
                                src="/assets/testimg/Ayame2.jpg" 
                                alt=""/>
                        <ul className="postTopLeftList"> 
                            <li className="postTopLeftItem1">
                                <span className="postFromChannel">[From IT Channel] </span> 
                            </li>
                            <li className="postTopLeftItem2">
                                
                                <span className="postUsername">Nakiri Ayame </span>   
                            </li>
                            <li className="postTopLeftItem3">
                                <FontAwesomeIcon icon={faGlobe} className="postDateIcon" />                
                                <span className="postDate"> 5 mins ago </span>   
                            </li>
                                   
                        </ul>       
                    </div>


                    <div className="postTopRight">
                    <FontAwesomeIcon icon={faEllipsis} className="postTopRightIcon" />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! its my first post</span>
                    <img className="postImg" src="assets/testimg/Ayame2.jpg" alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                    <div className="postLikeIconHover">
                    <FontAwesomeIcon icon={faThumbsUp} className="postLikeIcon" />
                    </div>
                    <div className="postLikeHide">
                        <span className="postCounterLike"> 10 like</span>
                    </div>
                    <div className="postUnlikeIconHover">
                    <FontAwesomeIcon icon={faThumbsDown} className="postUnlikeIcon" />
                    </div>
                    <div className="postUnlikeHide">
                        <span className="postCounterUnlike"> 10 Unlike</span>
                    </div>
                    <div className="postCommentIconHover">
                    <FontAwesomeIcon icon={faComment} className="postCommentIcon" />
                    </div>
                    <div className="postCommentHide">
                        <span className="postCounterComment"> 10 Comment</span>
                    </div>
                   
                    </div>
                    <div className="postBottomRight">
                    <FontAwesomeIcon icon={faBookmark} className="postBookmarkIcon" />
                    </div>
                </div>
            </div>
        </div>
    )
}