import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
//import {API} from "/patients/Register/HostUrl";
import axios from 'axios'

export default class Listofpatientss extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
        showPatientList: false,
        patientsGet: []
        };
    }
   
    componentWillMount = () => {
        axios.get("http://localhost:8081/admin/allPatients")
            .then((responce) => { this.setState({ patientsGet: responce.data });})
            .catch((error) => { console.log(error) });
            }           

    render() {
        var patientsListComponent = this.state.patientsGet.map((patients, index) =>
            <MenuItem key={index}>{patients.firstName + " " + patients.lastName}</MenuItem>)

         if(!this.state.patientsGet){
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
                    {patientsListComponent}
                
                </Drawer>
            </div>
        );
    }
}