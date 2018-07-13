import React from "react";
import SignOutButton from './pages/SignOut';
import "./Nav.css";
import AuthUserContext from './Session/AuthUserContext';
import * as routes from '../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <Nav />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>


const Nav = () => (

  <div id="navbar">
    <nav>
      <div className="nav-wrapper">
        <a href="/Home" className="brand-logo" id="brandlogo">
        <img className="material-icons" src="assets/images/largelogo1.png" alt="oopsies" height="35px" width="35px" /> Reindeer Games 
        </a>
        <div id="signoutdiv">
        <SignOutButton />
        </div>
      </div>
    
    </nav>
  </div>
);

const NavigationNonAuth = () => (

  <div id="navbar">
    <nav>
      <div className="nav-wrapper">
        <a href="/Home" className="brand-logo">
        <img className="material-icons" src="assets/images/largelogo1.png" alt="oopsies" height="35px" width="35px" /> Reindeer Games 
        </a>
        
      </div>
     
    </nav>
  </div>
);


export default Navigation;
