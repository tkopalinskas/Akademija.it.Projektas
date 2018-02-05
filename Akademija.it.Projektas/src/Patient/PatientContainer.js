import React, {Component} from 'react';
//import axios from 'axios';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
//import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import PatientWindowNavigation from './PatientWindowNavigation';
import './SideBar.css';
//import MedicalRecordsComponent from './MedicalRecordsComponent';
//import ManyPrescriptionsComponent from './ManyPrescriptionsComponent';



class PatientContainer extends Component{
    constructor(){
        super();
        this.state ={
            firstName: 'user',
            medicalRecords: [],
            prescriptions: [],
            open: true,
            selection: '',
            leftDrop: false,
            anchorOrigin: { horizontal: 'left',
                          vertical: 'bottom' },
            targetOrigin:{ horizontal: 'left', 
                          vertical: 'top' },              
        }
    }

    handleClick = (event) => {
        event.preventDefault();

        this.setState({
            leftDrop: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            leftDrop: false,
        });
    };

    setAnchor = (positionElement, position) => {
        const {anchorOrigin} = this.state;
        anchorOrigin[positionElement] = position;
    
        this.setState({
          anchorOrigin: anchorOrigin,
        });
      };
    
      setTarget = (positionElement, position) => {
        const {targetOrigin} = this.state;
        targetOrigin[positionElement] = position;
    
        this.setState({
          targetOrigin: targetOrigin,
        });
      };

    /* componentWillMount(){
         /* axios.get('http://localhost:8081/patient/visit/allVisits')
                .then((response) =>{this.setState({medicalRecords: response.data});
                })
                .catch((error)=>{
                    console.log(error);
                });
                
                axios.get('http://localhost:8081/patient/prescription/allPrescriptions')
                .then((response)=>{this.setState({prescriptions: response.data});
                })
                .catch((error)=>{
                    console.log(error);
                });
            }) 
    } */

    render(){
        return(
            <MuiThemeProvider>
            <div>
                <AppBar showMenuIconButton={false} iconElementRight={<FlatButton
                        onClick={this.handleClick}
                        label={"Sveiki, "+ this.state.firstName} />
                    }>
                    <Popover
                        open={this.state.leftDrop}
                        anchorEl={this.state.anchorEl}
                        onRequestClose={this.handleRequestClose}
                    >
                            <MenuItem containerElement={<Link to="/patient/:id/changePassword" />}
                                      primaryText="Pakeisti slaptažodį"/>   
                            <MenuItem containerElement={<Link to="/" />}
                                      primaryText="Atsijungti"/>
                    </Popover>
                </AppBar>
 
                <Drawer open={this.state.open} >
                        <AppBar showMenuIconButton={false} 
                       /*  iconElementLeft={<div>
                            <FontIcon className="muidocs-icon-action-home" /><ArrowBack onClick={this.props.closeAction} />
                                        </div>} */>
                        </AppBar>
                    <MenuItem containerElement={<Link to="/patient/:id/medicalRecords" />}
                              leftIcon={
                                <FontIcon className="material-icons">Ligos įrašai</FontIcon>
                    }/>       
                    <MenuItem containerElement={<Link to="/patient/:id/prescriptions" />}
                              leftIcon={
                                <FontIcon className="material-icons">Receptai</FontIcon>
                    }/>       
                </Drawer> 
                <PatientWindowNavigation/>
            </div>
            </MuiThemeProvider>
        );
    }
}
export default PatientContainer;