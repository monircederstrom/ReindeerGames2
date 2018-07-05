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
        <div>
          <div>
         {/* { this.renderList() } */}
       
         <SignOutButton />
          <CurrentGames />
          </div>
         
        </div>
      );
    }
  }
  
  export default HomePage;