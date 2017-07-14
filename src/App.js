import React, { Component } from 'react';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Recipe, {Kind} from './Recipe';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h2>Welcome to React</h2>*/}
        </div>
        
        <p className="App-intro">
          <h1>All things Koko Samoa</h1>
        </p>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/recipes'>Recipes</Link>
          </div>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />

          <Switch>
            <Route path='/recipes/:recipe_id' component={Kind} />
            <Route path='/recipes' component={Recipe} />
            </Switch>
          </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
