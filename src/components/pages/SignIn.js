import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase/index';
import * as routes from '../../constants/routes';


const SignInPage = ({ history }) =>
  <div>
  
    <SignInForm history={history} />
 
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};


class SignInForm extends Component {
    constructor(props){
      super(props);
      this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
      const {
        email,
        password,
      } = this.state;
  
      const {
        history,
      } = this.props;
  
      auth.doSignInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState(() => ({ ...INITIAL_STATE }));
          history.push(routes.HOME);
        })
        .catch(error => {
          this.setState(updateByPropertyName('error', error));
      });
  
      event.preventDefault();
    }

    render() {
      const {
        email,
        password,
        error,
      } = this.state;
  
      const isInvalid =
        password === '' ||
        email === '';
  
      return (
        
        <form onSubmit={this.onSubmit} className="col s12" id="form">
          <div className="row">
            <div className="input-field col s12">
              <input value={email} onChange={event => this.setState(updateByPropertyName('email', event.target.value))} id="email" type="email" className="validate" />
              <label htmlFor="email">Your Email</label>
            </div>
          </div>
          
          <div className="row">
            <div className="input-field col s12">
              <input value={password} onChange={event => this.setState(updateByPropertyName('password', event.target.value))} id="password" type="password" className="validate" />
              <label htmlFor="password"> Your Password</label>
            </div>
          </div>
          <div id="loginbuttons">
              <button disabled={isInvalid} type="submit" className="waves-effect waves-light btn" id="login">Login</button>
              { error && <p>{error.message}</p> }
              <a href="/new" className="waves-effect waves-light btn" id="newuser">New User</a>
        
          </div>
        </form>

      );
    }
  }

  export default withRouter(SignInPage);

  export {
    SignInForm,
  }
  