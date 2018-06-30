import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/pages/login";
import NewUser from "./components/pages/NewUser";
import Home from "./components/pages/Home";
import Join from "./components/pages/JoinTeam";
import Create from "./components/pages/CreateTeam";
import Play from "./components/pages/Play";
import Nav from "./components/Nav"
//import Camera from "./components/pages/camera";


const App = () =>
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Login} />
      <Route exact path="/new" component={NewUser} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/join" component={Join} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/play" component={Play} />
      {/* <Route exact path="/camera" component={Camera} /> */}
      
    </div>
  </Router>;
export default App;