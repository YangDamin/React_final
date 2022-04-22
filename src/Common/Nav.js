import React, { useState } from 'react';
import './Nav.css';
import Swal from 'sweetalert2';


const Nav = () => {
    let temp = window.location.pathname;

    const [currentClick, setCurrentClick] = useState(null);

    const getClick = (e) => {
        setCurrentClick(e.target.id);
    }

    React.useEffect(
        (e) => {
            if (temp === '/') {
                let current = document.getElementById("btn_home");
                current.style.color = "black";
                current.style.backgroundColor = "rgba(255, 118, 118, 1)";

            }
            else if (temp === '/myfeed') {
                let current = document.getElementById("btn_myfeed");
                current.style.backgroundColor = "rgba(49, 141, 251, 1)";
                current.style.color = "black";
            }
            else if (temp === '/write') {
                let current = document.getElementById("btn_write");
                current.style.backgroundColor = "rgba(255, 118, 118, 1)";
            }
            else if (temp === '/like') {
                let current = document.getElementById("btn_like");
                current.style.backgroundColor = "rgba(49, 141, 251, 1)";
            }
            else if (temp === '/mypage') {
                let current = document.getElementById("btn_mypage");
                current.style.backgroundColor = "rgba(49, 141, 251, 1)";
            }
            else if (temp === '/calendar') {
                let current = document.getElementById("btn_calendar");
                current.style.backgroundColor = "rgba(255, 118, 118, 1)";
            }
            else if (temp === '/addCalendar') {
                let current = document.getElementById("btn_calendar");
                current.style.backgroundColor = "rgba(255, 118, 118, 1)";
            } else if (temp === '/buy') {
                let current = document.getElementById("btn_buy");
                current.style.backgroundColor = "rgba(49, 141, 251, 1)";
            }


        }
    );


    // 로그인이 되어있으면 해당 페이지로 이동, 로그인 안되어있으면 로그인 먼저 해달라는 alert문 생성
    const loginStart = (link) => {
        if (sessionStorage.getItem("email")) {
            window.location = `/${link}`;
        } else {
            Swal.fire(
                '',
                '로그인 먼저 해주세요!',
                'success'
            )
            setTimeout(function () {
                window.location = '/users/signin';
            }, 2000)
        }
    }
    return (

        // <input className='input' onClick={getValue} />
        <div class="container" id="nav_container">

            <div className="nav " id="btn_home" onClick={getClick}><a className="nav-link menu" id="btn_home" style={{ 'color': 'black' }} href="/" >HOME</a></div>
            <div className="nav" id="btn_myfeed" onClick={getClick}><a className="nav-link menu" id="btn_myfeed" style={{ 'color': 'black' }} href="/myfeed" onClick={(e) => {
                e.preventDefault();
                loginStart("myfeed")
                getClick();
            }}>MY FEED</a></div>
            <div className="nav" id="btn_write" onClick={getClick}><a className="nav-link menu" id="btn_write" style={{ 'color': 'black' }} href="/write" onClick={(e) => {
                e.preventDefault();
                loginStart("write");
            }}>WRITE</a></div>
            {/* <div className="nav" id="btn_like" onClick={getClick}><a className="nav-link menu" id="btn_like"  style={{ 'color': 'black'}} href="/like" onClick={ (e) => {
                e.preventDefault();
                loginStart("like");
            }}>LIKE</a></div> */}
            <div className="nav" id="btn_mypage" onClick={getClick}><a className="nav-link menu" id="btn_mypege" style={{ 'color': 'black' }} href="/mypage" onClick={(e) => {
                e.preventDefault();
                loginStart("mypage");
            }}>MY PAGE</a></div>
            <div className="nav" id="btn_calendar" onClick={getClick}><a className="nav-link menu" id="btn_calendar" style={{ 'color': 'black' }} href="/calendar" onClick={(e) => {
                e.preventDefault();
                loginStart("calendar");
            }}>CALENDAR</a></div>
            <div className="nav" id="btn_buy" onClick={getClick}><a className="nav-link menu" id="btn_buy" style={{ 'color': 'black' }} href="/buy" onClick={(e) => {
                e.preventDefault();
                loginStart("buy");
            }}>BUY</a></div>


        </div>
    );
}


export default Nav;
