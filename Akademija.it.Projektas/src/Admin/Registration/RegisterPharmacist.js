import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {API} from "./HostUrl"
import axios from 'axios';

class RegisterPharmacist extends Component {

    state={
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        workplace: '',
        personalId: '',
        typeOfWorkplace : '',
        value: 'Pasirinkite įmonės tipą'
        
    }

    handleClick(event) {
        var apiUrl=API;

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
    }

    handleChange= (event, index, value) => this.setState({ typeOfWorkplace: value });

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
                            hintText="Darbo vieta"
                            floatingLabelText="Įmonės pavadinimas"
                            onChange={(event, newValue) => this.setState({ workplace: newValue })}
                        />
                        <br/>
                        {/* pagalvoti, kaip padaryti, kad issirinkus is saraso, matytusi
                        pasirinkimas, o issaugojus i duombaze viskas resetintu */}
                        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={"Pasirinkite įmonės tipą"} primaryText={"Pasirinkite įmonės tipą"} />
                            <MenuItem value={"UAB"} primaryText="UAB" />
                            <MenuItem value={"AB"} primaryText="AB" />
                            <MenuItem value={"MB"} primaryText="MB" />
                            <MenuItem value={"Všį"} primaryText="Všį" />
                        </DropDownMenu>
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
                </MuiThemeProvider>
            </div>
        );
    }
}

export default RegisterPharmacist;