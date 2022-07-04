import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import Post from '../../components/post/Post'
import Topbar from '../../components/topbar/Topbar'
import "./profile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faCircleUser,faGraduationCap,faHeart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export default function profile() {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Sidebar/>
        <div className="profileContentAll">
        <div className="navProfile">
        <div className='avatarProfileWrap'>
            <div className="bgDiv">
                <img className='bgImg' src='assets/testimg/Yasuo_0.jpg'></img>
            </div>
            <div className="avaProfileDiv">
                <img className='avaProfileImg' src='assets/testimg/ngot logo.jpg'></img>
            </div>
        </div>
        <div className='UserIntro1'>
            <p className="nameUser">Hasagi 15GG</p>
            <p className='shortIntroUser'>Death is like the wind, alaways by my side</p>
            <hr/>
        <div class="userFollowNav">
            <Link to="/profile"><div className='userFollow'>Post</div></Link>
            <div className='userFollow'>Follower</div>
            <div className='userFollow'>Following</div>
        </div>
        </div>
        </div>
        <div className="userProfileStt">
        <Post/>
        <div className="profileIntro">
                <div className="channelIntroWrap">
                    <span className='channelIntroOp'>Profile</span>
                    <br></br>
                    <ul className="introUserList">
                    <li className="introUserItem">
                        <FontAwesomeIcon icon={faHome} className="introUserIcon" />
                        <span className="introUserItemtext">No where in Ionia</span>
                    </li>
                    <li className="introUserItem">
                        <FontAwesomeIcon icon={faGraduationCap} className="introUserIcon"/>
                        <span className="introUserItemtext">Expelled from Ionia academy</span>
                    </li>
                    <li className="introUserItem">
                        <FontAwesomeIcon icon={faHeart}  className="introUserIcon" />
                        <span className="introUserItemtext">Single</span>
                    </li>
    
                    
                </ul>
                </div>
            </div>
        </div>
         
        </div>
        
      </div>
    </>
  )
}
