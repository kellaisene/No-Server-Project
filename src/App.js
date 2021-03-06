import React, { Component } from 'react';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Recipe, {Kind} from './Recipe';



class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <div className="App-header">
          
        </div>
        
        
        
        <div className="Nav-bar">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/recipes'>Recipes</Link>
          </div>
        <div>
          <Route exact path='/' component={Home} />

          <Switch>
            <Route path='/about' component={About} />
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
