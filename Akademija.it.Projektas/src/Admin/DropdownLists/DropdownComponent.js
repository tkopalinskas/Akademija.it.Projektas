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
                    label="Vartotojų sąrašas"
                    onClick={this.handleToggle.bind(this, "showDrawer")}
                />
                <Drawer
                    docked={false}
                    width={400}
                    open={this.state.showDrawer}
                    openSecondary={true}
                    onRequestChange={(showDrawer) => this.setState({showDrawer})}
                >
                    <MenuItem onClick={this.handleToggle.bind(this, "showDrawer")}>Uždaryti</MenuItem>
                    <MenuItem onClick={this.handleToggle.bind(this, "showAdminList")}>Adminstratorių sąrašas</MenuItem>
                    <MenuItem onClick={this.handleToggle.bind(this, "showPatientList")}>Pacientų sąrašas</MenuItem>
                    <MenuItem onClick={this.handleToggle.bind(this, "showDoctorList")}>Gydytojų sąrašas</MenuItem>
                    <MenuItem onClick={this.handleToggle.bind(this, "showPharmacistList")}>Vaistininkų sąrašas</MenuItem>
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