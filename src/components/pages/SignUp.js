import React, { Component } from 'react';
import {
//    Link,
    withRouter,
  } from 'react-router-dom';
  import { auth, db } from '../../firebase';
//import * as routes from '../constants/routes';

const SignUpPage = ({ history }) =>
  <div>
    <h1>SignUp</h1>
    <SignUpForm history={history} />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
  });

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

  class SignUpForm extends Component {
    constructor(props) {
      super(props);
  
      this.state = { ...INITIAL_STATE };
    }
  
    onSubmit = (event) => {
      const {
        username,
        email,
        passwordOne,
      } = this.state;
  
      const {
        history,
      } = this.props;
  
      auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
  
          // Create a user in your own accessible Firebase Database too
          db.doCreateUser(authUser.user.uid, username, email)
            .then(() => {
              this.setState(() => ({ ...INITIAL_STATE }));
              history.push('/home');
            })
            .catch(error => {
              this.setState(updateByPropertyName('error', error));
            });
  
        })
        .catch(error => {
          this.setState(updateByPropertyName('error', error));
        });
  
      event.preventDefault();
    }
  
    render() {
      const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;
  
      const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        username === '' ||
        email === '';
  
      return (
        <div id="newuserinputs">
            <form onSubmit={this.onSubmit} className="col s12" id="form">
            <div className="row">
                <div className="input-field col s6">
                    <input value={username} onChange={event => this.setState(updateByPropertyName('username', event.target.value))} id="first_name" type="text" className="validate" />
                    <label for="first_name">User Name</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                  <input value={email} onChange={event => this.setState(updateByPropertyName('email', event.target.value))} id="email" type="email" className="validate" />
                  <label for="email">Your Email</label>
                </div>
              </div>
            
              <div className="row">
                <div className="input-field col s12">
                  <input value={passwordOne} onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))} id="password" type="password" className="validate" />
                  <label for="password"> Your Password</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input value={passwordTwo} onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))} id="confirmpassword" type="password" className="validate" />
                  <label for="password"> Confirm Password</label>
                </div>
              </div>
            </form>
            <div>
                <button disabled={isInvalid} type="submit" href="/Home"  className="waves-effect waves-light btn" id="createuserbtn">Sign Up!</button>
                { error && <p>{error.message}</p> }
            </div>
        </div>
    )

    }
}
const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <a href="/new" className="waves-effect waves-light btn" id="createuserbtn">Sign Up</a>
  </p>
export default withRouter(SignUpPage);
export {
     SignUpForm,
  SignUpLink,
};
