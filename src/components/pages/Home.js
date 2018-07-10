import React, { Component } from 'react';

import SignOutButton from './SignOut'
import CurrentGames from "./CurrentGames";

class HomePage extends Component {
//    state = {
//      response: []
//    }
// //use axios here//
//     componentDidMount(){
//      fetch("/api/allGames").then( data => data.json() ).then((data) => {
//        this.setState({
//          response: data
//        })
//      })
//     }

//     renderList = () => {
//       console.log(this.state.response)
//       return this.state.response.map(item => <div key={item.username}>{item.username}</div>)
//     }
    
    render() {
      return (
        <div className="col s12" id="home">
         
           
              <h4 id="subhome">Your Current Games</h4>
              <CurrentGames />
              {/* { this.renderList() } */}
              <a href="/create" className="waves-effect waves-light btn" id="newuser">Create New Team</a>
              <a href="/join" className="waves-effect waves-light btn" id="newuser">Join a Team</a>
        
              <SignOutButton />
           
          
 
 <div className="main-container">
     <p>
     Explanation of what Reindeer Games is...
     </p>
     <CurrentGames>
   </CurrentGames>
 
         
 </div>
 )


         
        </div>
      );
    }
  }
  

  export default HomePage;



  // nav bar 

//materialize   to add to file    <!--
 // Sizes:
 // tiny: 1rem
 // small: 2rem
 // medium: 4rem
 // large: 6rem
  -->
  //<i class="large material-icons">insert_chart</i>

// collections  ,   file_download, file_upload   home
//thumbs_up_down  


//add to html code    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


// 


