import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

class RegisterPatient extends Component {

  state = {
    first_name: '',
    last_name: '',
    password: '',
    date: '',
    A_k: ''
  }

  handleClick(event) {
    var apiUrl = "http://localhost:8000/user/admin/addNew"

    //set values
    var information = {
      "first_name ": this.state.first_name,
      "last_name": this.state.last_name,
      "password": this.state.password,
      "date": this.state.date,
      "A_k": this.state.A_k
    }
    axios.post(apiUrl + '/RegisterPatient', information)
    .then(function (response){
      if (response.date.code == 200){
        console.log("registrations  succsessfull");
      }
    })
  }



  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <TextField
              type="date"
              onChange={(event, newValue) => this.setState({ date: newValue })}
            />
            <br />
            <TextField
              hintText="Iveskite Varda"
              floatingLabelText="Vardas"
              onChange={(event, newValue) => this.setState({ first_name: newValue })}
            />
            <br />
            <TextField
              hintText="Iveskite pavarde"
              floatingLabelText="pavarde"
              onChange={(event, newValue) => this.setState({ last_name: newValue })}
            />
            <br />
            <TextField
              hintText="Asmens Kodas"
              type="numbers"
              floatingLabelText="asmens Kodas"
              onChange={(event, newValue) => this.setState({ A_k: newValue })}
            />
            <br />

            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Confirm Password"
              floatingLabelText="Confirm password"
              onChange={(event, newValue) => this.setState({ confirmPassword: newValue })}
            />
            <br />
            <RaisedButton label="Submit" primary={true} onClick={(event) => this.handleClick(event)} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default RegisterPatient;