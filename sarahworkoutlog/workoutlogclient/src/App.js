import React, { Component } from 'react';
import NavBar from './home/Navbar';
import Auth from './auth/Auth';
import Splash from './home/Splash';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// import './App.css'; we wll get to this later

class App extends Component {

  constructor() {
    super();
    this.state = {
      sessionToken: ''  //1 store tokenSession in State
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token'); //4 we are grabbing the token if it exists from the local storage.
    if (token && !this.state.sessionToken) {   //5 
      this.setState({ sessionToken: token });
    }
  }
  //2  this takes in a specific token and then sets the State equal to that token
  setSessionState = (token) => {
    localStorage.setItem('token', token); //We're setting the token in the localStorage, so that if the page refreshes we can grab it from the local storage again.
    this.setState({ sessionToken: token });
  }

  logout = () => {
    this.setState({ sessionToken: '' });
    localStorage.clear();
  }


  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Switch>
          <Route path='/' exact>
            <Splash sessionToken={this.state.sessionToken} />
          </Route>
        </Switch>
      )
    } else {
      return (
        <Route path="/auth" >
          <Auth setToken={this.setSessionState} />
        </Route>
      )
    }
  }

  //render method is down here


  render() {
    return (
      <Router>
        <div>
          <NavBar clickLogout={this.logout} />
          {this.protectedViews()}
        </div>
      </Router>

    );
  }
}

export default App;
