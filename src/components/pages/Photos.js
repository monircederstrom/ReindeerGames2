import React from 'react';
import { Link } from 'react-router-dom';
import "./Container.css";
const Photos = props => (
    <main className="createteamcontainer">
         <div className="col s12" id="photodiv">    
            <h3>My Photos: </h3>
            <div id="first"></div>
            <div id="second"></div>
            <Link to="/play" className="waves-effect waves-light btn" id="login">Back</Link>
         </div>
   
    </main>
)
export default Photos;