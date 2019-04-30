import React, { Component } from 'react';
import './App.css';
import NavBar from '../src/Components/navbar/NavBar' ;
import {
 BrowserRouter as Router,
} from 'react-router-dom';


class App extends Component {
 render() {
   return (
     <div className="App">
     <h1>Rest in Peace Buddies - Your Photos will live on the iNtErWeBz</h1>
     <Router>
       <NavBar />
     </Router>



     </div>
   );
 }
}

export default App;
