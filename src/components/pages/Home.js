import React, { Component } from "react";
import Nav from "../Nav";
import CurrentGames from "./CurrentGames";


class Home extends Component {
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
          
        </div>
      );
    }
  }
  
  export default Home;