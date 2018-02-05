import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link/*,  Route  */} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropdownComponent from './DropdownLists/DropdownComponent';

const style = {
    margin: 15,
};
const changePasswordStyle={
    margin: 30,
};

class Admin extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <span>
                <div>
                    <h2 className="userRegistrationHeading">Naujų vartotojų registracija</h2>
                </div>
                <div>
                    <Link to="/admin/admin" ><RaisedButton label="Administratorius" primary={true} style={style} /></Link>
                </div>
                <div>
                    <Link to="/admin/doctor" ><RaisedButton label="Gydytojas" primary={true} style={style} /></Link>
                </div>
                <div>
                    <Link to="/admin/patient" ><RaisedButton label="Pacientas" primary={true} style={style} /></Link>
                </div>
                <div>
                    <Link to="/admin/pharmacist" ><RaisedButton label="Vaistininkas" primary={true} style={style} /></Link>
                </div>
                {/* <div>
                    <Link to="/admin/visit" ><RaisedButton label="Registration to Dr" primary={true} style={style}/></Link>
                </div> */}
                <div>
                    <Link to="/admin/:id/changePassword"><RaisedButton label="Pakeisti slaptažodį" primary={false} style={changePasswordStyle} /></Link>
                </div>
                <div>
                    <Link to="/ "><RaisedButton label="Atsijungti" primary={true} style={style} /></Link>
                </div>
                <div>
                    <DropdownComponent/>
                </div>
                </span>
                
            </MuiThemeProvider>

        );
    }
}

export default Admin;