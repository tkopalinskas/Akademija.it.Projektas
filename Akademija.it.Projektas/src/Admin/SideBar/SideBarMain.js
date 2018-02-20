import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RegisterBar from './RegisterBar';
import UserList from './UserList';
import './Drawer.css'
import {Link} from 'react-router-dom'
// import DrAndPatient from '.DrAndPatient'


class SideBarMain extends Component {


    constructor(props) {
        super(props);
        this.state = {
            open: true,
            showRegisterOptions: false,
            showPatientGetDoctor: false,
            showUserManagementOptions: false,
        };
    }
    handleToggle = (toggleName) => {
        this.setState({ [toggleName]: !this.state[toggleName] });
    }

    render() {
        return (
            <div>
                <Drawer open={this.state.open}
                /* width={170} */
                onRequestChange={this.state.closeAction}
                className="menu">
                
                
                    <AppBar title={<span>Meniu</span>}
                        showMenuIconButton={false} />
                    <MenuItem className="newUserRegistration" onClick={this.handleToggle.bind(this, "showRegisterOptions")}>Naujų vartotojų  registracija</MenuItem>
                    <Link to="/admin/assigndoctor" style={{textDecoration: 'none'}}><MenuItem className="doctorAssignmentToPatientMenu">Priskirti pacientą daktarui</MenuItem></Link>
                    <MenuItem className="usersLists" onClick={this.handleToggle.bind(this, "showUserManagementOptions")}>Vartotojų sarašas</MenuItem>
                </Drawer>
                <RegisterBar
                    open={this.state.showRegisterOptions}
                    closeAction={this.handleToggle.bind(this, 'showRegisterOptions')} 
                    />
                {/* <DrAndPatient
                    open={this.state.showPatientGetDoctor}
                    closeAction={this.handleToggle.bind(this, 'showPatientGetDoctor')} /> */}
                <UserList
                    open={this.state.showUserManagementOptions}
                    closeAction={this.handleToggle.bind(this, 'showUserManagementOptions')} />
            </div>
        );
    }
}

export default SideBarMain;