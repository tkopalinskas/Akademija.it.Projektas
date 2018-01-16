import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react'
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  // goLink = () => this.props.router.push(this.props.match.params)

  render(){

    return (
      <div>
        <MuiThemeProvider>
          {/* <div>
            <AppBar
              title="Prisijungimas"
            />
          </div> */}
          <div className='login'>
            <TextField
              hintText="Įveskite prisijungimo vardą"
              floatingLabelText="Prisijungimo vardas"
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Įveskite slaptažodį"
              floatingLabelText="Slaptažodis"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton label="Prisijungti" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Login;