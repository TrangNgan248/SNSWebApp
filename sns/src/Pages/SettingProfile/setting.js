import Topbar from '../../components/topbar/Topbar'
import "./setting.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faImage,faCircleUser,faLock,faGear,faTrash} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
export default function Setting() {
    const [tab,useTab]= useState(1);
    const Action=(index)=>{
        useTab(index);
    };
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
    setIsHovering(true);
  };

    const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
   <>
   <Topbar/>
   <div className="homeContainer">
    <div className="sidebarSetting">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li onClick={()=>Action(1)} className={`${tab===1? "sidebarItem-active":"sidebarItem"}`} >
                        <FontAwesomeIcon icon={faGear} className="sidebarIcon" />
                        <div  className="sidebarItemtext">General</div>
                </li>
                <li onClick={()=>Action(2)} className={`${tab===2? "sidebarItem-active":"sidebarItem"}`}>
                        <FontAwesomeIcon icon={faCircleUser} className="sidebarIcon" />
                        <div   className="sidebarItemtext">Profile</div>
                </li>
                <li onClick={()=>Action(3)} className={`${tab===3? "sidebarItem-active":"sidebarItem"}`}>
                        <FontAwesomeIcon icon={faLock} className="sidebarIcon" />
                        <div  className="sidebarItemtext">Password</div>
                </li>
                <li onClick={()=>Action(4)} className={`${tab===4? "sidebarItem-active":"sidebarItem"}`}>
                        <FontAwesomeIcon icon={faImage} className="sidebarIcon" />
                        <div className="sidebarItemtext">Media</div>
                </li>
                <li onClick={()=>Action(5)} className={`${tab===5? "sidebarItem-active":"sidebarItem"}`}>
                        <FontAwesomeIcon icon={faTrash} className="sidebarIcon" />
                        <span className="sidebarItemtext">Delete</span>
                </li>
            </ul>
        </div>
    </div>

    <div className={`${tab===1? "settingGeneral-active":"settingGeneral"}`}>
        <div className="settingGeneralTitle">General Setting</div>
            <div className='settingGeneralContent'>
                <ul className="settingGeneralList">
                    <li className="settingGeneralItem">
                        <input type={Text} className="settingInput" placeholder="Name" />  
                    </li>
                   
                </ul>
            </div>
        </div>
        <div className={`${tab===2? "settingGeneral-active":"settingGeneral"}`}>
        <div className="settingGeneralTitle">Profile Setting</div>
            <div className='settingGeneralContent'>
            <ul className="settingGeneralList">
                    <li className="settingGeneralItem">
                        <input type={Text} className="settingInput" placeholder="First Name" />  
                    </li>
                    <li className="settingGeneralItem">
                        <input type={Text} className="settingInput" placeholder="Last Name" />  
                    </li>
                    <li className="settingGeneralItem">
                        <input type="text" className="settingInput" placeholder="E-mail" />  
                    </li>
                    <li className="settingGeneralItem">
                        <input type={Text} className="settingInput1" placeholder="Introduce" />  
                    </li>
                    <li className="settingGeneralItem">
                        <select className="settingInput">
                        <option value="" disabled selected>Sex</option>
                        <option value="volvo">Male</option>
                        <option value="volvo">Female</option>
                        <option value="volvo">Others</option>
                        </select>
                    </li>
                    <li className="settingGeneralItem">
                        <input type={Text} className="settingInput" placeholder="Phone number" />  
                    </li>
                    <li className="settingGeneralItem">
                        <input type={Text} className="settingInput" placeholder="Role: User" readOnly  />  
                    </li>
                    <button type="submit" className="submitButton">Submit</button>
                </ul>
            </div>
        </div>
        <div className={`${tab===3? "settingGeneral-active":"settingGeneral"}`}>
        <div className="settingGeneralTitle">Password Setting</div>
            <div className='settingGeneralContent'>
                <ul className="settingGeneralList">
                    <li className="settingGeneralItem">
                        <input type={Text} className="settingInput" placeholder="Current Password" />  
                    </li>
                    <li className="settingGeneralItem">
                        <input type={Text} className="settingInput" placeholder="New password" />  
                    </li>
                    <li className="settingGeneralItem">
                        <input type="text" className="settingInput" placeholder="Confirm new password" />  
                    </li>
                    <button type="submit" className="submitButton">Submit</button>
                </ul>
            </div>
        </div>
        <div className={`${tab===4? "settingGeneral-active":"settingGeneral"}`}>
        <div className="settingGeneralTitle">Media Setting</div>
            <div className='settingGeneralContent'>
                <ul className="settingGeneralList">
                    <li className="settingGeneralItem">
                        <label className='settingLabel'>Change Avatar</label>
                        <input type="file" className="settingInput1" placeholder="Change Avatar" />  
                    </li>
                    <li className="settingGeneralItem">
                        <label className='settingLabel'>Change Background picture</label>
                        <input type="file" className="settingInput1 " placeholder="Change background Piture" />  
                        <button type="submit" className="submitButton">Submit</button>
                    </li>
                   
                </ul>
            </div>
        </div>
        <div className={`${tab===5? "settingGeneral-active":"settingGeneral"}`}>
        <div className="settingGeneralTitle">Delete Setting</div>
            <div className='settingGeneralContent'>
                <ul className="settingGeneralList">
                    <li className="settingGeneralItem">
                        <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} type="submit" className="deleteButton">Delete all data</button> 
                        <div>{isHovering && <span className='cautionDeleteProfile'>This action will delete all data about your profile, picture and status</span>}</div>
                    </li>
                    <li className="settingGeneralItem">
                        <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} type="submit" className="deleteButton">Delete Post</button> 
                        <div>{isHovering && <span className='cautionDeleteProfile'>This action will delete all your post you created in all channels, all profile information will remain</span>}</div>
                    </li>
                    <li className="settingGeneralItem">
                        <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} type="submit" className="deleteButton">Delete Account</button>
                        <div>{isHovering && <span className='cautionDeleteProfile'>This action will delete your account and binding email. you can create account by the same Email later</span>}</div>
                    </li>
                </ul>
            </div>
        </div>
   </div>
   </>
  )
}
