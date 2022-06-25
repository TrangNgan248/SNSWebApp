import "./share.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from "antd";


export default function Share() {

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="assets/testimg/Ayame2.jpg" alt="" />
          <div className="shareBox">
          <input placeholder="Title" className="shareInput" />
          <input placeholder="What's in your mind ?" className="shareInput1" />
          <input placeholder="Picture" className="shareInput2" />
          </div>

        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <FontAwesomeIcon icon={faImage} className="shareIcon" />
              <button className="shareOptionText">Photo or Video</button>
            </div>
            <div className="shareOption">
              <FontAwesomeIcon icon={faUserPlus} className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
       
      </div>
    </div>
  );
}