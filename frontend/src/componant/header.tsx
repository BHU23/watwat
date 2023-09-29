import React from 'react';
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.jpg";
import '../css/header.css';
import {
BrowserRouter as Router,
Routes,
Route,
Link,
} from "react-router-dom";

const setCurrentPage = (val: string) => {
  localStorage.setItem("page", val);
};

function Header() {
  return (
    <>
      <header>
        <div className='headertop'>
          <Link to="./sharch" className='logo'>
            <img src={logo} alt="Logo" style={{ width: "65px", height: "65px", borderRadius: "50%" }} />
            <span style={{ padding: "20px", fontWeight:"600", fontSize:"30px"}}>Wat Wat</span>
          </Link>
          <div className='horizontal-menu' style={{ width:"50%" }}>
              <li className='manu-1'><Link to="./main">หน้าหลัก</Link></li>
              <li className='manu-2'><Link to="./eventRequest">ขอจัดกิจกรรม</Link></li>
              <li className='manu-3'><Link to="./itemRequest">ขอใช้สถานที่</Link></li>
              <li className='manu-4'><Link to="./placeRequest">ขอยืม/คืนสิ่งของ</Link></li>
              <li className='manu-5'><Link to="./donate">บริจาค</Link></li>
          </div>
          <div className="proflie">
            <Link className="btn logout" to="/">ออกจากระบบ</Link>
            <img src={avatar} alt="Avatar" style={{ width: "65px", height: "65px", borderRadius: "50%" }} />
          </div>
        </div>
          <div className='line'></div>
    </header>
   
    </>
  ); 
}

export default Header;
