import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { orange500, blue500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { API } from "./HostUrl";
import axios from 'axios';
import swal from 'sweetalert';



const textStyles = {
    errorStyle: {
        color: orange500,
    },
    floatingLabelFocusStyle: {
        color: blue500,
    },
};

class RegisterPharmacist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            repeatedPassword: '',
            workplace: '',
            typeOfWorkplace: '',
            value: ''
        };
    }

    validFirstNameEntered() {
        if (this.state.firstName !== '' &&
            this.state.firstName.length >= 3 &&
            this.state.firstName.length <= 30) {
            return true;
        }
        else {
            alert("Vardo laukelis privalomas! Patikrinkite, ar įvedėte teisingai.")
        }
    }

    validLastNameEntered() {
        if (this.state.lastName !== '' &&
            this.state.lastName.length >= 3 &&
            this.state.lastName.length <= 30) {
            return true;
        }
        else {
            alert("Pavardės laukelis privalomas! Patikrinkite, ar įvedėte teisingai.")
        }
    }

    validUserNameEntered() {
        if (this.state.userName !== '' &&
            this.state.userName.length >= 6 &&
            this.state.userName.length <= 30) {
            return true;
        }
        else {
            alert("Prisijungimo vardas privalomas! Patikrinkite, ar įvedėte teisingai.")
        }
    }

    typeOfWorkplaceIsSelected() {
        if (this.state.typeOfWorkplace !== '') {
            return true;
        }
        else {
            alert("Pasirinkite įmonės tipą!")
        }
    }

    validWorkplaceEntered() {
        if (this.state.workplace !== '' &&
            this.state.workplace.length >= 2 &&
            this.state.workplace.length <= 50) {
            return true;
        }
        else {
            alert("Įmonės pavadinimas privalomas!")
        }
    }

    bothPasswordsMatch() {
        if (this.state.password === this.state.repeatedPassword) {
            return true;
        }
        else {
            alert("Slaptažodis nesutampa su pakartotu slaptažodžiu! Bandykite įvesti iš naujo.");
        }
    }

    validPassword() {
        if (this.state.password.length >= 6 &&
            this.state.password.length <= 30) {
            return true;
        }
        else {
            alert("Slaptažodis privalomas! Slaptažodis turi būti nuo 6 iki 30 simbolių.")
        }
    }

    dataIsValid() {
        if (this.typeOfWorkplaceIsSelected() &&
            this.validWorkplaceEntered() &&
            this.bothPasswordsMatch() &&
            this.validFirstNameEntered() &&
            this.validLastNameEntered() &&
            this.validUserNameEntered() &&
            this.validPassword()) {
            return true;
        }
    }


    handleClick(event) {
        var apiUrl = API;


        if (this.dataIsValid()) {

            console.log("data is valid: " + this.dataIsValid());

            //set values
            var information = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                userName: this.state.userName,
                password: this.state.password,
                workplace: this.state.workplace,
                typeOfWorkplace: this.state.typeOfWorkplace
            }

                axios.post(apiUrl + '/admin/pharmacist', information)
                .then((response)=>{
                    console.log("registration  successful"); 
                    this.refs.form.reset();
                    swal({
                        text: "Registracija sėkminga!",
                        icon: "success",
                       button: "Gerai",
                    });  
                })
                .catch((error)=>{
                console.log(error);
                 if(error.response.status === 500){ 
                    alert("Toks vartotojo vardas jau egzistuoja. Sukurkite naują.")
                    console.log("error status",error.response.status)
                   } 
                })
                event.preventDefault();
        }else{
            console.log("some data is wrong");
        }
    }

    handleChange = (event, index, value) => {
        this.setState({ typeOfWorkplace: event.target.value, value: value });
    }

    render() {

        return (
            <div>
                <MuiThemeProvider>
                    <form className="registerPharmacist"
                        ref="form">
                        <h2> Registruoti vaistininką </h2>
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
                            className="workplace"
                            id="inputWorkplace"
                            hintText="Nuo 2 iki 50 simbolių"
                            errorText="Privalomas laukas"
                            errorStyle={textStyles.errorStyle}
                            floatingLabelText="Įmonės pavadinimas"
                            floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
                            onChange={(event, newValue) => this.setState({ workplace: newValue })}
                        />
                        <br />
                        <select className="typeOfWorkplace"
                            id="inputTypeOfWorkplace"
                            value={this.state.value} onChange={this.handleChange}>
                            <option id="noTypeOfWorkplace" value={""}>Pasirinkite įmonės tipą</option>
                            <option id="UAB" value={"UAB"}>UAB</option>
                            <option id="AB" value={"AB"}>AB</option>
                            <option id="MB" value={"MB"}>MB</option>
                            <option id="VSI" value={"Všį"}>Všį</option>
                        </select>
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

export default RegisterPharmacist;