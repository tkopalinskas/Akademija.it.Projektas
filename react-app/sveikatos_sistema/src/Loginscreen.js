import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';

class Loginscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginmessage: '',

      isLogin: true
    }
  }

  render() {

    return (
      <div className="loginscreen" class='row'>
        <Login parentContext={this} appContext={this.props.parentContext} />
        <div class="col-sm-4">
          {this.state.loginmessage}
        </div>
        <div class="col-sm-8">
          statistaika
          </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Loginscreen;