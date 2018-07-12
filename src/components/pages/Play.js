import React, { Component } from 'react';
import {Days,Hours,Minutes,Seconds} from 'react-countdowntimer';
import Header from "../header/header";
import Countdown from './countdown.js';
import { Link } from 'react-router-dom';


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
                    
       
        onClick(e) {
            this.setState({
                count:  this.setState((prevState, props) => ({
                    counter: prevState.counter + props.increment
                  })),
                  
        })
    },
        }
    }
         render () {
          
        const currentDate = new Date();
        const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
             return (
                <div className="play">
            
                   
                    <h3 className="title white-text center-align"> Current Challenge Ends:</h3> 
                    <h4 className=" white-text center-align">  <Countdown  date ={`${year}-07-21T00:00:00`} /></h4>
                    <Header currentScore={this.state.currentScore} Time={this.state.time}/>  

                   
                    <div id="navbuttons">
                    <Link to="/camera" className="waves-effect waves-light btn" id="login">Take a Pic!</Link>
                      <Link to="/photos" className="waves-effect waves-light btn" id="login">View My Pics</Link>
                    </div>
    
               <div className="main-container">


                        </div>    
                                </div> 
        
                            );
                    }
            }
          
            //class Game extends Component {
        
              //  render() {
                //  return (
                  //  <div>
                    //  <Nav />
                    
                      //<Container>
                    
                     // </Container>
                      
                   // </div>
                  //);
               // }
             // }
              
                      </div>


           <div className="main-container">

 
              </div>    
                  </div>

             )}
               }
            

        
    export default Play;

            