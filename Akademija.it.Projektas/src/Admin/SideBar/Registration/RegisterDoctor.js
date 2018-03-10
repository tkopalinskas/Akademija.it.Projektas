import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
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

class RegisterDoctor extends Component {
    constructor(props){ 
        super(props);
        this.state= {
            firstName: '',
            lastName: '',
            specialization: '',
            otherSpecialization: '',
            userName: '',
            password: '',
            repeatedPassword: '',
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
   
    }

    validFirstNameEntered(){
        if(this.state.firstName!==''&&
        this.state.firstName.length>=3&&
        this.state.firstName.length<=30){
            return true;
        }
        else{
            alert("Vardo laukelis privalomas! Patikrinkite, ar įvedėte teisingai.")
        }
    }

    validLastNameEntered(){
        if(this.state.lastName!==''&&
        this.state.lastName.length>=3&&
        this.state.lastName.length<=30){
            return true;
        }
        else{
            alert("Pavardės laukelis privalomas! Patikrinkite, ar įvedėte teisingai.")
        }
    }

    validUserNameEntered(){
        if(this.state.userName!==''&&
        this.state.userName.length>=6&&
        this.state.userName.length<=30){
            return true;
        }
        else{
            alert("Prisijungimo vardas privalomas! Patikrinkite, ar įvedėte teisingai.")
        }
    }

    specializationIsSelected() {
        if((this.state.specialization!=='') && (this.state.specialization!=="kita")
    /* this.otherSpecializationIsSelected()*/) {
            return true;
        }
        else{
            alert("Pasirinkite specializaciją! Jei specializacijos nėra sąraše, pasirinkite 'kita' ir įrašykite specializaciją į laukelį.")
        }
    }

    /* otherSpecializationIsSelected(){
        if(this.state.specialization!=="kita"/* &&
        this.otherSpecialization!=='' *//* ){
            return true;
        }else{
            alert("Jei pasirinkote kitą specializaciją, turite įrašyti jos pavadinimą į laukelį.")
        }
    }  */ 

    bothPasswordsMatch(){
        if (this.state.password===this.state.repeatedPassword){
            return true;
        }
        else{
            alert("Slaptažodis nesutampa su pakartotu slaptažodžiu! Bandykite įvesti iš naujo.");
        }
    }

    validPassword(){
        if(this.state.password.length>=6&&
        this.state.password.length<=30){
            return true;
        }
        else{
            alert("Slaptažodis privalomas! Slaptažodis turi būti nuo 6 iki 30 simbolių.")
        }
    }

    dataIsValid(){
        if (this.specializationIsSelected()&&
        this.bothPasswordsMatch()&&
        this.validFirstNameEntered()&&
        this.validLastNameEntered()&&
        this.validUserNameEntered()&&
        this.validPassword() /* && */
        /* this.otherSpecializationIsSelected() */ ){
            return true;
        }
    }

    handleClick(event) {
        var apiUrl= API;
    
        if (this.dataIsValid()){
      
            console.log("data is valid: " + this.dataIsValid());
            
            //set values
            var information= {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            specialization: this.state.specialization,
            userName : this.state.userName,
            password : this.state.password,
            }

            this.refs.form.reset();

            axios.post(apiUrl + '/admin/doctor', information)
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
            console.log("some data is wrong");
            return false;
        }
      }
       

    handleChange= (event, index, value) => {
        this.setState({ specialization: event.target.value , value: value });
        
    }

    getOtherSpecialization=(event)=>{
        var otherSpecialization=event.target.value;
        this.specialization=this.setState({specialization: otherSpecialization})
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <form className="registerDoctor"
                    ref="form">
                    <h2> Registruoti gydytoją </h2>
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
                        <br/>
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
                        <br/>
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
                        <br/>                          
                       <select className="specialization"
                                      id="inputSpecialization"
                                      value={this.state.value} onChange={this.handleChange}>
                            <option id="noSpecialization" value={""} >Specializacija </option>
                            <option id="generalPractitioner" value={"šeimos gydytojas"} >Šeimos gydytojas </option>
                            <option id="surgeon" value={"chirurgas"} >Chirurgas </option>
                            <option id="physiotherapist" value={"fizioterapeutas"} >Fizioterapeutas </option>
                            <option id="other" value={"kita"} >Kita </option>
                        </select>                 
                         <br/>
                        <TextField
                            className="otherSpecialization"
                            id="inputOtherSpecialization"
                            hintText="Įveskite kitą specializaciją"
                            floatingLabelText="Kita specializacija"
                            onChange={this.getOtherSpecialization}
                        /> 
                        <br />
                        <RaisedButton className="submitButton" id="submitForm" label="Registruoti" primary={true} onClick={(event) => this.handleClick(event)} />
                    </form>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default RegisterDoctor;