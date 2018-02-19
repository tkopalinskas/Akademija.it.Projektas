import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import React, { Component } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 35db1d420ecf60c610c26c8dc642978f40251967



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
<<<<<<< HEAD

=======
            
>>>>>>> 35db1d420ecf60c610c26c8dc642978f40251967
            <MuiThemeProvider>
                <div>
                    <AppBar
                        showMenuIconButton={false}
                        iconElementRight={<FlatButton
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
<<<<<<< HEAD
                            <MenuItem primaryText="Pakeisti slapatažodį" 
                            containerElement={<Link to="/admin/changePassword" />}/>
                            <MenuItem primaryText="Atsijungti" 
                            containerElement={<Link to="/" />}/>
                        </Menu>
                    </Popover>
                </div>
=======
                            <MenuItem primaryText="Pakeisti slapatažodį" />
                            <MenuItem primaryText="Atsijungti" />
                        </Menu>
                    </Popover>
                </div>    
>>>>>>> 35db1d420ecf60c610c26c8dc642978f40251967
            </MuiThemeProvider>
        );
    }
}

export default TopBar;