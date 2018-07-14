import React, { Component } from "react";
import SignInPage from "./SignIn";
import "./Container.css";

class Game extends Component {
    
    render() {
      return (
        <div>
          <main className="container">
            <h6>
            Mobile Scavenger Hunt App 
            </h6>

            <img className="movingcar" src="assets/images/largelogo1.png" alt="Smiley face" />
            <div id="loginchoice">
              <br />
              <br />
              <SignInPage />
            </div>
          </main>
          
        </div>
      );
    }
  }
  
  export default Game;
