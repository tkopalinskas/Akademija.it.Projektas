import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Admin extends Component {



  render() {
    return (
<MuiThemeProvider>
      <div>
        
          <Link to="/admin/admin" ><RaisedButton label="admin" primary={true} style={style} /></Link>
        
      </div>
      <div>
       
          <Link to="/admin/Doctor" ><RaisedButton label="Doctror" primary={true} style={style} /></Link>
        
      </div>
      <div>
        
          <Link to="/admin/Patient" ><RaisedButton label="Patient" primary={true} style={style} /></Link>
        
      </div>
      <div>
        
          <Link to="/admin/Pharmasist" ><RaisedButton label="Pharamsist" primary={true} style={style} /></Link>
        
      </div>
      </MuiThemeProvider>
     
    );
  }
}


const style = {
  margin: 15,
};
export default Admin;