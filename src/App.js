import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, HashRouter, NavLink } from 'react-router-dom';
import './App.css';
import MapContainer from './components/Map.js'
import WeatherReport from './components/WeatherReport';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="appContainer">
          <HashRouter>
          <ul className="sidebar">
            <li><NavLink exact to={'/'} className="nav-link"> Map </NavLink></li>
            <li><NavLink to={'/weatherReport'} className="nav-link"> Weather Report </NavLink></li>
          </ul>
          <div className="fullWidth">
            <Route exact path='/' component={MapContainer} />
            <Route path='/weatherReport' component={WeatherReport} />
          </div>
          </HashRouter>
        </div>
      </Router>
    );
  };
}

export default App;

