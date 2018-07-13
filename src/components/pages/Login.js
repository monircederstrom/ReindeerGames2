import React, { Component } from "react";
import SignInPage from "./SignIn";
import "./Container.css";

class Game extends Component {
    
    render() {
      return (
        <div>
          <main className="container">
            <p>
            Mobile Scavenger Hunt App 
            </p>

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
