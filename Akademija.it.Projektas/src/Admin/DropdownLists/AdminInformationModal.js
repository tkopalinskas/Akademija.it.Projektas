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

    translate = (suspend)=>{
        if (suspend){
            return "Taip"
        } else{
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
            // onClick={this.props.closeAction}
            />,
        ];

        //modal pagauna paduoda array su specifiniu userinfo per props
        let user = this.props.userInfo.map((User, index) => (
            <div key={index} >
                <h3> {User.firstName + " " + User.lastName}</h3>
                <span>
                    <p>{"Rolė: " + User.role}</p>
                    <p>Slapyvardis: {User.userName}</p>
                    <p>Užbanintas:  {this.translate(User.suspanded)} </p>
                </span>
            </div>
        ));


        console.log(this.props.userInfo);

        return (
            <div>
                <MuiThemeProvider>
                    <Dialog
                        actions={actions}
                        modal={true}
                        open={this.props.open}
                    >

                        {user}
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