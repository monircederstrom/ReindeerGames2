import React, { Component } from 'react';
import {Days,Hours,Minutes,Seconds} from 'react-countdowntimer';
import Header from "../header/header";
import Countdown from './countdown.js';
import { Link, withRouter } from 'react-router-dom';


//import Game from './components/Game.js';
require ('react-dom');


// const App = () => <Game />;

class Play extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentScore: 0,
            Time: Days, Hours , Minutes , Seconds ,
            ReindeerGame: 0,
        };
    }
      
       
        IncrementItem = () => {
            this.setState({ currentScore: this.state.currentScore + 1});
        }
        
        DecreaseItem = () => {
            this.setState({ currentScore: this.state.currentScore - 1});
        }
        ToggleClick =() => {
            this.setState({ show: !this.state.show});
        }
    
   
     render () {
       
        const currentDate = new Date();
        const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
   
           return (
       <div className="play">
            <h4 className="title white-text center-align">Current Challenge Ends:</h4> 
            <h5 className=" white-text center-align">  <Countdown  date ={`${year}-07-21T00:00:00`} /></h5>
            <Header currentScore={this.state.currentScore} Time={this.state.time}/>  

                   
                    <div id="navbuttons">
                      
                      <Link to="/camera" className="waves-effect waves-light btn" id="login">Take a Pic!</Link>
                      <Link to="/photos" className="waves-effect waves-light btn" id="login">View My Pics</Link>
                      </div>

                       <div className="main-container">

               <button onClick={this.IncrementItem}>Up Vote</button>
        <button onClick={this.DecreaseItem}>Down Vote</button>
       
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    </div>


       )
          
        
          }
        }
        
    export default Play;

