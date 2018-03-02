import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import PharmacistWindowNavigation from './PharmacistWindowNavigation';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
/* import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField'; */

const rowStyle={
    margin: 0,
}

const containerStyle={
    padding: 0,
}

class PharmacistContainer extends Component{
    constructor(){
        super();
        this.state ={
            userName: 'user',
            prescriptions: [],
            open: true,
            leftDrop: false,
            anchorOrigin: { horizontal: 'left',
                          vertical: 'bottom' },
            targetOrigin:{ horizontal: 'left', 
                          vertical: 'top' }
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

        /*remove before release */
        console.log(this.state.personalCode);

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
                                      containerElement={<Link to="/pharmacist/changePassword" />}
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
                        <AppBar showMenuIconButton={false}>
                        </AppBar>      
                    <MenuItem primaryText="Receptai"
                            /* containerElement={<Link to="/pharmacist/prescriptions" />} */
                              /* leftIcon={
                                <FontIcon className="listOfPatientsPrescriptions">Receptai</FontIcon>
                    } *//>       
                </Drawer>
                </Col>
                <Col md="10">
                    <PharmacistWindowNavigation/>
                </Col>
            </Row>
            </Container> 

            </div>
            </MuiThemeProvider>
        );
    }
}
export default PharmacistContainer;