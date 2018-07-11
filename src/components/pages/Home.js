import React, { Component } from 'react';
import SignOutButton from './SignOut'
import TableRow from "./CurrentGames";
import "./Container.css";
import axios from 'axios';
//import { WSAESTALE } from 'constants';

 export default class HomePage extends Component {
   state = {
     response: []
   }
//use axios here//
    componentDidMount(){
     axios.get("http://localhost:3001/api/game/allGames")
     .then( response => {
       this.setState = ({response: response.data });
       console.log(response);
     })
     .catch(function( error ) {
       console.log(error);
     })
    }

    tabRow = () => {
      console.log(this.state.response)
      return this.state.response.map(function(object, i){
        return <TableRow obj={object} key={i} />;
      });
        //item => <p key={item}>{item}</p>)
    }
    
    render() {
      return (
        <div className="col s12" id="home">
         
           
              <h4 id="subhome">Your Current Games</h4>
           <table> 
            <thead>
              <tr>
                <td>Game Name</td>
              </tr>
            </thead>
            <tbody>
            {this.tabRow()}
            </tbody>
          </table>
           
              <a href="/create" className="waves-effect waves-light btn" id="newuser">Create a New Game</a>
              <a href="/join" className="waves-effect waves-light btn" id="newuser">Join a Game</a>
        
              <SignOutButton />
           
          
         
        </div>
      );
    }
  }
  
