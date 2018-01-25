import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const style={
    margin: 15,
  };

class PasswordChangeComponent extends Component {

    state= {
        password: '',
        newPassword: '',
        confirmPassword: ''
    }

    handleClick(event){
        if (this.state.newPassword === this.state.confirmPassword){
            this.setState.password=this.state.newPassword;

           /*  axios.patch() */
        }
        else{
            alert("Naujasis slaptažodis nesutampa su pakartotu naujuoju slaptažodžiu! Bandykite įvesti iš naujo.");
            console.log("wrong password");
        }
        /*galutiniam variante istrinti console.log, 
        kad nesimatytu slaptazodzio konsolej*/
        console.log(this.state);
        event.preventDefault(); 
    }

    render() {
        return (
            <div>
                <TextField
                    type="password"
                    hintText="Įveskite dabartinį slaptažodį"
                    floatingLabelText="Dabartinis slaptažodis"
                    onChange={(event, newValue) => this.setState({ password: newValue })}
                />
                <br />
                <TextField
                    type="password"
                    hintText="Įveskite naują slaptažodį"
                    floatingLabelText="Naujas slaptažodis"
                    onChange={(event, newValue) => this.setState({ newPassword: newValue })}
                />
                <br />
                <TextField
                    type="password"
                    hintText="Pakartokite slaptažodį"
                    floatingLabelText="Pakartokite naują slaptažodį"
                    onChange={(event, newValue) => this.setState({ confirmPassword: newValue })}
                />
                <br />
                <RaisedButton label="Siųsti" primary={true} onClick={(event) => this.handleClick(event)} />
                <div>
                <Link to="/admin" ><RaisedButton label="Grįžti į pagrindinį" primary={true} style={style} /></Link>
                </div>
            </div>
        )
    }
}
export default PasswordChangeComponent;