import "./edit.css"
import Post from "../../components/post/Post"
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from "react-router-dom";
export default function Edit(){
    const location = useLocation();
    let postid = location.state;
    console.log(location.state);
    const [id, setID]= useState(postid);
    const [title, setTitle]= useState("");
    const [display, setDisplay] = useState("");
    const [content, setContent] = useState("");
      async function editPost(){ 
  
      let item = {id, title,content,display}
      console.warn(item)
      const formData = new FormData();
      formData.append('display', display);
      formData.append('content', content);
      formData.append('title', title);
      await fetch(`http://localhost:8000/api/post/edit/${id}` , {
          method: 'POST',
          body: formData
      });
      alert("Data has been updated");
    }
    return(
        <div>
         <div className="feed"> 
             <div className="feedWrapper">
                <div className="share">
                     <div className="shareWrapper">
                          <div className="shareTop">
                                 <input type="text" placeholder="Title" className="shareInput" onChange={(title) =>setTitle(title.target.value)} />
                                 <input type="text" placeholder="What's in your mind ?" className="shareInput1" onChange={(content) =>setContent(content.target.value)} />
                                 <button onClick={editPost} className="btn btn-primary">post </button>
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
            </div>
        </div>
           
    </div>
    )
};