import React, { Component } from "react";
//import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase';

const SignInPage = ({ history }) =>
  <div>
  
    <SignInForm history={history} />
  
  </div>

const byPropKey = (propertyName, value) => () => ({
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
          history.push('/home');
        })
        .catch(error => {
          this.setState(byPropKey('error', error));
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
        <div>
        <form onSubmit={this.onSubmit} className="col s12" id="form">
          <div className="row">
              <div className="input-field col s12">
                <input value={email} onChange={event => this.setState(byPropKey('email', event.target.value))} id="email" type="email" className="validate" />
                <label for="email">Your Email</label>
              </div>
            </div>
          
            <div className="row">
              <div className="input-field col s12">
                <input value={password} onChange={event => this.setState(byPropKey('password', event.target.value))} id="password" type="password" className="validate" />
                <label for="password"> Your Password</label>
              </div>
            </div>
            
            { error && <p>{error.message}</p> }
          </form>
      <div id="loginbuttons">
          <button disabled={isInvalid} type="submit" className="waves-effect waves-light btn" id="login">Login</button>
  
          <a href="/new" className="waves-effect waves-light btn" id="newuser">New User</a>
      </div>
      </div>
      )  

    }
  }
  
  export default SignInPage;
  export {
    SignInForm,
  };