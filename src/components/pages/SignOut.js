import React from 'react';
import { auth } from '../../firebase/index';
import { Link, withRouter } from 'react-router-dom';
const SignOutButton = () =>

<Link to="/">
  <button 
    type="button"
    onClick={auth.doSignOut}
    className="waves-effect waves-light btn"
    id="signoutbtn"
  >
  
    Sign Out
  </button>
  </Link>  

export default SignOutButton;