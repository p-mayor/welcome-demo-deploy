import React from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className="App">
      <Welcome name="Peter" />
      <Contact />
    </div>
  );
}

export default App;
