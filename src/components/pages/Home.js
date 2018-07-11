import React, { Component } from 'react';

import SignOutButton from './SignOut'
import CurrentGames from "./CurrentGames";
<<<<<<< HEAD
=======
import "./Container.css";
import axios from 'axios';
>>>>>>> 722c4d41b2649c7e29de40e76df759742a2b87f4

 export default class HomePage extends Component {
   state = {
     response: []
   }
//use axios here//
    componentDidMount(){
     axios.get("http://localhost:3001/api/game/allGames")
     .then( response => {
       this.setState = ({response: response.data });
       console.log(response);
     })
     .catch(function( error ) {
       console.log(error);
     })
    }

    renderList = () => {
      console.log(this.state.response)
      return this.state.response.map(item => <p key={item}>{item}</p>)
    }
    
    render() {
      return (
        <div className="col s12" id="home">
         
           
              <h4 id="subhome">Your Current Games</h4>
              {/* <CurrentGames /> */}
              {  this.renderList()  }
              <a href="/create" className="waves-effect waves-light btn" id="newuser">Create a New Game</a>
              <a href="/join" className="waves-effect waves-light btn" id="newuser">Join a Game</a>
        
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
  
<<<<<<< HEAD

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


=======
>>>>>>> 722c4d41b2649c7e29de40e76df759742a2b87f4
