import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

class RegisterPharmasist extends Component {

    state = {
        first_name: '',
        last_name: '',
        password: '',
        company_name: '',
    }

    handleChange = (event, index, value) => this.setState({ value });



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
                            onChange={(event, newValue) => this.setState({ company_name: newValue })}
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