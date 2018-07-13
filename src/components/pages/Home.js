import React, { Component } from 'react';
import "./Container.css";
import axios from 'axios';

import { Link } from "react-router-dom";

 export default class HomePage extends Component {
   state = {
     response: []
   }
//use axios here//
  componentDidMount(){

     axios.get("/api/game/allGames")

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
      return this.state.response.map(item => <Link className="allGames" key={item.name} to={"/play/" + item.uniqueNum}>{item.name}
      <br /></Link>)
    }
    
    render() {
      return (
        <div className="col s12" id="home">
         


    <h4 id="subhome"></h4>
        <div class="collection">
         <h3 class = "collection-header center" > Your Current Games</h3>
        <a href="/play" class="collection-item active">Pass the Antlers</a>
        <a href="/play" class="collection-item active">Red Nose Wins</a>
        <a href="/play" class="collection-item active">Santa in the Big City</a>
        <a href="/play" class="collection-item active">Up on the Roof</a>
      </div>    

              {  this.renderList()  }
              <a href="/create" className="waves-effect waves-light btn" id="newuser">Create a New Game</a>
              <a href="/join" className="waves-effect waves-light btn" id="newuser">Join a Game</a>
<<<<<<< HEAD
=======
   
>>>>>>> b497d476f24e954c82d3c4e37851c236892ea1c6
        </div>
      );
    }
  }
  
