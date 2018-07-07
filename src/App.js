import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import Join from "./components/pages/JoinTeam";
import Create from "./components/pages/CreateTeam";
import Play from "./components/pages/Play";
import Nav from "./components/Nav";
import Photos from "./components/pages/Photos";
import withAuthentication from './components/Session/withAuthentication';
//import * as routes from '../../constants/routes';
import Webcam from "./components/pages/camera2";


const App = () =>
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Login} />
      <Route exact path="/new" component={SignUp} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/join" component={Join} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/play" component={Play} />
      <Route exact path="/camera" component={Webcam} />
      <Route exact path="/photos" component={Photos} />
      
    </div>
  </Router>;
export default withAuthentication(App);