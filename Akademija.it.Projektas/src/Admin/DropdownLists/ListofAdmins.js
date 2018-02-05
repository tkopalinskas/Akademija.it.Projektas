import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
//import {API} from "/Admin/Register/HostUrl";
import axios from 'axios'

export default class ListofAdmins extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        showAdminList: false,
        adminGet: []
        };
    }
   
    componentWillMount = () => {
        axios.get("http://localhost:8081/admin/allAdmins")
            .then((responce) => { this.setState({ adminGet: responce.data });console.log(this.state.adminGet)})
            .catch((error) => { console.log(error) });
            }             

    render() {
        var adminListComponent = this.state.adminGet.map((admins, index) =>
            <MenuItem key={index}>{admins.firstName + " " + admins.lastName}</MenuItem>)

         if(!this.state.adminGet){
             return null;
         }

        return (
            <div>
                <Drawer
                    docked={false}
                    width={400}
                    open={this.props.open}
                    openSecondary={true}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <MenuItem onClick={this.props.closeAction}>Grįžti atgal</MenuItem>

                    {adminListComponent}
                
                </Drawer>
            </div>
        );
    }
}