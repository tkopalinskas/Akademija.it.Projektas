import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import ListofAdmins from './ListofAdmins';
import ListofPatients from './ListofPatients';
import ListofDoctors from './ListofDoctors';
import ListofPharmasists from './ListofPharmacists'

export default class DrawerUndockedExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDrawer: false,
            showAdminList: false,
            showPatientList: false,
            showDoctorList: false,
            showPharmacistList: false,
        };
    }




    handleToggle = (toggleName) => {
        this.setState({ [toggleName]: !this.state[toggleName] });
    }
    

    render() {
        return (
            <div>
                <RaisedButton
                    label="Open Lists"
                    onClick={this.handleToggle.bind(this, "showDrawer")}
                />
                <Drawer
                    docked={false}
                    width={400}
                    open={this.state.showDrawer}
                    openSecondary={true}
                    onRequestChange={(showDrawer) => this.setState({showDrawer})}
                >
                    <MenuItem onClick={this.handleToggle.bind(this, "showDrawer")}>Close</MenuItem>
                    <MenuItem onClick={this.handleToggle.bind(this, "showAdminList")}>List of Admins</MenuItem>
                    <MenuItem onClick={this.handleToggle.bind(this, "showPatientList")}>List of Patients</MenuItem>
                    <MenuItem onClick={this.handleToggle.bind(this, "showDoctorList")}>List of Doctors</MenuItem>
                    <MenuItem onClick={this.handleToggle.bind(this, "showPharmacistList")}>List of Pharmasists</MenuItem>
                    <ListofAdmins 
                    open={this.state.showAdminList} 
                    closeAction={this.handleToggle.bind(this, 'showAdminList')} />
                    <ListofPatients
                    open={this.state.showPatientList} 
                    closeAction={this.handleToggle.bind(this, 'showPatientList')} />
                    <ListofDoctors
                    open={this.state.showDoctorList} 
                    closeAction={this.handleToggle.bind(this, 'showDoctorList')} />
                    <ListofPharmasists
                    open={this.state.showPharmacistList} 
                    closeAction={this.handleToggle.bind(this, 'showPharmacistList')} />
                </Drawer>

            </div>

        );
    }
}