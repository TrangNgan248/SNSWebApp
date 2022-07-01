import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/sidebar"
import Feed from "../../components/feed/feed"
import Rightbar from "../../components/rightbar/rightbar"
import { useNavigate } from "react-router-dom"
import React, {useState, useEffect} from 'react';
import "./Home.css"

export default function Home() {
    const token = localStorage.getItem('access_token');
    console.log(token);
    const navigate = useNavigate()
    // let user = JSON.parse(localStorage.getItem("user-"))
    function logout() {
        localStorage.clear();
        navigate('/login')
    }

    useEffect(()=>{
        if (!token) {
            navigate("/login");
        }
    }, [])

    return (
        <>
            <Topbar />

            {localStorage.getItem('user') ?
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