import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import {API} from "./HostUrl";
import axios from 'axios';

const textStyles = {
  errorStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};

class RegisterPatient extends Component {

  constructor(props){ 
    super(props);
    this.state={
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      repeatedPassword: '',
      dateOfBirth: '',
      personalId: '',
      doctorsFullName: ''
    };
  }
  validFirstNameEntered(){
    if(this.state.firstName!==''&&
    this.state.firstName.length>=3&&
    this.state.firstName.length<=30){
        return true;
    }
}

validLastNameEntered(){
    if(this.state.lastName!==''&&
    this.state.lastName.length>=3&&
    this.state.lastName.length<=30){
        return true;
    }
}

validUserNameEntered(){
    if(this.state.userName!==''&&
    this.state.userName.length>=6&&
    this.state.userName.length<=30){
        return true;
    }
}

dateOfBirthAndPersonalIdMatch() {
            return true;
}

validPersonalIdEntered(){
    if(this.state.personalId!==''&&
    this.state.personalId.length===11){
        return true;
    }
}

bothPasswordsMatch(){
    if (this.state.password===this.state.repeatedPassword){
        return true;
    }
}

validPassword(){
    if(this.state.password.length>=6&&
    this.state.password.length<=30){
        return true;
    }
}

dataIsValid(){
    if (this.validPersonalIdEntered()&&
    this.bothPasswordsMatch()&&
    this.validFirstNameEntered()&&
    this.validLastNameEntered()&&
    this.validUserNameEntered()&&
    this.validPassword()){
        return true;
    }
}


  handleClick(event) {
    var apiUrl=API;


    if (this.dataIsValid()){
      
      console.log("data is valid: " + this.dataIsValid());
      
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

      axios.post(apiUrl +  '/admin/patient', information)
      .then((response)=>{
        console.log("registration  successful");
        alert("Registracija sėkminga!");     
      })
      .catch((error)=>{
        console.log(error);
      })
      console.log(this.state);
      event.preventDefault();
      return true;
    }else{
      alert("Patikrinkite, ar visi duomenys įvesti teisingai! Privalomi laukai turi būti užpildyti.")
      console.log("some data is wrong");
      return false;
    }
  }
   
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Įveskite vardą"
              errorText="Privalomas laukas"
              errorStyle={textStyles.errorStyle}
              floatingLabelText="Vardas"
              floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
              onChange={(event, newValue) => this.setState({ firstName: newValue })}
            />
            <br />
            <TextField
              hintText="Įveskite pavardę"
              errorText="Privalomas laukas"
              errorStyle={textStyles.errorStyle}
              floatingLabelText="Pavardė"
              floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
              onChange={(event, newValue) => this.setState({ lastName: newValue })}
            />
            <br />
            <TextField
              hintText="Asmens kodas"
              errorText="Privalomas laukas"
              errorStyle={textStyles.errorStyle}
              type="numbers"
              floatingLabelText="Asmens kodas"
              floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
              onChange={(event, newValue) => this.setState({ personalId: newValue })}
            />
            <br />
            <DatePicker hintText="Gimimo data"
              onChange={(event, newValue) => this.setState({ dateOfBirth: newValue })}
            />
            <br />
            <TextField
              hintText="Įveskite prisijungimo vardą"
              errorText="Privalomas laukas"
              errorStyle={textStyles.errorStyle}
              floatingLabelText="Prisijungimo vardas"
              floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
              onChange={(event, newValue) => this.setState({ userName: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Įveskite slaptažodį"
              errorText="Privalomas laukas"
              errorStyle={textStyles.errorStyle}
              floatingLabelText="Slaptažodis"
              floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Pakartokite slaptažodį"
              errorText="Privalomas laukas"
              errorStyle={textStyles.errorStyle}
              floatingLabelText="Pakartokite slaptažodį"
              floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
              onChange={(event, newValue) => this.setState({ repeatedPassword: newValue })}
            />
            <br />
            <RaisedButton label="Registruoti" primary={true} onClick={(event) => this.handleClick(event)} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default RegisterPatient;