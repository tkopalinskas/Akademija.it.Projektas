import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import ListofAdmins from './ListofAdmins';

export default class DrawerUndockedExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDrawer: false,
            showAdminList: false,
            showPatientList: false,
            showDoctorList: false,
            showPharmasistList: false,
        };
    }




    handleToggle = (toggleName) => {
        this.setState({ [toggleName]: !this.state[toggleName] });
    }
    





    // OpenListAdmins = () => this.setState({ openAdmin: !this.state.openAdmin});

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
                    <MenuItem onClick={this.handleOpenListPatients}>List of Patients</MenuItem>
                    <MenuItem onClick={this.handleOpenListDoctors}>List of Doctors</MenuItem>
                    <MenuItem onClick={this.handleOpenListPharmasists}>List of Pharmasists</MenuItem>
                    <ListofAdmins 
                    open={this.state.showAdminList} 
                    closeAction={this.handleToggle.bind(this, 'showAdminList')} />
                </Drawer>

            </div>

        );
    }
}