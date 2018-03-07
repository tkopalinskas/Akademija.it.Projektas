import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class InformationModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            disabled: true,
        };
    }

    handleToggle = () => {
        this.setState({ disabled: !this.state.disabled })
    }

    componentWillMount = ()=>{
        this.setState({disabled: true})
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
        

        console.log(this.props.userInfo);

        return (
            <div>
                <MuiThemeProvider>
                    <Dialog
                        actions={actions}
                        modal={true}
                        open={this.props.open}
                    >

                        <div  >
                <h3> {this.props.userInfo.firstName + " " + this.props.userInfo.lastName}</h3>
                <span>
                    <p>{"Rolė: " + this.props.userInfo.role}</p>
                    <p>Slapyvardis: {this.props.userInfo.userName}</p>
                    <p>Gimimo Data: {this.props.userInfo.dateOfBirth}</p>
                    <p>Paskirtas Daktaras: {this.props.userInfo.doctorsFullName}</p>
                    <p>{"Užbanintas: " + this.props.userInfo.suspended}</p>
                </span>
            </div>
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