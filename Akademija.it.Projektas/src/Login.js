import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import { AppBar } from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react'
//import axios from 'axios';

const style={
  margin: 15,
};

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state={
      username: '',
      password: ''
    }
  }
  handleClick=(event)=> {
   
    console.log(this.state);
    event.preventDefault();
  }

  render(){

    return (
      <div>
        <MuiThemeProvider>
          <span>
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
          </span>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Login;