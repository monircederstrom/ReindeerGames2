import React from "react";
import CurrentGames from "./CurrentGames";
import "./Container.css";


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