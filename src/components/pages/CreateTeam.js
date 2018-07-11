import React from 'react';
//import "./Container.css";
import { Link, withRouter } from 'react-router-dom';
let teamnumber = Math.floor(Math.random() * 1000000000);


const CreateTeam = props => (
    <main className="createteamcontainer">{props.children}
            
            <form className="col s12" id="form">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="team_name" type="text" className="validate" />
                        <label htmlFor="team_name">Team Name</label>
                    </div>
                </div>
                <div className="row">
                    <h6>Your unique team number is:  {teamnumber}</h6> 
         
                    
                    <Link to="/home" className="waves-effect waves-light btn" id="login">Create My Team</Link>
                   
                </div>
            </form>
       
    </main>

)
export default withRouter(CreateTeam);