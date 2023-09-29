import React from 'react';
import './App.css';
import {
BrowserRouter as Router,
Routes,
Route,
Link,
} from "react-router-dom";
import Header from './componant/header';
import Footer from './componant/footer';
import Login from './pages/login';
import Register from './pages/register';
import Search from './pages/pagesUser/search';
import Home from './pages/pagesUser/home';
import EventRequest from './pages/pagesUser/requestEvent';
import CreateEventRequest from './pages/pagesUser/requestEvent/createEventRequest';
import ItemRequest from './pages/pagesUser/requestItem';
import PlaceRequest from './pages/pagesUser/requestPlace';
import Donate from './pages/pagesUser/donate';
function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/main" element={<Home/>} />
        <Route path="/eventRequest" element={<EventRequest />} />
        <Route path="/itemRequest" element={<ItemRequest />} />
        <Route path="/placeRequest" element={<PlaceRequest />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/eventRequest/createEventRequest" element={<CreateEventRequest />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
