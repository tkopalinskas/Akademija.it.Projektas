<<<<<<< HEAD
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import {API} from "../SideBar/Registration/HostUrl";


const textStyles = {
    errorStyle: {
      color: orange500,
    },
    floatingLabelFocusStyle: {
      color: blue500,
    },
  };

class AdminPasswordChangeComponent extends Component {

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
 

        if(this.dataIsValid()){
/* 
           axios.put(API + "/admin/{id}/changePassword", 
           {password: this.state.password})
           .then((response)=>{
               console.log("password change successful!");
               alert("Slaptažodis pakeistas!");
           })
           .catch((error)=>{
               console.log(error);
           }) */
           alert("Slaptažodis pakeistas!");
           /*galutiniam variante istrinti console.log, 
        kad nesimatytu slaptazodzio konsolej*/   
        }
        else{
            console.log("wrong password");
        } 
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <MuiThemeProvider>
            <div >

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
export default AdminPasswordChangeComponent;
=======
// import React, { Component } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import TextField from 'material-ui/TextField';
// import {orange500, blue500} from 'material-ui/styles/colors';
// import RaisedButton from 'material-ui/RaisedButton';
// import axios from 'axios';
// // import {API} from "../Registration/HostUrl";

// const styles ={
//     marginLeft: 300, 
//   }

// const textStyles = {
//     errorStyle: {
//       color: orange500,
//     },
//     floatingLabelFocusStyle: {
//       color: blue500,
//     },
//   };

// class AdminPasswordChangeComponent extends Component {

//     constructor(){
//         super()
//         this.state= {
//         password: '',
//         newPassword: '',
//         confirmPassword: ''
//     }
// } 

//     bothPasswordsMatch(){
//         if (this.state.newPassword===this.state.confirmPassword){
//             return true;
//         }
//         else{
//             alert("Naujasis slaptažodis nesutampa su pakartotu naujuoju slaptažodžiu! Bandykite įvesti iš naujo.");
//         }
//     }

//     validPassword(){
//         if(this.state.newPassword.length>=6&&
//         this.state.newPassword.length<=30){
//             return true;
//         }
//         else{
//             alert("Netinka slaptažodžio ilgis")
//         }
//     }

//     dataIsValid(){
//         if (this.bothPasswordsMatch()&&
//         this.validPassword()){
//             return true;
//         }
//     }

//     handleClick(event){
//         // var apiUrl= API;

//         if(this.dataIsValid()){

//            axios.put(apiUrl+ "/admin/{id}/changePassword", 
//            {password: this.state.password})
//            .then((response)=>{
//                console.log("password change successful!");
//                alert("Slaptažodis pakeistas!");
//            })
//            .catch((error)=>{
//                console.log(error);
//            })
//            /*galutiniam variante istrinti console.log, 
//         kad nesimatytu slaptazodzio konsolej*/   
//         }
//         else{
//             console.log("wrong password");
//         } 
//         console.log(this.state);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <MuiThemeProvider>
//             <div style={styles}>

//                 <TextField
//                     type="password"
//                     hintText="Įveskite dabartinį slaptažodį"
//                     errorText="Privalomas laukas"
//                     errorStyle={textStyles.errorStyle}
//                     floatingLabelText="Dabartinis slaptažodis"
//                     floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
//                     onChange={(event, newValue) => this.setState({ password: newValue })}
//                 />
//                 <br />
//                 <TextField
//                     type="password"
//                     hintText="Nuo 6 iki 30 simbolių"
//                     errorText="Privalomas laukas"
//                     errorStyle={textStyles.errorStyle}
//                     floatingLabelText="Įveskite naują slaptažodį"
//                     floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
//                     onChange={(event, newValue) => this.setState({ newPassword: newValue })}
//                 />
//                 <br />
//                 <TextField
//                     type="password"
//                     hintText="Nuo 6 iki 30 simbolių"
//                     errorText="Privalomas laukas"
//                     errorStyle={textStyles.errorStyle}
//                     floatingLabelText="Pakartokite naują slaptažodį"
//                     floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
//                     onChange={(event, newValue) => this.setState({ confirmPassword: newValue })}
//                 />
//                 <br />
//                 <RaisedButton label="Siųsti" primary={true} onClick={(event) => this.handleClick(event)} />
//             </div>
//             </MuiThemeProvider>
//         )
//     }
// }
// export default AdminPasswordChangeComponent;
>>>>>>> 35db1d420ecf60c610c26c8dc642978f40251967
