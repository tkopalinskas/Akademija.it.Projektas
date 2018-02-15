import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
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

class RegisterPharmacist extends Component {

    constructor(props){
        super(props);
        this.state={
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

    typeOfWorkplaceIsSelected() {
        if(this.state.typeOfWorkplace!==''){
            return true;
        }
    }

    validWorkplaceEntered(){
        if(this.state.workplace!==''&&
        this.state.workplace.length>=2&&
        this.state.workplace.length<=50){
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
        if (this.typeOfWorkplaceIsSelected()&&
        this.validWorkplaceEntered()&& 
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
                password: this.state.password,
                workplace: this.state.workplace,
                typeOfWorkplace: this.state.typeOfWorkplace
            }

                axios.post(apiUrl + '/admin/pharmacist', information)
                .then((response)=>{
                    console.log("registration  successful");
                    alert("Registracija sėkminga!");     
                })
                .catch((error)=>{
                console.log(error);
                })
                console.log(this.state);
                event.preventDefault();
        }else{
            alert("Patikrinkite, ar visi duomenys įvesti teisingai! Privalomi laukai turi būti užpildyti.")
            console.log("some data is wrong");
        }
    }

    handleChange= (event, index, value) => {
        this.setState({ typeOfWorkplace: value, value: value });
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    {/* pagalvoti, kaip padaryti, kad issaugojus i duombaze viskas resetintu */}
                    <div>
                    <h2> Registruoti Vaistininką </h2>
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
                            hintText="Darbo vieta"
                            errorText="Privalomas laukas"
                            errorStyle={textStyles.errorStyle}
                            floatingLabelText="Įmonės pavadinimas"
                            floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
                            onChange={(event, newValue) => this.setState({ workplace: newValue })}
                        />
                        <br/>
                        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={""} primaryText={"Pasirinkite įmonės tipą"} />
                            <MenuItem value={"UAB"} primaryText="UAB" />
                            <MenuItem value={"AB"} primaryText="AB" />
                            <MenuItem value={"MB"} primaryText="MB" />
                            <MenuItem value={"Všį"} primaryText="Všį" />
                        </DropDownMenu>
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

export default RegisterPharmacist;