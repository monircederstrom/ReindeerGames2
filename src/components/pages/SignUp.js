import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth, db } from '../../firebase/index';
//import { BrowserRouter as Router, Route } from "react-router-dom";
import * as routes from '../../constants/routes';
import './Container.css';

const SignUpPage = ({ history }) =>
  <div>
  <br /> <br /> <br />
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
            
            history.push(routes.HOME);
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
      
            <form onSubmit={this.onSubmit} className="col s12" id="form">
            <div className="row">
                <div className="input-field col s6">
                    <input value={username} onChange={event => this.setState(updateByPropertyName('username', event.target.value))} id="first_name" type="text" className="validate" />
                    <label htmlFor="first_name">User Name</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                  <input value={email} onChange={event => this.setState(updateByPropertyName('email', event.target.value))} id="email" type="email" className="validate" />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
            
              <div className="row">
                <div className="input-field col s12">
                  <input value={passwordOne} onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))} id="password" type="password" className="validate" />
                  <label htmlFor="password"> Your Password</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input value={passwordTwo} onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))} id="confirmpassword" type="password" className="validate" />
                  <label htmlFor="password"> Confirm Password</label>
                </div>
              </div>
       
            
         
                <button disabled={isInvalid} type="submit" value="Submit" className="waves-effect waves-light btn" id="createuserbtn">
                Sign Up!
                <Link to="/Home"></Link>
                </button>
               
                { error && <p>{error.message}</p> }
                <br /> <br /> <br />
                </form>
                
      
    )

    }
}
const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to="/new">Sign Up</Link>
    <a href="/new" className="waves-effect waves-light btn" id="createuserbtn">Sign Up</a>
  </p>
export default withRouter(SignUpPage);
export {
     SignUpForm,
    SignUpLink,
};
