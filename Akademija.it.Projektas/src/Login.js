import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const style={
  margin: 15,
};

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state={
      username: '',
      password: ''
    }
  }
  handleClick=(event)=> {
    let value =event.target.value;
    let inputName = event.target.name;
    this.setState({[inputName]: value});
   
    // console.log(this.state);
    // event.preventDefault();
  };

  render(){

    return (
      <div>
        <MuiThemeProvider>
          <div className='login'>
            <TextField
              hintText="Įveskite prisijungimo vardą"
              floatingLabelText="Prisijungimo vardas"
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Įveskite slaptažodį"
              floatingLabelText="Slaptažodis"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />

            <RaisedButton label="Prisijungti" primary={true} style={style} onClick={(event) => this.handleClick(event)} />

            <br />

            {/*sita linka BUTINA istrint, kai bus 
            padaryta passwordo validacija!! */}
            
            <div>
              <Link to="/admin" ><RaisedButton label="Admin Console" primary={true} style={style} /></Link>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

handleSubmit= (event)=>{
  event.preventDefault() ;
  const {username, password} = this.state;
  const {login} = this.props;
  login (username, password)
}

export default Login;