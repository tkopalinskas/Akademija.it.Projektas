import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
//import MenuItem from 'material-ui/MenuItem';
import HostUrl from "./HostUrl"
import axios from 'axios';

class RegisterPatient extends Component {

  state={
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    dateOfBirth: '',
    personalId: '',
    doctorsFullName: ''
  }

  handleClick(event) {
    var apiUrl={HostUrl}.toString;

    //set values
    var information={
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      userName: this.state.userName,
      password : this.state.password,
      dateOfBirth : this.state.dateOfBirth,
      personalId : this.state.personalId,
      doctorsFullName: this.state.doctorsFullName
    }
    axios.post(/* apiUrl +  */'http://localhost:8081/admin/patient', information)
    .then(function (response){
      if (response.date.code===200){
        console.log("registrations  succsessfull");
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    console.log(this.state);
  }



  render() {
    return (
      <div>
        <MuiThemeProvider>
          <span>
          <div>
            <TextField
              type="date"
              onChange={(event, newValue) => this.setState({ dateOfBirth: newValue })}
            />
            <br />
            <TextField
              hintText="Įveskite vardą"
              floatingLabelText="Vardas"
              onChange={(event, newValue) => this.setState({ firstName: newValue })}
            />
            <br />
            <TextField
              hintText="Įveskite pavardę"
              floatingLabelText="Pavardė"
              onChange={(event, newValue) => this.setState({ lastName: newValue })}
            />
            <br />
            <TextField
              hintText="Asmens kodas"
              type="numbers"
              floatingLabelText="Asmens kodas"
              onChange={(event, newValue) => this.setState({ personalId: newValue })}
            />
            <br />
            <TextField
              hintText="Įveskite slapyvardį"
              floatingLabelText="Slapyvardis"
              onChange={(event, newValue) => this.setState({ userName: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Įveskite slaptažodį"
              floatingLabelText="Slaptažodis"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Pakartokite slaptažodį"
              floatingLabelText="Pakartokite slaptažodį"
              onChange={(event, newValue) => this.setState({ confirmPassword: newValue })}
            />
            <br />
            <RaisedButton label="Registruoti" primary={true} onClick={(event) => this.handleClick(event)} />
          </div>
          </span>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default RegisterPatient;