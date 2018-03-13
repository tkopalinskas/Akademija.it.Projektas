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

    componentWillMount = () => {
        this.setState({ disabled: true })
    }

    translate = (suspend) => {
        if (suspend) {
            return "Taip"
            .get("http://localhost:8081/user/" + this.props.userInfo.userId +"/suspend")
            .then((response) => {
                console.log(response + "Suspeded");
                this.setState({prescriptions: response.data});
            })
        } else {
            return "Ne"
        }
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
            />,
        ];

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
                                <p>Suspenduotas:  {this.translate(this.props.userInfo.suspanded)} </p>
                            </span>
                        </div>
                        <Checkbox
                            label="Suspenduoti vartotoją"
                            onCheck={this.handleToggle}
                        />
                    </Dialog>
                </MuiThemeProvider>
            </div>
        );
    }
}