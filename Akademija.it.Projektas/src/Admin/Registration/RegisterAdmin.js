import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import HostUrl from "./HostUrl"

class RegisterAdmin extends Component {

  state = {
    firstName: '',
    lastName: '',
    userName: '',
    codeofUserRights: 1,
    password: '',
  }

  /* componentWillMount(){
     axios.get('http://localhost:8081/user/admin/addNew')
    .then((responce)=>{
      this.setState({admin: responce.data})
  })
  .catch((error)=>{
      console.log(error);
  });
}    */
   
  handleClick(event) {
    var apiUrl= {HostUrl}.toString;
    console.log(apiUrl)

    //set values
    var information= {
    firstName : this.state.firstName,
    lastName : this.state.lastName,
    userName : this.state.userName,
    password  : this.state.password,
    /* codeofUserRights : this.state.codeofUserRights */
     
    }
    //send to back end
    axios.post(/* apiUrl +  */"http://localhost:8081/admin/admin/addNewAdmin" , information)
    .then(function (responce){
      if (responce.date.code === 200){
        console.log("registration  succsessfull");
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
          <span>
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
          </span>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default RegisterAdmin;