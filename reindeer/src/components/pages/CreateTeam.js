import React from "react";
//import "./Container.css";

let teamnumber = Math.floor(Math.random() * 9);
console.log(teamnumber);

const CreateTeam = props => (
    <main className="createteamcontainer">{props.children} >
            
            <form className="col s12" id="form">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="team_name" type="text" className="validate" />
                        <label for="team_name">Team Name</label>
                    </div>
                </div>
                <div className="row">
                    <h4>Your unique team number is:  {teamnumber}</h4> 
                </div>
            </form>
       
    </main>

)
export default CreateTeam;