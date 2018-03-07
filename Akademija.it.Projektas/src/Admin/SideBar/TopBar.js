import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class TopBar extends Component {

    state = {
        LeftDrop: false
    }

    handleClick = (event) => {
        event.preventDefault();

        this.setState({
            LeftDrop: !this.state.LeftDrop,
            anchorEl: event.currentTarget,
        });
    };
    handleRequestClose = () => {
        this.setState({
            LeftDrop: false,
        });
    };

    render() {
        return (

            <MuiThemeProvider>
                <div>
                    <AppBar
                        className="helloUser"
                        showMenuIconButton={false}
                        iconElementRight={<FlatButton
                            className="userPopoverMenu"
                            onClick={this.handleClick}
                            label="Vardas Pavarde" />
                        }
                    />
                    <Popover
                        open={this.state.LeftDrop}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                        onRequestClose={this.handleRequestClose}
                    >
                        <Menu>
                            <MenuItem className="changePassword"
                                      primaryText="Pakeisti slaptažodį" 
                                      containerElement={<Link to="/admin/changePassword" />}/>
                            <MenuItem className="logOut"
                                      primaryText="Atsijungti" 
                                      containerElement={<Link to="/" />}/>
                        </Menu>
                    </Popover>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default TopBar;