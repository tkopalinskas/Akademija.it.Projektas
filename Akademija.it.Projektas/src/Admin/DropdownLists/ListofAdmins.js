import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
//import {API} from "/Admin/Register/HostUrl";
import axios from 'axios'

export default class ListofAdmins extends React.Component {
  state = {
        showAdminList: false,
        
    };
    adminsList = [{
        firstName: "Tomas Kopalinskas",
        number: "0"
    },{
        firstName: "Krabas Pabas",
        number: "1"
    },{
        firstName: "admin pradin",
        number: "2"
    },{
        firstName: "vardas pavarde",
        number: "3"
    }];
    

getAdmins(){
     axios.get("http://localhost:8081/admin/allAdmins")
     .then((responce)=>{this.setState({adminsList: responce.data.firstName})})
     .catch((error)=>{console.log(error)});
     ;
}

    render() {
        console.log()
        return (
            <div>
                <Drawer
                    docked={false}
                    width={400}
                    open={this.props.open}
                    openSecondary={true}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onClick={this.props.closeAction}>Back</MenuItem>

                    {this.adminsList.map((admins, index) => 
                    <MenuItem key={index}>{admins.firstName}</MenuItem>)} 

                    <MenuItem>admin</MenuItem>
                    <MenuItem>admin</MenuItem>
              
                </Drawer>
            </div>
        );
    }
    }