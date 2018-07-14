import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const JoinTeam = props => (
    <main className="createteamcontainer">{props.children} 
            
    <form className="col s12" id="form">
        <div className="row">
            <div className="input-field col s6">
                <input id="input_team_name" type="text" className="validate" />
                <label htmlFor="input_team_name">Team Name</label>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s6">
                <input id="team_number" type="text" className="validate" />
                <label htmlFor="team_number">Unique 9 Digit Team Number</label>
            </div>
            
            <Link to="/home" className="waves-effect waves-light btn" id="login">Join Team</Link>
           
        </div>
    </form>

</main>
)
export default withRouter(JoinTeam)
