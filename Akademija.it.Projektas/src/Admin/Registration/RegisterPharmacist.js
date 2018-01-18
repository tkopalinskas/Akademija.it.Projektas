import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import HostUrl from "./HostUrl"
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
    }

    handleClick(event) {
        var apiUrl={ HostUrl }.toString;

        //set values
        var information={
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            userName: this.state.userName,
            password: this.state.password,
            workplace: this.state.workplace,
            typeOfWorkplace: this.state.typeOfWorkplace
        }
        axios.post(/* apiUrl + */ 'http://localhost:8081/admin/pharmacist', information)
            .then(function (response) {
                if (response.date.code===200) {
                    console.log("registrations  succsessfull");
                }
            })
            .catch(function (error) {
                console.log(error);
              })
              console.log(this.state);
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <span>
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
                        {/* paziureti, kodel neraso pavadinimo, bet raso skaiciu */}
                        <DropDownMenu value={this.state.value} onChange={(event, newValue) => 
                            this.setState({ typeOfWorkplace: newValue })}>
                            <MenuItem value={"Pasirinkite įmones tipą"} primaryText="Pasirinkite įmones tipą" />
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
                    </span>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default RegisterPharmacist;