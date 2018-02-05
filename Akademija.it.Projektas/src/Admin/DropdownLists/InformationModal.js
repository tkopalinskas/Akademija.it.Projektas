import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class InformationModal extends React.Component {
    state = {
        open: false,
        disabled: true,
    };



    handleToggle = () => {
        this.setState({ disabled: !this.state.disabled })
    }

    render() {
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


        console.log(this.state.disabled)
        return (
            <div>
                <MuiThemeProvider>
                    <Dialog
                        title="Vardas Pavarde"
                        actions={actions}
                        modal={true}
                        open={this.props.open}
                    >
                        <Checkbox
                            label="Suspend User"
                            onCheck={this.handleToggle}
                        />
                    </Dialog>
                </MuiThemeProvider>
            </div>
        );
    }
}