import React from "react";
import "./Container.css";
//import LogFire from "./firebase/firebaseLogin.js";

const Container = props => (
 
  <main className="container">{props.children}>
  
      <p>
      
      </p>
    
      <img className="movingcar" src="assets/images/largelogo1.png" alt="Smiley face" />
      <div id="loginchoice">
        <br />
        <br />
        <form className="col s12" id="form">
              <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label for="email">Your Email</label>
                  </div>
                </div>
              
                <div className="row">
                  <div className="input-field col s12">
                    <input id="password" type="password" className="validate" />
                    <label for="password"> Your Password</label>
                  </div>
                </div>
                
             
              </form>
          <div id="loginbuttons">
              <a href="/Home" className="waves-effect waves-light btn" id="login">Login</a>
      
              <a href="/new" className="waves-effect waves-light btn" id="newuser">New User</a>
          </div>
      </div>
  </main>
  )
  export default Container;