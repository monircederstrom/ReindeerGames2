import React from 'react';
import { Link } from 'react-router-dom';
import "./Container.css";
import "./photos/photos.css";
const Photos = props => (
    <main className="createteamcontainer">
         <div className="col s12" id="photodiv">    
            <h3>My Photos: </h3>
            <div id="first"></div>
<<<<<<< HEAD
            <div id="second"> </div>
            <div id="third"> </div>
            <div id="fourth"></div>
            <div id="fifth"> </div>
            <div id="sixth"> </div>
=======
            <div id="second"></div>
>>>>>>> 43fb928067b104aadf7857d2dc54372b5b23496e
            <Link to="/play" className="waves-effect waves-light btn" id="login">Back</Link>
         </div>
   
    </main>
)
export default Photos;