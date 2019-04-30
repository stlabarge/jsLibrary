import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Auth from "./Components/Auth/Auth";
import Pies from './Components/pies/Pies'


class App extends Component {
  state = {
    sessionToken : ''
  }

    viewConductor = () => {
      return this.state.sessionToken !== undefined ? <Pies /> : <Auth tokenHandler=
      {this.storeSessionToken}/>
    } 

    storeSessionToken = (token) => {
      this.setState({
        session : token
      })
    }

  render() {
    return (
   <div className="app">
   <Navbar />
   { this.viewConductor () }


   </div>
    );
  }
}

export default App;
