import "./edit.css"
import Post from "../../components/post/Post"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faUserPlus } from '@fortawesome/free-solid-svg-icons'
export default function Edit(){
    return(
        <>   
         <div className="feed"> 
             <div className="feedWrapper">
                <div className="share">
                     <div className="shareWrapper">
                          <div className="shareTop">

                                 <input placeholder=" New content?" className="shareInput" />


                             </div>
                      <hr className="shareHr" />
                      <div className="shareBottom">
                          <div className="shareOptions">
                                 <div className="shareOption">
                                      <FontAwesomeIcon icon={faImage} className="shareIcon" />
                                        <span className="shareOptionText">Photo or Video</span>
                                 </div>
                                 <div className="shareOption">
                                        <FontAwesomeIcon icon={faUserPlus} className="shareIcon" />
                                        <span className="shareOptionText">Tag</span>
                                </div>
                            </div>
                     </div>
                     </div>
                 </div>
                <Post/>
            </div>
        </div>
           
        </>
    ) 
};