import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/sidebar"
import Feed from "../../components/feed/feed"
import Rightbar from "../../components/rightbar/rightbar"
import { useNavigate } from "react-router-dom"
import "./Home.css"
import { Link } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem("user-info"))
    function logout() {
        localStorage.clear();
        navigate('/login')
    }
    return (
        <>
            <Topbar />

            {localStorage.getItem('user-info') ?
                <div className="login-Testplace">
                    <div onClick={logout} className="btn btn-primary btn-sm float-end">Logout</div>
                </div>
                : null}

            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
};