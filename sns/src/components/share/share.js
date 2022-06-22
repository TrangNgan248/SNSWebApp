import "./share.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faSortAlphaDownAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

export default function Share() {

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="assets/testimg/Ayame2.jpg" alt="" />

          <input placeholder="What's in your mind ?" className="shareInput" />


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
  );
}