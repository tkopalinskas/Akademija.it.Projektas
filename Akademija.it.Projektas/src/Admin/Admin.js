import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link/*,  Route  */} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
    margin: 15,
};

class Admin extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <span>
                <div>
                    <Link to="/admin/admin/addNewAdmin" ><RaisedButton label="Admin" primary={true} style={style} /></Link>
                </div>
                <div>
                    <Link to="/admin/doctor" ><RaisedButton label="Doctor" primary={true} style={style} /></Link>
                </div>
                <div>
                    <Link to="/admin/patient" ><RaisedButton label="Patient" primary={true} style={style} /></Link>
                </div>
                <div>
                    <Link to="/admin/pharmacist" ><RaisedButton label="Pharmacist" primary={true} style={style} /></Link>
                </div>
                <div>
                    <Link to="/admin/visit" ><RaisedButton label="Registration to Dr" primary={true} style={style}/></Link>
                </div>
                </span>
            </MuiThemeProvider>

        );
    }
}

export default Admin;