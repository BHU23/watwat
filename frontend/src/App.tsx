import React from 'react';
import './App.css';
import {
BrowserRouter as Router,
Routes,
Route,
Link,
} from "react-router-dom";
import Header from './componant/handerUser/header';
import Footer from './componant/footer/footer';
function App() {
  return (
    <Router>
      <Header></Header> 
      <Footer></Footer>
    </Router>
  );
}

export default App;
