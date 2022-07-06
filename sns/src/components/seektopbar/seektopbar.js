import "./seektopbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faUser,faGear,faBell,faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import Post from "../../components/post/Post"
import Seeksidebar from "../../components/seeksidebar/seeksidebar"
import "../post/post.css"

// thư viện post 
//import 'antd/dist/antd.min.css';
//  import { useState, useEffect } from "react";
//   import axios from "axios";
//  import { Button, Modal, Menu, Space, Dropdown } from 'antd';
//  import { faEllipsis, faThumbsUp, faComment, faBookmark, faGlobe } from '@fortawesome/free-solid-svg-icons'
//  import Comment from "../../components/comment/comment"
//  import CommentTest from "../comment/commentTest";
//  import { Link, browserHistory } from "react-router-dom"
//  import Like from "../like/like";
//  import Edit from "../Edit/edit";

function Topbar(){
    const [posts, setData] = useState([])

    async function search(key) {
        console.warn(key)
        let result = await fetch("http://localhost:8000/api/search/"+key);
        result= await result.json();
        setData(result)
        
    }   
          
    return(
     <div>   
        <div className="topbarContainer">
            <div className="topbarLeft">
                <img src="/assets/testimg/logo.png" alt="" className="Logoimg"></img>
                <span className="Logo">Fuurin</span>
            </div>
            <div className="topbarCenter">
                <div className="Search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="searchicon" />
                    <input type="text" onChange = {(e)=>search(e.target.value)} placeholder="Search" className="searchInput"/>
                    
                </div>
            </div>  
                    
            <div className="topbarRight">
                <div className="iconTopbars">
                    <div className="iconTopbar">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    
                    <div className="iconTopbar">
                        <FontAwesomeIcon icon={faGear} />
                    </div>
                    <div className="iconTopbar">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className="iconTopbar">
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                </div>
               
            </div>
            
         </div>
         
         <div className="homeContainer">
         <Seeksidebar />
                        {posts.map((post)=> 
                        
                            <div className={`postwrapper ${post.id}`}>
                        
                        <div className="postCenter">
                            <div className="postText">{post.title}</div>
                            <div className="postText">{post.content}</div>
                            <img className="postImg" src={`http://localhost:8000/storage/${post.display}`} alt="Khong hien thi" />
                            <br />
                        </div> 

                        
                            </div>
                            
                        )}
           
                    </div>
                    
         </div>
        
         
    )
    
}
<Post/>
export default Topbar