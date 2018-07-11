import React from 'react';
//import "./Container.css";
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
let teamnumber = Math.floor(Math.random() * 1000000000);

// createGame = () => {
//     axios.post("http://localhost:3001/api/game/allGames")
//         .then(res => {
//             //need game name from input.val() #teamname
//             //need uniqueNum from {teamnumber}
//             console.log(res);
//             console.log(res.data);
//         })
// }

const CreateTeam = props => (
    <main className="createteamcontainer">{props.children} >
            
            <form className="col s12" id="form">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="team_name" type="text" className="validate" />
                        <label htmlFor="team_name">Game Name</label>
                        {/* <input id='creator' type='text' className='creator' />
                        <label htmlFor='gameCreator'>Game Creator</label> */}
                    </div>
                </div>
                <div className="row">
                    <h4>Your unique game number is:  {teamnumber}</h4> 
         
                    
                    {/* <Link onClick={createGame()} to="/home" className="waves-effect waves-light btn" id="login">Create My Gam</Link> */}
                   
                </div>
            </form>
       
    </main>

)
export default withRouter(CreateTeam);