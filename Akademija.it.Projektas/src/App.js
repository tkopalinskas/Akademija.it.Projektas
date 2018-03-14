import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import Loginscreen from './Loginscreen'


injectTapEventPlugin();

class App extends Component {
 

  render() {
    return (
      <div className="App">
       <Loginscreen/>
      </div>
    );
  }
}

export default App;