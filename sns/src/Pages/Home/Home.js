import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/sidebar"
import Feed from "../../components/feed/feed"
import Rightbar from "../../components/rightbar/rightbar"
import "./Home.css"
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <>
        <Topbar/>
        <div className="login-Testplace">
        <Link to ="/login" className="btn btn-primary btn-sm float-end">Logout</Link>
        </div>
        
        <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
        </div>
        </>
    ) 
};