import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {orange500, blue500} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles ={
    marginLeft: 300, 
  }

const textStyles = {
    errorStyle: {
      color: orange500,
    },
    floatingLabelFocusStyle: {
      color: blue500,
    },
  };

class PatientPasswordChangeComponent extends Component {

    constructor(){
        super()
        this.state= {
        password: '',
        newPassword: '',
        confirmPassword: ''
    }
} 

    bothPasswordsMatch(){
        if (this.state.newPassword===this.state.confirmPassword){
            return true;
        }
        else{
            alert("Naujasis slaptažodis nesutampa su pakartotu naujuoju slaptažodžiu! Bandykite įvesti iš naujo.");
        }
    }

    validPassword(){
        if(this.state.newPassword.length>=6&&
        this.state.newPassword.length<=30){
            return true;
        }
        else{
            alert("Netinka slaptažodžio ilgis")
        }
    }

    dataIsValid(){
        if (this.bothPasswordsMatch()&&
        this.validPassword()){
            return true;
        }
    }

    handleClick(event){
        if (this.dataIsValid()){

           /*  axios.put() arba post */
        }
        else{
            console.log("wrong password");
        }
        /*galutiniam variante istrinti console.log, 
        kad nesimatytu slaptazodzio konsolej*/
        console.log(this.state);
        event.preventDefault(); 
    }

    render() {
        return (
            <MuiThemeProvider>
            <div style={styles}>
                
                <TextField
                    type="password"
                    hintText="Įveskite dabartinį slaptažodį"
                    errorText="Privalomas laukas"
                    errorStyle={textStyles.errorStyle}
                    floatingLabelText="Dabartinis slaptažodis"
                    floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
                    onChange={(event, newValue) => this.setState({ password: newValue })}
                />
                <br />
                <TextField
                    type="password"
                    hintText="Nuo 6 iki 30 simbolių"
                    errorText="Privalomas laukas"
                    errorStyle={textStyles.errorStyle}
                    floatingLabelText="Įveskite naują slaptažodį"
                    floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
                    onChange={(event, newValue) => this.setState({ newPassword: newValue })}
                />
                <br />
                <TextField
                    type="password"
                    hintText="Nuo 6 iki 30 simbolių"
                    errorText="Privalomas laukas"
                    errorStyle={textStyles.errorStyle}
                    floatingLabelText="Pakartokite naują slaptažodį"
                    floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
                    onChange={(event, newValue) => this.setState({ confirmPassword: newValue })}
                />
                <br />
                <RaisedButton label="Siųsti" primary={true} onClick={(event) => this.handleClick(event)} />
            </div>
            </MuiThemeProvider>
        )
    }
}
export default PatientPasswordChangeComponent;