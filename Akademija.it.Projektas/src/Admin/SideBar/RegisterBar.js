import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom'
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import RegisterAdmin from './Registration/RegisterAdmin';
import PropTypes from 'prop-types';



export default class RegisterBar extends React.Component {

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
            <div>
                <Drawer
                open = {this.props.open}>
                    <AppBar title={<span>Register</span>}
                        iconElementLeft={<IconButton tooltip="Gryšti atgal">
                            <FontIcon className="muidocs-icon-action-home" /><ArrowBack onClick={this.props.closeAction} />
                                        </IconButton>}
                    />
                    <Link to ="/admin/register/newadmin" style={{textDecoration: 'none'}}><MenuItem>Registruoti Adminą</MenuItem></Link>
                    <Link to ="/admin/register/newpatient" style={{textDecoration: 'none'}}><MenuItem>Registruoti Pacientą</MenuItem></Link>
                    <Link to ="/admin/register/newdoctor" style={{textDecoration: 'none'}}><MenuItem>Registruoti Daktarą</MenuItem></Link>
                    <Link to ="/admin/register/newpharmacist" style={{textDecoration: 'none'}}><MenuItem>Registruoti Vaistininką</MenuItem></Link>
                </Drawer>
            </div>
            
        );
    }

}