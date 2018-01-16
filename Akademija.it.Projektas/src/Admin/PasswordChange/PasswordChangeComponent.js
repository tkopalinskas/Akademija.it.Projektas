import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class PasswordChangeComponent extends Comment {

    state= {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    }


    render() {
        return (
            <div>
                <TextField
                    type="password"
                    hintText="Enter your old Password"
                    floatingLabelText="Password"
                    onChange={(event, newValue) => this.setState({ oldPassword: newValue })}
                />
                <br />
                <TextField
                    type="password"
                    hintText="Enter your new Password"
                    floatingLabelText="Password"
                    onChange={(event, newValue) => this.setState({ newPassword: newValue })}
                />
                <br />
                <TextField
                    type="password"
                    hintText="Renter your new Password"
                    floatingLabelText="Password"
                    onChange={(event, newValue) => this.setState({ confirmPassword: newValue })}
                />
                <br />
                <RaisedButton label="Submit" primary={true} onClick={(event) => this.handleClick(event)} />
            </div>
        )
    }
}