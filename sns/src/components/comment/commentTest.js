
import React, { useState } from 'react';
import "../comment/comment.css";


export default function CommentTest(props) {
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://127.0.0.1:8000/api/auth/comment", {
        method: "POST",
        body: JSON.stringify({
          content: content,
          post_id: props.id
        }),
        headers:{
          "Content-Type":'application/json',
          "Accept":'application/json',
          "Authorization": 'Bearer ' + localStorage.getItem("access_token"),
        }
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setContent("");
        setMessage("Comment created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  
    return (
        <div className="commentInput">
            <img className="commentProfileImg" src="../assets/testimg/Ayame2.jpg" alt="" />
            <input name="content" type="text" placeholder="Enter your comment?" value={content} onChange={(e) => setContent(e.target.value)} className="shareInput" />
            
            <button className="btncomment" type="submit" onClick={handleSubmit}> Submit</button>
            <div className="message">{message ? <p>{message}</p> : null}</div>
        </div>
    )
}