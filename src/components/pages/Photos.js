import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import "./Container.css";
import "./photos/photos.css";
const Photos = props => (
    <main className="createteamcontainer">{props.children} 
         <div className="col s12" id="photodiv">    
            <h3>My Photos: </h3>
            <div id="first"></div>
            <div id="second"> </div>
            <div id="third"> </div>
            <div id="fourth"></div>
            <div id="fifth"> </div>
            <div id="sixth"> </div>
            <Link to="/play" className="waves-effect waves-light btn" id="login">Back</Link>
    </div>
   
    </main>
)
export default withRouter(Photos);