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
            <div className="usersList">
                <Drawer
                    open={this.props.open}
                >
                    <AppBar title={<span>Vartotojai</span>}
                        iconElementLeft={<IconButton tooltip="Grįžti atgal" onClick={this.props.closeAction} >
                        <FontIcon className="goBackArrow" /><ArrowBack />
                                    </IconButton>} />
                    <Link to="/admin/alladmins" style={{textDecoration: 'none'}} id="allAdmins"><MenuItem className="adminsList">Administratorių sąrašas</MenuItem></Link>
                    <Link to="/admin/allpharmacists" style={{textDecoration: 'none'}} id="allPharmacists"><MenuItem className="pharmacistsList">Vaistininkų sąrašas</MenuItem></Link>
                    <Link to="/admin/alldoctors" style={{textDecoration: 'none'}} id="allDoctors"><MenuItem className="doctorsList">Gydytojų sąrašas</MenuItem></Link>
                    <Link to="/admin/allpatients" style={{textDecoration: 'none'}} id="allPatients"><MenuItem className="patientsList">Pacientų sąrašas</MenuItem></Link>
                    {/* <Link to="/admin/alladmins" style={{textDecoration: 'none'}} id="searchForUsers"><MenuItem className="search">Paieška</MenuItem></Link> */}
                    
                </Drawer>
            </div>
        );
    }

}
export default UserList;