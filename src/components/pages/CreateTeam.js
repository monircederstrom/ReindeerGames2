import React, { Component } from "react";
 //import "./Container.css";
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

//let teamnumber = Math.floor(Math.random() * 1000000000);



export default class CreateTeam extends Component {
    state = {
        name: '',
        players: '',
        //ask andrew about this
        uniqueNum: Math.floor(Math.random() * 1000000000)
    };

    handleSubmit = event => {
        event.preventDefault();

        const obj = {
            name: this.state.name,
            players: this.state.players,
            uniqueNum: this.state.uniqueNum
        }

        axios.post(`http://localhost:3001/api/game/allGames`, {obj})
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    
    };

 

    handleChange = event => {
        this.setState({ name: event.target.value});
        this.setState({ players: event.target.value});
        this.setState({ uniqueNum: event.target.value});
    };
    
    


render() {
    return (
        <div>
        <p> console.log(THIS) </p>
         <main className="createteamcontainer"> >
            
         <form onSubmit={this.handleSubmit} className="col s12" id="form">
             <div className="row">
                 <div className="input-field col s6">
                     <input name="name" id="team_name" type="text" className="validate" />
                     <label htmlFor="team_name">Game Name</label>
                     <input name="players" id='player' type='text' className='player' />
                     <label htmlFor='gameCreator'>Game Creator</label>
                 </div>
            </div>
             <div className="row">
                <h4>Your unique game number is:  </h4> 
     
                
                <Link onClick={this.createGame} to="/home" className="waves-effect waves-light btn" id="login">Create My Game</Link>
                
               
           </div>
         </form>
   
         </main>
         </div>
    );
}

};
