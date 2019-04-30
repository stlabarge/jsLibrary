import React from 'react'

import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Home from './Home'
import Resources from './Resources'
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo'
import JSXRules from '../concepts/JSXRules';
import ClassComponentDemo from '../ClassComponentDemo';
import PropsDemo from '../concepts/PropsDemo';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
// import ReactConceptsApp from '../apps/concept-list-app/ReactConceptsApp';
import NytApp from "../apps/nyt-app/NytApp";

const Sidebar = () => (

  <div className="sidebar">
    <div className="sidebar-list-styling">
      <ul className="sidebar-list list-unstyled">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rationale">Rationale</Link></li>
        <li><Link to="/jsxrules">JSX Rules</Link></li>
        <li><Link to="/functionalcomponent">Functional Component</Link></li>
        <li><Link to="/classcomponentdemo">Class Components</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/propsdemo">Props Demo</Link></li>
        <li><Link to="/timer">Timers</Link></li>
        {/* <li><Link to="/reactconceptlist">React Concepts Checklist</Link></li> */}
        <li><Link to="/NytApp">NytApp</Link></li>


      </ul>
    </div>
    <div className="sidebar-route">
      <Switch>
        <Route exact path="/home"><Home /></Route>
        <Route exact path="/resources"><Resources /></Route>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/jsxrules"><JSXRules /></Route>
        <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
        <Route exact path="/classcomponentdemo"><ClassComponentDemo /></Route>
        <Route exact path="/propsdemo"><PropsDemo /></Route>
        <Route exact path="/timer"><TimePiecesApp /></Route>
        {/* <Route exact path="/reactconceptlist"><ReactConceptsApp /></Route> */}
        <Route exact path="/NytApp"><NytApp /></Route>
      </Switch>
    </div>
  </div>

)

export default Sidebar;
