import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import HostUrl from "./HostUrl"
import axios from 'axios';

class RegisterDoctor extends Component {

    state= {
        firstName: '',
        lastName: '',
        specialization: '',
        userName: '',
        password: '',
        
      }
    
      handleClick(event) {
        var apiUrl= {HostUrl}.toString;
    
        //set values
        var information= {
          firstName : this.state.firstName,
          lastName : this.state.lastName,
          specialization: this.state.specialization,
          userName : this.state.userName,
          password : this.state.password,

        }
        axios.post(/*apiUrl + */'http://localhost:8081/admin/doctor', information)
        .then(function (response){
          if (response.date.code === 200){
            console.log("registrations  succsessfull");
          }
        })
        .catch(function (error) {
            console.log(error);
          })
          console.log(this.state);
      }

    /*handleChange= (event, index, value) => this.setState({ value });*/



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

                        {/*paziureti, kodel specializacija iveda numeriu, o ne zodziu*/}
                       
                        <DropDownMenu value={this.state.value} onChange={(event, newValue) => 
                            this.setState({ specialization: newValue })}>
                            <MenuItem value={0} primaryText="Specializacija" />
                            <MenuItem value={"Gydytojas"} primaryText="Gydytojas" />
                            <MenuItem value={2} primaryText="Chirurgas" />
                            <MenuItem value={3} primaryText="Fizioterapeutas" />
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