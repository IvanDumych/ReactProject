import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoPage} from './Pages/TodoPage'
import {Header} from './components/header/header'
import {Footer} from './components/footer/footer'
import {Login} from './components/auth/login'
import {Register} from './components/auth/register'
import {Profile} from './components/auth/profile'
import {Main} from './components/auth/home'
import {Reservation} from './components/auth/reserve_audience'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";



function App() {
  return (
      <Router>
      <Header/>

            <Switch>
                <Route path="/" exact>
                    <div>
                       <div>adsf</div>
                    </div>
                </Route>

                <Route path="/a" exact>
                    <div >
                        465
                    </div>
                </Route>

                <Route path="/login" exact>
                    <div>
                    <Login/>
                    </div>
                </Route>
                <Route path="/register" exact>
                    <div>
                    <Register/>
                    </div>
                </Route>
                <Route path="/profile" exact>
                    <div>
                    <Profile/>
                    </div>
                </Route>
                 <Route path="/Home" exact>
                    <Main/>
                </Route>
                 <Route path="/reservation" exact>
                    <div>
                    <Reservation/>
                    </div>
                </Route>
            </Switch>
      <Footer/>
      </Router>

  );
}

export default App;
