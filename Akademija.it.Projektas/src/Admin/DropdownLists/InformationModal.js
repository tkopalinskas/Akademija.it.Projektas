import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios'


export default class InformationModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            disabled: true,
            name: "",
        };
    }

    handleToggle = () => {
        this.setState({ disabled: !this.state.disabled })
    }


    render() {

        if (!this.props.userInfo) {
            return null;
        }

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.props.closeAction}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={this.state.disabled}
            // onClick={this.props.closeAction}
            />,
        ];

        //modal pagauna paduoda array su specifiniu userinfo per props
        let user = this.props.userInfo.map((User, index) => (
            <div key={index} >
                <p> {User.firstName + " " + User.lastName}</p>
                <p>{User.role + " " + User.notSuspended}</p>
            </div>
        ));

        console.log(this.props.userInfo);

        return (
            <div>
                <MuiThemeProvider>
                    <Dialog
                        title={this.name}
                        actions={actions}
                        modal={true}
                        open={this.props.open}
                    >
                        <Checkbox
                            label="Suspend User"
                            onCheck={this.handleToggle}
                        />
                        {user}
                    </Dialog>
                </MuiThemeProvider>
            </div>
        );
    }
}