import React from 'react';
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.jpg";
import '../../css/header.css';
import {
BrowserRouter as Router,
Routes,
Route,
Link,
} from "react-router-dom";
import EventRequest from '../../pages/eventRequest';
import CreateEventRequest from '../../pages/eventRequest/createEventRequest';
import Home from '../../pages/home';
import ItemRequest from '../../pages/itemRequest';
import PlaceRequest from '../../pages/placeRequest';
import Donate from '../../pages/donate';

const setCurrentPage = (val: string) => {
  localStorage.setItem("page", val);
};

function Header() {
  return (
    <>
      <header>
        <div className='headertop'>
          <Link to="./sharch" className='logo'>
            <img src={logo} alt="Logo" style={{ width: "70px", height: "70px", borderRadius: "50%" }} />
            <span style={{ padding: "20px" }}><h2>Wat Wat</h2></span>
          </Link>
          <div className='horizontal-menu' style={{ width:"50%" }}>
              <li className='manu-1'><Link to="./home">หน้าหลัก</Link></li>
              <li className='manu-2'><Link to="./eventRequest">ขอจัดกิจกรรม</Link></li>
              <li className='manu-3'><Link to="./itemRequest">ขอใช้สถานที่</Link></li>
              <li className='manu-4'><Link to="./placeRequest">ขอยืม/คืนสิ่งของ</Link></li>
              <li className='manu-5'><Link to="./donate">บริจาค</Link></li>
          </div>
          <div className="proflie">
            <Link className="btn logout" to="/">ออกจากระบบ</Link>
            <img src={avatar} alt="Avatar" style={{ width: "70px", height: "70px", borderRadius: "50%" }} />
          </div>
        </div>
          <div className='line'></div>
    </header>
    <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/eventRequest" element={<EventRequest />} />
        <Route path="/itemRequest" element={<ItemRequest />} />
        <Route path="/placeRequest" element={<PlaceRequest />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/eventRequest/createEventRequest" element={<CreateEventRequest />} />
    </Routes>
    </>
  );
}

export default Header;
