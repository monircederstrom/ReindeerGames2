import React, { Component } from 'react';

import CurrentGames from "./CurrentGames";


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
        <div>
          
         {/* { this.renderList() } */}
       
        
          <CurrentGames />
          <div id="navbuttons">
              <a href="/create" className="waves-effect waves-light btn" id="create">Create Game</a>
      
              <a href="/join" className="waves-effect waves-light btn" id="join">Join Game</a>
          </div>
          
        </div>
      );
    }
  }
  
  export default HomePage;