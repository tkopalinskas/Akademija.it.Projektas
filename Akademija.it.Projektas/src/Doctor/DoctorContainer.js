import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import DoctorWindowNavigation from './DoctorWindowNavigation';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const rowStyle={
    margin: 0,
}

const containerStyle={
    padding: 0,
}

class DoctorContainer extends Component{
    constructor(){
        super();
        this.state ={
            userName: 'user',
            medicalRecords: [],
            prescriptions: [],
            open: true,
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

    /* handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.setState({
                personalId: e.target.value,
            });
          console.log('do validate');
        }
    } */
    
    render(){

    let userData = window.sessionStorage.getItem('userData');
       if(userData==null)
            window.location.href="/#/";
       else{
           let user = JSON.parse(userData);
           if(user.role!='DOCTOR')
                window.location.href="/#/";
       }
        return(
            <MuiThemeProvider>
            <div>
                <Container fluid={true} style={containerStyle}>
                <Row style={rowStyle}>
                <Col md="12">
                <AppBar className="helloUser"
                        showMenuIconButton={false} iconElementRight={<FlatButton
                        className="userPopoverMenu"
                        onClick={this.handleClick}
                        label={"Sveiki, "+ this.state.userName} />
                    }>
                    <Popover
                        open={this.state.leftDrop}
                        anchorEl={this.state.anchorEl}
                        onRequestClose={this.handleRequestClose}
                    >
                            <MenuItem className="changePassword"
                                      containerElement={<Link to="/doctor/changePassword" />}
                                      primaryText="Pakeisti slaptažodį"/>   
                            <MenuItem className="logOut"
                                      containerElement={<Link to="/" />}
                                      primaryText="Atsijungti"/>
                    </Popover>
                </AppBar>
                </Col>
                </Row>
                </Container>
                <Container fluid={true} style={containerStyle}>
                <Row style={rowStyle}>
                <Col md="2">
                <Drawer open={this.state.open} width={170}>
                        <AppBar showMenuIconButton={false} >
                        </AppBar>
                    <MenuItem style={{whiteSpace: 'normal'}} 
                              primaryText="Pacientų sąrašas" 
                              containerElement={<Link to="/doctor/patientsList" />}
                               /* leftIcon={
                                <FontIcon className="patientsList">Pacientų sąrašas</FontIcon>
                    } */ /><br/>     
                    <MenuItem /* style={{whiteSpace: 'normal'}} */
                              primaryText="Paieška duombazėje" 
                              containerElement={<Link to="/doctor/findPatient" />}
                               /* leftIcon={
                                <FontIcon className="material-icons">Rasti pacientą duombazėje</FontIcon>
                    } */ />
                    {/* <Search style={{ color: '#9E9E9E', textAlign: 'left', marginRight: '15', marginTop: '0'}} /> 
                    <TextField hintText="Paieška duombazėje" underlineShow={true} onKeyPress={this.handleKeyPress}/>
                  </MenuItem><br/>        */}
                </Drawer>
                </Col>
                <Col md="10">
                    <DoctorWindowNavigation/>
                </Col>
            </Row>
            </Container> 

            </div>
            </MuiThemeProvider>
        );
    }
}
export default DoctorContainer;