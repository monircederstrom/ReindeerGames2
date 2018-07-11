import React, { Component } from 'react';

import SignOutButton from './SignOut'
import CurrentGames from "./CurrentGames";
import "./Container.css";
import axios from 'axios';

import { Link } from "react-router-dom";

 export default class HomePage extends Component {
   state = {
     response: []
   }
//use axios here//
  componentDidMount(){
     axios.get("http://localhost:3001/api/game/allGames")
      .then( response => {
        this.setState({response: response.data});
        console.log(response);
      })
      .catch(function( error ) {
        console.log(error);
      })
    }

    renderList = () => {
      console.log(this.state.response);
      return this.state.response.map(item => <Link className = " allGames" key={item.name} to={"/play/" + item.uniqueNum}>{item.name}</Link>)
    }
    
    render() {
      return (
        <div className="col s12" id="home">
         
           
              <h4 id="subhome">Your Current Games</h4>
               {/* <CurrentGames />  */}
              {  this.renderList()  }
              <a href="/create" className="waves-effect waves-light btn" id="newuser">Create a New Game</a>
              <a href="/join" className="waves-effect waves-light btn" id="newuser">Join a Game</a>
        
              <SignOutButton />
           
          
 
 <div className="main-container">
     <p>
     Explanation of what Reindeer Games is...
     </p>
     <CurrentGames>
   </CurrentGames>
 
         
 </div>
 )


         
        </div>
      );
    }
  }
  
