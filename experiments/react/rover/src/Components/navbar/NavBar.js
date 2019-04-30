import React from 'react';
import './NavBar.css';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Opportunity from '../roverboiz/opportunity';
import Curiosity from '../roverboiz/curiosity';
import Spirit from '../roverboiz/spirit';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            date: '',
            results: ''

        }
    }





    render() {
        return (

            <div className="alltheshit">
                <div className="navbar">
                    <div>
                        <ul>
                            <li><Link to="/opportunity">opportunity</Link></li>
                            <li><Link to="/curiosity">curiosity</Link></li>
                            <li><Link to="/spirit">spirit</Link></li>
                        </ul>
                    </div>
                    <div>
                        <Switch>
                            <Route exact path="/opportunity"><Opportunity /></Route>
                            <Route exact path="/curiosity"><Curiosity /></Route>
                            <Route exact path="/spirit"><Spirit /></Route>

                        </Switch>
                    </div>
                </div>

                <div className="body">
                    <h4>this is where the submit thing will be?</h4>
                </div>
            </div>
        )
    }
}

export default NavBar;