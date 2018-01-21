import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import {API} from "./HostUrl";
import { Link } from 'react-router-dom';

const style={
  margin: 15,
};

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
    var apiUrl= API;
    console.log(apiUrl)

    //set values
    var information= {
    firstName : this.state.firstName,
    lastName : this.state.lastName,
    userName : this.state.userName,
    password  : this.state.password
     
    }
    //send to back end
    axios.post(apiUrl + "/admin/admin" , information)
    .then((response)=>{
        console.log("registration  successful");
        alert("Registracija sėkminga!");     
    })
    .catch((error)=>{
      console.log(error);
    })
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
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
            <div>
          <Link to="/admin" ><RaisedButton label="Grįžti į pagrindinį" primary={true} style={style} /></Link>
        </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default RegisterAdmin;