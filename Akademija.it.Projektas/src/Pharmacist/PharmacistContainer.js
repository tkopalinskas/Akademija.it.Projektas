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
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import PharmacistsPrescriptionsTable from './PharmacistsPrescriptionsTable';

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
                          vertical: 'top' },
                          
            personalCode: ''
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

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.setState({
                personalCode: e.target.value,
            });
          console.log('do validate');
          
        }
    }
    
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
                    <MenuItem /* containerElement={<Link to="/pharmacist/prescriptions" />} */
                              leftIcon={
                                <FontIcon className="listOfPatientsPrescriptions">Receptai</FontIcon>
                    }/>       
                </Drawer>
                </Col>
                <Col md="10">
                    <div>
                        <Search style={{ color: '#9E9E9E', textAlign: 'left', marginRight: '15', marginTop: '25'}} />
                        <TextField hintText="Paciento asmens kodas" 
                                   underlineShow={true} 
                                   onKeyPress={this.handleKeyPress}/>
                    </div>
                    <PharmacistWindowNavigation/>
                    <PharmacistsPrescriptionsTable personalCode={this.state.personalCode}/>
                </Col>
            </Row>
            </Container> 

            </div>
            </MuiThemeProvider>
        );
    }
}
export default PharmacistContainer;