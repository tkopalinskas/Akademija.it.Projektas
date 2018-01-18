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
    //codeofUserRights: 1,
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
    axios.post(/* apiUrl +  */"http://localhost:8081/admin/admin" , information)
    .then(function (responce){
      if (responce.date.code === 200){
        console.log("registration  succsessfull");
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
              onChange={(event, newValue) => this.setState({ password: newValue })}
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

export default RegisterAdmin;