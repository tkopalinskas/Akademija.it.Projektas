import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import HostUrl from "./HostUrl"
import axios from 'axios';

class RegisterPatient extends Component {

  state = {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    dateOfBirth: '',
    personalId: ''
  }

  handleClick(event) {
    var apiUrl = {HostUrl}.toString;

    //set values
    var information = {
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      userName: this.state.userName,
      password : this.state.password,
      dateOfBirth : this.state.dateOfBirth,
      personalId : this.state.personalId
    }
    axios.post(apiUrl + '/admin/patient', information)
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
              onChange={(event, newValue) => this.setState({ dateOfBirth: newValue })}
            />
            <br />
            <TextField
              hintText="Iveskite Varda"
              floatingLabelText="Vardas"
              onChange={(event, newValue) => this.setState({ firstName: newValue })}
            />
            <br />
            <TextField
              hintText="Iveskite pavarde"
              floatingLabelText="pavarde"
              onChange={(event, newValue) => this.setState({ lastName: newValue })}
            />
            <br />
            <TextField
              hintText="Asmens Kodas"
              type="numbers"
              floatingLabelText="asmens Kodas"
              onChange={(event, newValue) => this.setState({ personalId: newValue })}
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