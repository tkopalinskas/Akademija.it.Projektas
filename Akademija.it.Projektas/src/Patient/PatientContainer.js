import React, {Component} from 'react';
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
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const rowStyle={
    margin: 0,
}

const containerStyle={
    padding: 0,
}

class PatientContainer extends Component{
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

    
    render(){
        return(
            <MuiThemeProvider>
            <div>
                <Container fluid={true} style={containerStyle}>
                <Row style={rowStyle}>
                <Col xs="12" md="12">
                <AppBar showMenuIconButton={false} iconElementRight={<FlatButton
                        onClick={this.handleClick}
                        label={"Sveiki, "+ this.state.userName} />
                    }>
                    <Popover
                        open={this.state.leftDrop}
                        anchorEl={this.state.anchorEl}
                        onRequestClose={this.handleRequestClose}
                    >
                            <MenuItem containerElement={<Link to="/patient/changePassword" />}
                                      primaryText="Pakeisti slaptažodį"/>   
                            <MenuItem containerElement={<Link to="/" />}
                                      primaryText="Atsijungti"/>
                    </Popover>
                </AppBar>
                </Col>
                </Row>
                </Container>
                <Container fluid={true} style={containerStyle}>
                <Row style={rowStyle}>
                <Col xs="2" md="2">
                <Drawer open={this.state.open} width={170}>
                        <AppBar showMenuIconButton={false} 
                       /*  iconElementLeft={<div>
                            <FontIcon className="muidocs-icon-action-home" /><ArrowBack onClick={this.props.closeAction} />
                                        </div>} */>
                        </AppBar>
                    <MenuItem containerElement={<Link to="/patient/medicalRecords" />}
                              leftIcon={
                                <FontIcon className="material-icons">Ligos įrašai</FontIcon>
                    }/>       
                    <MenuItem containerElement={<Link to="/patient/prescriptions" />}
                              leftIcon={
                                <FontIcon className="material-icons">Receptai</FontIcon>
                    }/>       
                </Drawer>
                </Col>
                <Col xs="10" md="10">
                    <PatientWindowNavigation/>
                </Col>
            </Row>
            </Container> 

            </div>
            </MuiThemeProvider>
        );
    }
}
export default PatientContainer;