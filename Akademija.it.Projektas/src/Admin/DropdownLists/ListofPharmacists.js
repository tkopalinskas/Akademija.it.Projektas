import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
//import {API} from "/Pharmacist/Register/HostUrl";
import axios from 'axios'

export default class ListofPharmacists extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
        showPharmacistList: false,
        PharmacistGet: []
        };
    }
   
    componentWillMount = () => {
        axios.get("http://localhost:8081/admin/allPharmacists")
            .then((responce) => { this.setState({ PharmacistGet: responce.data })})
            .catch((error) => { console.log(error) });
            }   
            
    render() {
        var PharmacistListComponent = this.state.PharmacistGet.map((pharmacists, index) =>
            <MenuItem key={index}>{pharmacists.firstName + " " + pharmacists.lastName}</MenuItem>)

         if(!this.state.PharmacistGet){
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
                    {PharmacistListComponent}               

                </Drawer>
            </div>
        );
    }
}