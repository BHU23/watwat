import React from 'react';
import {
BrowserRouter as Router,
Routes,
Route,
Link,
} from "react-router-dom";
import Header from '../../componant/header';
import Footer from '../../componant/footer';
function Login() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <footer>
        <Footer/>
      </footer>
    </>
    
  );
}

export default Login;