import "./share.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import axios from "axios";
function AddPost(props) {
  const [title, setTitle] = useState("");
  const [display, setDisplay] = useState("");
  const [content, setContent] = useState("");
  const userLogin = localStorage.getItem("user");
  // console.log("userLogin", userLogin);
  var userLog = JSON.parse(userLogin);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUser() {
      const users = await axios.get("http://127.0.0.1:8000/api/user")
      console.log(users.data)
      console.log(typeof users)
      setUsers(users.data)
    }
    getUser()
  }, []);
  const loguser = users.filter(user => user.id === userLog.id);
  // console.log("loguser", loguser);
  let channel_id = props.id;
  async function addPost() {
    let item = { title, content, display }
    console.warn(item)
    const formData = new FormData();
    formData.append('display', display);
    formData.append('content', content);
    formData.append('title', title);

    await fetch("http://localhost:8000/api/auth/post/create", {
      // method: 'POST',
      // body: formData
      method: "POST",
      body: JSON.stringify({
        title: title,
        content: content,
        display: display,
        channel_id: props.id
      }),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
        "Authorization": 'Bearer ' + localStorage.getItem("access_token"),
      }
    });
    alert("Data has been saved")
  }

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          {loguser.map((user) =>
            <img className="shareProfileImg" src={`http://localhost:8000/storage/${user.img}`} alt="" />
          )}
          <div className="shareBox">
            <input type="text" placeholder="Title" className="shareInput" onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="What's in your mind ?" className="shareInput1" onChange={(e) => setContent(e.target.value)} />
            <input type="file" placeholder="Picture" className="shareInput2" onChange={(e) => setDisplay(e.target.files[0])} />
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