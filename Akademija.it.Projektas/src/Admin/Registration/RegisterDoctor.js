import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {API} from "./HostUrl"
import axios from 'axios';

class RegisterDoctor extends Component {

    state= {
        firstName: '',
        lastName: '',
        specialization: '',
        userName: '',
        password: '',
        value: 'specializacija'
        
      }
    
      handleClick(event) {
        var apiUrl= API;
    
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
        })
        .catch((error)=>{
          console.log(error);
        })
        console.log(this.state);
        event.preventDefault();
      }

      handleChange= (event, index, value) => this.setState({ specialization: value });

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
                        hintText="Įveskite slapyvardį"
                        floatingLabelText="Slapyvardis"
                        onChange={(event, newValue) => this.setState({ userName: newValue })}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Įveskite slaptažodį"
                            floatingLabelText="Slaptažodis"
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Pakartokite slaptažodį"
                            floatingLabelText="Pakartokite slaptažodį"
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br/>

                        {/*pagalvoti, kaip padaryti, kad issirinkus is saraso, matytusi
                        pasirinkimas, o issaugojus i duombaze viskas resetintu*/}
                       
                        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={"specializacija"} primaryText="Specializacija" />
                            <MenuItem value={"gydytojas"} primaryText="Gydytojas" />
                            <MenuItem value={"chirurgas"} primaryText="Chirurgas" />
                            <MenuItem value={"fizioterapeutas"} primaryText="Fizioterapeutas" />
                        </DropDownMenu>
                        <br />
                        <RaisedButton label="Registruoti" primary={true} onClick={(event) => this.handleClick(event)} />
                    </div>
                    </span>
                </MuiThemeProvider>
            </div>
        );
    }
}


export default RegisterDoctor;