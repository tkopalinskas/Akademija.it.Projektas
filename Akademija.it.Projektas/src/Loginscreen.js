import React, { Component } from 'react';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';

class Loginscreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      userName: '',
      password: '',
      loginmessage: '',

      isLogin: true
    }
  }

  render() {

    return (
      <div className="loginscreen">
        <Login parentContext={this} appContext={this.props.parentContext} />
        <div className="col-sm-4">
          {this.state.loginmessage}
        </div>
        <div className="col-sm-8">
          Statistika
          </div>
      </div>
    );
  }
}

export default Loginscreen;