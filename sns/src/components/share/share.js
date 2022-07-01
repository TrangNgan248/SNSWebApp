import "./share.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from "antd";
import {useState} from 'react'
function AddPost(){
  const [title, setTitle]= useState("");
  const [display, setDisplay] = useState("");
  const [content, setContent] = useState("");

    async function addPost(){ 

    let item = {title,content,display}
    console.warn(item)
    const formData = new FormData();
    formData.append('display', display);
    formData.append('content', content);
    formData.append('title', title);

    await fetch("http://localhost:8000/api/post/create" , {
        method: 'POST',
        body: formData
    });
    alert("Data has been saved")
  }

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="assets/testimg/Ayame2.jpg" alt="" />
          <div className="shareBox">
            <input type="text" placeholder="Title" className="shareInput" onChange={(e) =>setTitle(e.target.value)}  />
            <input type="text" placeholder="What's in your mind ?" className="shareInput1" onChange={(e) =>setContent(e.target.value)} />
            <input type="file" placeholder="Picture" className="shareInput2" onChange={(e) =>setDisplay(e.target.files[0])}/>
            <button onClick={addPost} className="shareButton">Share</button>
          </div>
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <FontAwesomeIcon icon={faImage} className="shareIcon" />
              <button className="shareOptionText">Media</button>
            </div>
            <div className="shareOption">
              <FontAwesomeIcon icon={faUserPlus} className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
          </div>
          
          <button onClick={addPost} className="shareButton">Share</button>
        </div>
       
      </div>
    </div>
  )
}
export default AddPost