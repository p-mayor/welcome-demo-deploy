import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import Welcome from './components/welcome/Welcome'
import Contact from './components/contact/Contact'
import Clock from './components/clock/Clock'

function App() {
  return (
    <div className="App">
      <Route
        exact
        path='/'
        render={(props) => <Welcome {...props} name="Davey Strus"/>}
      />
      <Route path='/clock' component={Clock} />
      <Route path='/contact' component={Contact} />
    </div>
  );
}

export default App;
