import React, { Component } from "react";

class CreateUser extends Component {
    
    render() {
      return (
        <div id="newuserinputs">
         <form className="col s12" id="form">
            <div className="row">
                <div className="input-field col s6">
                    <input id="first_name" type="text" className="validate" />
                    <label for="first_name">User Name</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" />
                  <label for="email">Your Email</label>
                </div>
              </div>
            
              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" />
                  <label for="password"> Your Password</label>
                </div>
              </div>
              
           
            </form>
            <div>
                <a href="/Home"  className="waves-effect waves-light btn" id="createuserbtn">Create User</a>
        
            </div>
          
        </div>
      );
    }
  }
  

  export default CreateUser;