import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Photos = props => (
    <main className="createteamcontainer">{props.children} >
         <div className="col s12" id="photodiv">    
            <h3>My Photos: </h3>
            
            <Link to="/play" className="waves-effect waves-light btn" id="login">Back</Link>
    </div>
    </main>
)
export default withRouter(Photos);