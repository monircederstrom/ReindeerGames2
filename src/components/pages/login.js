import React, { Component } from "react";
<<<<<<< HEAD
import Container from "./Container.css";
=======
import SignInPage from "./SignIn";
import "./Container.css";
>>>>>>> a31571a5dacebc77453b807546a6948beb88088f

class Game extends Component {
    
    render() {
      return (
        <div>
          <main className="container">
            <p>
            Explanation of what Reindeer Games is...
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