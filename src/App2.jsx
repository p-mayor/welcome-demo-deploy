import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import Welcome from './components/welcome/Welcome'
import Contact from './components/contact/Contact'
import Clock from './components/clock/Clock'
import Navigation from './components/navigation/Navigation'
import NoMatch from './components/noMatch/NoMatch'
import TestFetch from './components/testFetch/TestFetch'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          path="/welcome/:name"
          render={(props) => <Welcome {...props} name={props.match.params.name} />}
        />
        <Route
          path='/clock'
          component={Clock}
        />
        <Route
          path='/testFetch'
          component={TestFetch}
        />
        <Route
          path='/contact'
          component={Contact}
        />
        <Route
          exact path='/'
          render={(props) => <Welcome {...props} name="Davey Struss" />}
        />
        <Route
          component={NoMatch}
        />
      </Switch>
    </div>
  );
}

export default App;
