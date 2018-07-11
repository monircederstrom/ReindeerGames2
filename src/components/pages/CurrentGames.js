<<<<<<< HEAD
import React, { Component } from "react";
import SignInPage from "./SignIn";
import "./Container.css";

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
=======
import React, { Component } from 'react';

class CurrentGames extends Component {
 render() {
   return (
       <tr>
         <td>
           {this.props.obj.name}
         </td>
       </tr>
   );
 }
}

export default CurrentGames;
>>>>>>> 722c4d41b2649c7e29de40e76df759742a2b87f4
