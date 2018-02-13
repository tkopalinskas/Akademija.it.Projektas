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

class RegisterDoctor extends Component {
    constructor(props){ 
        super(props);
        this.state= {
            firstName: '',
            lastName: '',
            specialization: '',
            /*otherSpecialization: '',*/
            userName: '',
            password: '',
            repeatedPassword: '',
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

    specializationIsSelected() {
        if(this.state.specialization!=='')/*||
    this.otherSpecializationIsSelected()*/{
            return true;
        }
    }

   /*  otherSpecializationIsSelected(){
        if(this.state.specialization==="kita"&&
        this.state.otherSpecialization!==''){
            return true;
        }
    } */

    /* postCorrectSpecialization(){
        if(this.state.specialization==="kita"){
            this.setState.specialization= this.state.otherSpecialization
        }
    } */

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
        if (this.specializationIsSelected()&&
        this.bothPasswordsMatch()&&
        this.validFirstNameEntered()&&
        this.validLastNameEntered()&&
        this.validUserNameEntered()&&
        this.validPassword()){
            return true;
        }
    }

   /*  reset(){
        this.setState({firstName: ''})
    } */

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

            
            axios.post(apiUrl + '/admin/doctor', information)
            .then((response)=>{
                console.log("registration  successful");
                alert("Registracija sėkminga!");  
                /* this.reset();
                    */
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
       

    handleChange= (event, index, value) => {
        this.setState({ specialization: value, value: value });
        
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    {/*pagalvoti, kaip padaryti, kad issaugojus i duombaze viskas resetintu*/}
                    <div>
                    <h2> Registruoti Daktarą </h2>
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
                        hintText="Įveskite prisijungimo vardą"
                        errorText="Privalomas laukas"
                        errorStyle={textStyles.errorStyle}
                        floatingLabelText="Prisijungimo vardas"
                        floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
                        onChange={(event, newValue) => this.setState({ userName: newValue })}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Įveskite slaptažodį"
                            errorText="Privalomas laukas"
                            errorStyle={textStyles.errorStyle}
                            floatingLabelText="Slaptažodis"
                            floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Pakartokite slaptažodį"
                            errorText="Privalomas laukas"
                            errorStyle={textStyles.errorStyle}
                            floatingLabelText="Pakartokite slaptažodį"
                            floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
                            onChange={(event, newValue) => this.setState({ repeatedPassword: newValue })}
                        />
                        <br/>                       
                        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={""} primaryText="Specializacija" />
                            <MenuItem value={"gydytojas"} primaryText="Gydytojas" />
                            <MenuItem value={"chirurgas"} primaryText="Chirurgas" />
                            <MenuItem value={"fizioterapeutas"} primaryText="Fizioterapeutas" />
                            <MenuItem value={"kita"} primaryText="Kita" />
                        </DropDownMenu>
                        {/* <br/>
                        <TextField
                            hintText="Įveskite kitą specializaciją"
                            floatingLabelText="Kita specializacija"
                            onChange={(event, newValue) => this.setState({ otherSpecialization: newValue })}
                        /> */}
                        <br />
                        <RaisedButton label="Registruoti" primary={true} onClick={(event) => this.handleClick(event)} />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default RegisterDoctor;