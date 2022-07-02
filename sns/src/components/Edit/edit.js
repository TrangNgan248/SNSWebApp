import "./edit.css"
import Post from "../../components/post/Post"
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"
export default function Edit(props){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getAllPost() {
            const posts = await axios.get("http://127.0.0.1:8000/api/post")
            console.log(posts.data)
            setPosts(posts.data)
        }
        getAllPost()
    }, []);
    const location = useLocation();
    const state = location.state;
    let post_id = state.id;
    console.log(state.id);
    const [id, setID]= useState(post_id);
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
            {posts.map((post) => {
                if (post.id === id) 
                return (
         <div className="feed"> 
             <div className="feedWrapper">
                <div className="share">
                     <div className="shareWrapper">
                          <div className="shareTop">
                                 <input type="text" placeholder="Title" className="shareInput" name="title" defaultValue={post.title} onChange={(e) =>setTitle(e.target.value)} />
                                 <input type="text" placeholder="What's in your mind ?" className="shareInput1" name="content" defaultValue={post.content} onChange={(e) =>setContent(e.target.value)} />
                                 <input type="file" placeholder="Picture" className="shareInput2" onChange={(e) =>setDisplay(e.target.files[0])}/>
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
        )})}
    </div>
    
    )
};