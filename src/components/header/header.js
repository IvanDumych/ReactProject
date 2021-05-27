import React, { useState, useEffect } from 'react';
import "../css/style.css";
import {
  Link,
  NavLink
} from "react-router-dom";
import { useHistory } from "react-router-dom";



export const TodoPage = () => {

  let history = useHistory();

function Refresh(e) {
    e.preventDefault();
    console.log('Посилання було натиснуте.');

    delete localStorage.login;
    delete localStorage.password;
    delete localStorage.id;
    delete localStorage.first_name;
    delete localStorage.second_name;

    const isLoggedIn  = null;
    console.log(isLoggedIn);
    history.push("/login");

  }

const isLoggedIn = localStorage.getItem('login') != null;



  return (

    <>
  {(isLoggedIn && (
     <>
     <NavLink  to="/profile">Profile</NavLink >
      <a href="#"  onClick={Refresh}>Logout</a>
    </>
  )) || (
  <>
       <NavLink  to="/login">Login</NavLink >
       <NavLink  to="/register">Register</NavLink >
  </>
  )}
    </>

  );
}



export const Header = ()=> {
return (
    <header class="site-header">
        <nav class="navbar">
            <div class="topnav">
                        <div>
                            <NavLink  to="/Home">Home</NavLink >
                            <a href="#">About</a>
                        </div>
                      <div class="right_topnav">
                              <TodoPage />
                     </div>
            </div>
        </nav>
    </header>
    )
}