import React from "react";
//import SignOutButton from './pages/SignOut';
import "./Nav.css";
//<li><SignOutButton /></li>
// Component for the Navbar
//document.addEventListener('DOMContentLoaded', function() {
  //  var elems = document.querySelectorAll('.sidenav');
    //var instances = M.Sidenav.init(elems, options);
  //});
//const dropdownFunction = () =>{(".dropdown-trigger").dropdown()}
const Nav = props => (

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

export default Nav;
