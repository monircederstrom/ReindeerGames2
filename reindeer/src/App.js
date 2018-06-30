import React from 'react';
import Login from "./components/pages/login";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewUser from "./components/pages/NewUser.js";
import CreateTeam from "./components/pages/CreateTeam";
import JoinTeam from "./components/pages/JoinTeam";
import Play from "./components/pages/Play";
import Nav from "./components/Nav";
import "./components/Nav.css";
//import Upload from "./components/pages/Upload";
//<Route exact path="/Upload" component={Upload} />
//
import "./components/Nav.css";

const App = () => 
<Router>
  
    <div>
    <Nav />
      <Route exact path="/" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/new" component={NewUser} />
      <Route exact path="/CreateTeam" component={CreateTeam} />
      <Route exact path="/JoinTeam" component={JoinTeam} />
      <Route exact path="/Play" component={Play} />
      
  
    </div>
  </Router>;
export default App;