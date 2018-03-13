import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import {API} from "./HostUrl";
import swal from 'sweetalert';

const textStyles = {
  errorStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};

class RegisterAdmin extends Component {

  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      //codeofUserRights: 1,
      password: '',
      repeatedPassword: '',
      showAdminRegistration: false,
    }
  }

  validFirstNameEntered(){
    if(this.state.firstName!==''&&
    this.state.firstName.length>=3&&
    this.state.firstName.length<=30){
        return true;
    }
    else{
      swal({
        text: "Vardo laukelis privalomas! Patikrinkite, ar įvedėte teisingai.",
        icon: "error",
       button: "Gerai",
    });
    }
}

  validLastNameEntered(){
      if(this.state.lastName!==''&&
      this.state.lastName.length>=3&&
      this.state.lastName.length<=30){
          return true;
      }
      else{
        swal({
          text: "Pavardės laukelis privalomas! Patikrinkite, ar įvedėte teisingai.",
          icon: "error",
         button: "Gerai",
      });
      }
  }

  validUserNameEntered(){
      if(this.state.userName!==''&&
      this.state.userName.length>=6&&
      this.state.userName.length<=30){
          return true;
      }
      else{
        swal({
          text: "Prisijungimo vardas privalomas! Patikrinkite, ar įvedėte teisingai.",
          icon: "error",
         button: "Gerai",
      });
      }
  }

  bothPasswordsMatch(){
      if (this.state.password===this.state.repeatedPassword){
          return true;
      }
      else{
        swal({
          text: "Slaptažodis nesutampa su pakartotu slaptažodžiu! Bandykite įvesti iš naujo.",
          icon: "error",
         button: "Gerai",
      });
      }
  }

  validPassword(){
      if(this.state.password.length>=6&&
      this.state.password.length<=30){
          return true;
      }
      else{
        swal({
          text: "Slaptažodis privalomas! Slaptažodis turi būti nuo 6 iki 30 simbolių.",
          icon: "error",
         button: "Gerai",
      });
      }
  }

  dataIsValid(){
      if (this.bothPasswordsMatch()&&
      this.validFirstNameEntered()&&
      this.validLastNameEntered()&&
      this.validUserNameEntered()&&
      this.validPassword()){
          return true;
      }
}
   
  handleClick(event) {

    if (this.dataIsValid()){
      
      console.log("data is valid: " + this.dataIsValid());
      
      //set values
      var information= {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      password: this.state.password
      }
      //send to back end
      this.refs.form.reset();
       /*sugalvot kuo pakeisti alertus*/
      axios.post(API + "/admin/admin" , information)
      .then((response)=>{
          console.log("registration  successful");  
          swal({
            text: "Registracija sėkminga!",
            icon: "success",
           button: "Gerai",
        }); 
      })
      .catch((error)=>{
        console.log(error);
      })
      console.log(this.state);
      event.preventDefault();
    }else{
      console.log("some data is wrong");
    }
}
   
  render() {
    console.log(this.state.showAdminRegistration)
    return (
      <div >
        <MuiThemeProvider>
          <form className="registerAdmin"
          ref="form"
           open={this.props.open}>
           <h2> Registruoti administratorių </h2>
            <TextField
              className="firstName"
              id="inputFirstName"
              hintText="Nuo 3 iki 30 simbolių"
              errorText="Privalomas laukas"
              errorStyle={textStyles.errorStyle}
              floatingLabelText="Vardas"
              floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
              onChange={(event, newValue) => this.setState({ firstName: newValue })}
            />
            <br />
            <TextField
              className="lastName"
              id="inputLastName"
              hintText="Nuo 3 iki 30 simbolių"
              errorText="Privalomas laukas"
              errorStyle={textStyles.errorStyle}
              floatingLabelText="Pavardė"
              floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
              onChange={(event, newValue) => this.setState({ lastName: newValue })}
            />
            <br />
            <TextField
              className="userName"
              id="inputUserName"
              hintText="Nuo 6 iki 30 simbolių"
              errorText="Privalomas laukas"
              errorStyle={textStyles.errorStyle}
              floatingLabelText="Prisijungimo vardas"
              floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
              onChange={(event, newValue) => this.setState({ userName: newValue })}
            />
            <br />
            <TextField
              className="password"
              id="inputPassword"
              type="password"
              hintText="Nuo 6 iki 30 simbolių"
              errorText="Privalomas laukas"
              errorStyle={textStyles.errorStyle}
              floatingLabelText="Slaptažodis"
              floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <TextField
              className="repeatedPassword"
              id="inputRepeatedPassword"
              type="password"
              hintText="Nuo 6 iki 30 simbolių"
              errorText="Privalomas laukas"
              errorStyle={textStyles.errorStyle}
              floatingLabelText="Pakartokite slaptažodį"
              floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
              onChange={(event, newValue) => this.setState({ repeatedPassword: newValue })}
            />
            <br />
            <RaisedButton className="submitButton" id="submitForm" label="Registruoti" primary={true} onClick={(event) => this.handleClick(event)} />
            
          </form>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default RegisterAdmin;