import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class RegisterAdmin extends Component {

  state = {
    first_name: '',
    password: '',
  }

  handleClick(event) {
    var apiUrl = "http://localhost:8000/user/admin/addNew"

    //set values
    var information = {
      "first_name ": this.state.first_name,
      "password": this.state.password,
     
    }
    //send to back end
    axios.post(apiUrl , information)
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
              onChange={(event, newValue) => this.setState({ first_name: newValue })}
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