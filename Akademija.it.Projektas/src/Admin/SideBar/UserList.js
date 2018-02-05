import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import axios from 'axios';
import {Link} from 'react-router-dom';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

export default class UserList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            showUserManagementOptions: false,
        };
    }



    render() {

        return (
            <div>
                <Drawer
                    open={this.props.open}
                >
                    <AppBar title={<span>User List</span>}
                        iconElementLeft={<IconButton tooltip="Gryšti atgal">
                        <FontIcon className="muidocs-icon-action-home" /><ArrowBack onClick={this.props.closeAction} />
                                    </IconButton>} />
                    <Link to ="/admin/alladmins" style={{textDecoration: 'none'}}><MenuItem>Administratorių Sarašas</MenuItem></Link>
                    <Link to ="/admin/allpharmacists" style={{textDecoration: 'none'}}><MenuItem>Vaistininkų Sarašas</MenuItem></Link>
                    <Link to ="/admin/alldoctors" style={{textDecoration: 'none'}}><MenuItem>Daktarų Sarašas</MenuItem></Link>
                    <Link to ="/admin/allpatients" style={{textDecoration: 'none'}}><MenuItem>Pacientų Sarašas</MenuItem></Link>
                    <Link to ="/admin/alladmins" style={{textDecoration: 'none'}}><MenuItem>Paieška</MenuItem></Link>
                    
                </Drawer>
            </div>
        );
    }

}