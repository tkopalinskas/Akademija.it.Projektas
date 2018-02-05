import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
//import {API} from "/doctors/Register/HostUrl";
import axios from 'axios'

export default class ListofDoctors extends React.Component {

 
    constructor(props) {
        super(props);
        this.state = {
        showDoctorList: false,
        doctorsGet: []
        };
    }
   
    componentWillMount = () => {
        axios.get("http://localhost:8081/admin/allDoctors")
            .then((responce) => { this.setState({ doctorsGet: responce.data });console.log(this.state.doctorsGet)})
            .catch((error) => { console.log(error) });
            }
   
            

    render() {
        var doctorsListComponent = this.state.doctorsGet.map((doctors, index) =>
            <MenuItem key={index}>{doctors.firstName + " " + doctors.lastName}</MenuItem>)

         if(!this.state.doctorsGet){
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
                    <MenuItem onClick={this.props.closeAction}>Back</MenuItem>

                    {doctorsListComponent}
                    
                    <MenuItem> Dotroino </MenuItem>

                </Drawer>
            </div>
        );
    }
}