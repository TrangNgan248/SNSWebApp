import "./comment.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function Comment(props) {
  
  return (
        <div className="comment">
          <div className="commentLeft">
            <img
              className="commentProfileImg"
              src="/assets/testimg/Ayame2.jpg"
              alt="" />
            <div className="commentCenter">
              <ul className="commentItemList">
                <li >
                  <span> ABC </span>
                </li>
                <li >
                  <div className="commentLikeIconHover">
                    <FontAwesomeIcon icon={faThumbsUp} className="commentLikeIcon" />
                  </div>
                  <div className="commentLikeHide">
                    <span className="commentCounterLike"> 10 like</span>
                  </div>
                </li>

              </ul>
            </div>

          </div>
        </div>

  )
}