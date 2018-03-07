import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';

axios.defaults.withCredentials = true;

const style={
  margin: 15,
  backgroundColor: '#1E88E5',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'
};



const Form = ({userName, pass,onPassChange, onUsernameChange,onSubmit},
context)=>{
  return   <div> <MuiThemeProvider>
    <form onSubmit={onSubmit}>
    <TextField
      className="username"
      id="inputUserName"
      hintText="Įveskite prisijungimo vardą"
      floatingLabelText="Prisijungimo vardas"
      type="username"
      onChange={onUsernameChange}
    />
    <br/>
     <TextField
        className="password"
        id="inputPassword"
      hintText="Įveskite slaptazodi"
      floatingLabelText="Slaptazodis"
      type="password"
      value = {pass}
      onChange={onPassChange}
    />
    <br/>
    <input  type="submit" style={style}/>
    </form>
    </MuiThemeProvider>
   
    </div>

  // return <form onSubmit={onSubmit}>
  // <input type= "text" value ={username} onChange={onUsernameChange}/>
  // <input type="password" value ={pass} onChange={onPassChange}/>
  // <input type="submit"/>
  //   </form>
}

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state={
      userName: '',
      password: ''
 
    }
  }
  onUsernameChange = (event) =>{
    this.setState ({userName:event.target.value})}

    onPassChange = (event) =>{
      this.setState ({pass:event.target.value})}

      onSubmit = (event)=>{
        let userData = new URLSearchParams();
        userData.append('username',this.state.userName)
        userData.append('password',this.state.pass)
 
        axios.post('http://localhost:8081', userData,
      {headers:{'Content-type':'application/x-www-form-urlencoded'}})
      .then((response)=> { 
        console.log(response);
        console.log("login success");
        console.log("getting user data");
        axios.get('http://localhost:8081/authorized-user/get-user-infos/'+ this.state.userName)
             .then((resp)=>{
               let user = resp.data;
               window.sessionStorage.setItem("userData", JSON.stringify(user));
               if(user.role=='PATIENT'){
                 console.log("Redirecting to patient");
                 window.location.href = "/#/patient";
               }else if(user.role=='ADMIN'){
                window.location.href = "/#/admin";
               }else if(user.role=='PHARMACIST'){
                window.location.href = "/#/pharmacist";
              }else if(user.role=='DOCTOR'){
                window.location.href = "/#/doctor";
              }
                console.log(resp);
             }).catch((err)=>{console.log(err)});
      })


      .catch((e)=>{console.log(e);});
      event.preventDefault();
      }   


  render(){

    return (
      <div>
       <Form userName={this.state.userName} pass={this.state.pass}
        onUsernameChange={this.onUsernameChange}
        onPassChange={this.onPassChange}
        onSubmit={this.onSubmit}/>
       </div>
    )
  }}
export default Login;