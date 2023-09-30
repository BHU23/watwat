import React from 'react'
import '../../css/navbar.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
    } from "react-router-dom";
export default function Navbar() {
  return (
    <div className='horizontal-menu'>
        <ul>
            <li className='manu-1'><NavLink to="./main">หน้าหลัก</NavLink></li>
            <li className='manu-2'><NavLink to="./eventRequest">ขอจัดกิจกรรม</NavLink></li>
            <li className='manu-3'><NavLink to="./itemRequest">ขอใช้สถานที่</NavLink></li>
            <li className='manu-4'><NavLink to="./placeRequest">ขอยืม/คืนสิ่งของ</NavLink></li>
            <li className='manu-5'><NavLink to="./donate">บริจาค</NavLink></li>
        </ul>
    </div>
  )
}
