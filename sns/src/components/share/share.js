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
  const channel_id = props.id;
  async function addPost() {
    const author_id = userLog.id;
    const channel_id = props.id;
    let item = { title, content, display }
    console.warn(item)
    const formData = new FormData();
    formData.append('display', display);
    formData.append('content', content);
    formData.append('title', title);
    formData.append('author_id', author_id);
    formData.append('channel_id', channel_id);

    await fetch("http://localhost:8000/api/post/create", {
      // method: 'POST',
      // body: formData
      method: "POST",
      body: formData,
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
            <input type="text" placeholder="  Title" className="shareInput" onChange={(e) => setTitle(e.target.value)} />
            <textarea cols="4" placeholder="  What's in your mind ?" className="shareInput1" onChange={(e) => setContent(e.target.value)} />
          </div>
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <label className="shareOption">
              <FontAwesomeIcon icon={faImage} className="shareIcon" />
              <input type="file" id="mediaShare" placeholder="Picture" className="custom-file-input" onChange={(e) => setDisplay(e.target.files[0])}  />
            </label>
          </div>

          <button onClick={addPost} className="shareButton">Share</button>
        </div>

      </div>
    </div>
  )
}
export default AddPost