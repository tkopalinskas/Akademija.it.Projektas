import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

 
class UserList extends Component {


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
                    <AppBar title={<span>Vartotojai</span>}
                        iconElementLeft={<IconButton tooltip="Grįžti atgal">
                        <FontIcon className="muidocs-icon-action-home" /><ArrowBack onClick={this.props.closeAction} />
                                    </IconButton>} />
                    <Link to="/admin/alladmins" style={{textDecoration: 'none'}}><MenuItem>Administratorių sąrašas</MenuItem></Link>
                    <Link to="/admin/allpharmacists" style={{textDecoration: 'none'}}><MenuItem>Vaistininkų sąrašas</MenuItem></Link>
                    <Link to="/admin/alldoctors" style={{textDecoration: 'none'}}><MenuItem>Gydytojų sąrašas</MenuItem></Link>
                    <Link to="/admin/allpatients" style={{textDecoration: 'none'}}><MenuItem>Pacientų sąrašas</MenuItem></Link>
                    <Link to="/admin/alladmins" style={{textDecoration: 'none'}}><MenuItem>Paieška</MenuItem></Link>
                    
                </Drawer>
            </div>
        );
    }

}
export default UserList;