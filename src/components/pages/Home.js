import React, { Component } from 'react';
<<<<<<< HEAD

=======
>>>>>>> 0baa7f3f09261109c5c6cb639737415650a2d540
import CurrentGames from "./CurrentGames";

<<<<<<< HEAD

=======
>>>>>>> 0baa7f3f09261109c5c6cb639737415650a2d540
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
          
        </div>
      );
    }
  }
  
<<<<<<< HEAD
  export default HomePage;
=======
  export default HomePage;
=======
const main = props => (
 
  <div className="main-container">{props.children}
      <p>
      Explanation of what Reindeer Games is...
      </p>
      <CurrentGames>
    </CurrentGames>
  
          
  </div>
  )


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


  export default main;

>>>>>>> 0baa7f3f09261109c5c6cb639737415650a2d540
