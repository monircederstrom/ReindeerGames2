import React from 'react';
import { auth } from '../../firebase/index';

const SignOutButton = () =>

  <button 
    type="button"
    onClick={auth.doSignOut}
    className="waves-effect waves-light btn"
    id="login"
  >
    Sign Out
  </button>

export default SignOutButton;