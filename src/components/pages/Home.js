import React, { Component } from 'react';
import SignOutButton from './SignOut'
import CurrentGames from "./CurrentGames";
import "./Container.css";

class HomePage extends Component {
  //  state = {
  //    response: []
  //  }

  //   componentDidMount(){
  //    fetch("/api/test").then( data => data.json() ).then((data) => {
  //      this.setState({
  //        response: data
  //      })
  //    })
  //   }

    // renderList = () => {
    //   console.log(this.state.response)
    //   return this.state.response.map(item => <div key={item.username}>{item.username}</div>)
    // }
    
    render() {
      return (
        <div className="col s12" id="home">
         
           
              <h4 id="subhome">Your Current Games</h4>
              <CurrentGames />
              {/* { this.renderList() } */}
              <a href="/create" className="waves-effect waves-light btn" id="newuser">Create New Team</a>
              <a href="/join" className="waves-effect waves-light btn" id="newuser">Join a Team</a>
        
              <SignOutButton />
           
          
         
        </div>
      );
    }
  }
  
  export default HomePage;