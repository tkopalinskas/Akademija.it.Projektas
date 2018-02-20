import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom'
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import PropTypes from 'prop-types';



class RegisterBar extends Component {

static propTypes ={
   route: PropTypes.string
}

    constructor(props) {
        super(props);
        this.state = {
            showRegisterOptions: false,
            showAdminRegistration: false
            
        };
    }
    componentWillMount = (toggleName) => {this.setState({[toggleName]: !this.setState[toggleName]})}

    render() {

        return (
            <div className="newUserRegistrationMenu">
                <Drawer
                open={this.props.open}>
                    <AppBar title={<span>Registracija</span>}
                        iconElementLeft={<IconButton tooltip="Grįžti atgal" onClick={this.props.closeAction} >
                            <FontIcon className="goBackArrow"   /><ArrowBack/>
                                        </IconButton>}
                    />
                    <Link to="/admin/register/newadmin" style={{textDecoration: 'none'}}><MenuItem className="registerAdmin">Registruoti administratorių</MenuItem></Link>
                    <Link to="/admin/register/newpatient" style={{textDecoration: 'none'}}><MenuItem className="registerPatient">Registruoti pacientą</MenuItem></Link>
                    <Link to="/admin/register/newdoctor" style={{textDecoration: 'none'}}><MenuItem className="registerDoctor">Registruoti gydytoją</MenuItem></Link>
                    <Link to="/admin/register/newpharmacist" style={{textDecoration: 'none'}}><MenuItem className="registerPharmacist">Registruoti vaistininką</MenuItem></Link>
                </Drawer>
            </div>
            
        );
    }

}
export default RegisterBar;