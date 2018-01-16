import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import HostUrl from "./HostUrl"
import axios from 'axios';

class RegisterPharmasist extends Component {

    state = {
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        workplace: '',
        personalId: '',
        typeOfWorkplace : 0,
    }

    handleClick(event) {
        var apiUrl = { HostUrl }.toString;

        //set values
        var information = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
            password: this.state.password,
            workplace: this.state.workplace,
            personalId: this.state.personalId
        }
        axios.post(apiUrl + '/admin/pharmasist', information)
            .then(function (response) {
                if (response.date.code == 200) {
                    console.log("registrations  succsessfull");
                }
            })
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <TextField
                            hintText="Iveskite Varda"
                            floatingLabelText="Vardas"
                            onChange={(event, newValue) => this.setState({ first_name: newValue })}
                        />
                        <br />
                        <TextField
                            hintText="Iveskite pavarde"
                            floatingLabelText="pavarde"
                            onChange={(event, newValue) => this.setState({ last_name: newValue })}
                        />
                        <br />
                        <TextField
                            hintText="Darbo vieta"
                            floatingLabelText="Imones Pavadinimas"
                            onChange={(event, newValue) => this.setState({ workplace: newValue })}
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
                </MuiThemeProvider>
            </div>
        );
    }
}

export default RegisterPharmasist;