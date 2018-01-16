import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import Loginscreen from './Loginscreen'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Loginscreen />
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default App;