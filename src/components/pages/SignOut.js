import React from 'react';
import AuthUserContext from '../Session/AuthUserContext';
import { auth } from '../../firebase';

const SignOutButton = () =>

  <button
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </button>

export default SignOutButton;