import Seektopbar from "../../components/seektopbar/seektopbar"
import Seeksidebar from "../../components/seeksidebar/seeksidebar"
import Post from "../../components/post/Post"
// import Rightbar from "../../components/rightbar/rightbar"
// import { useNavigate } from "react-router-dom"
 import "./seek.css"

export default function Seek() {
    return (
        <>
            <Seektopbar />
            <div className="homeContainer">
            <Seeksidebar />
            <Post />
            </div>
        </>
    )
};