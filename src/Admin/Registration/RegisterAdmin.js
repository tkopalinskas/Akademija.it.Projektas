import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import {API} from "./HostUrl"

class RegisterAdmin extends Component {

  state = {
    firstName: '',
    lastName: '',
    userName: '',
    codeofUserRights: 1,
    password: '',
  }

  handleClick(event) {
    var apiUrl = API;
    console.log(apiUrl)

    //set values
    var information = {
    firstName : this.state.firstName,
    lastName : this.state.lastName,
    userName : this.state.userName,
    password  : this.state.password,
    codeofUserRights : this.state.codeofUserRights
     
    }
    //send to back end
    axios.post(apiUrl + "/user/admin/addNew" , information)
    .then(function (response){
      if (response.date.code == 200){
        console.log("registrations  succsessfull");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Iveskite Varda"
              floatingLabelText="Vardas"
              onChange={(event, newValue) => this.setState({ firstName: newValue })}
            />
            <br />
            <TextField
              hintText="Iveskite Pavarde"
              floatingLabelText="Pavardė"
              onChange={(event, newValue) => this.setState({ lastName: newValue })}
            />
            <br />
            <TextField
              hintText="Iveskite Slapyvardį"
              floatingLabelText="Slapyvardis"
              onChange={(event, newValue) => this.setState({ userName: newValue })}
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
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton label="Submit" primary={true} onClick={(event) => this.handleClick(event)} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default RegisterAdmin;