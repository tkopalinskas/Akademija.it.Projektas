import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
//import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class InformationModal extends Component {

    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            open: false
        };
    }

    /* handleOpen = () => {
        this.setState({ open: true });
    }; */

    handleClose = () => {
        this.setState({ open: false });
        console.log("open", this.open)
    };

    /* handleToggle = () => {
        this.setState({ disabled: !this.state.disabled })
    } */


    render() {

        // if (!this.state.prescriptionInfo){
        //     return null;
        // }

        const actions =
            (<FlatButton
                label="Atgal"
                primary={true}
                onClick={this.props.closeAction}
            />);

        var singlePrescription = null;

        if (this.props.prescriptionInfo.validUntil != null) {
            console.log(this.props.prescriptionInfo)
            singlePrescription = (
                <div >
                    <p> Galiojimo data: {this.props.prescriptionInfo.validUntil}</p>
                    <p> Išrašymo data: {this.props.prescriptionInfo.prescriptionDate}</p>
                    <p> Panaudojimų skaičius: {this.props.prescriptionInfo.timesUsed}</p>
                    {/* <p> {this.props.prescriptionInfo.markAsUsed}</p> */}
                    <p> Veiklioji medžiaga: {this.props.prescriptionInfo.activeIngredient}</p>
                    <p> Aprašymas: {this.props.prescriptionInfo.description}</p>
                </div>
            )
        }
        console.log(this.props.prescriptionInfo);
        console.log(singlePrescription);
        console.log("open", this.open);

        return (
            <MuiThemeProvider>
                <div>
                    <Dialog
                        title="Receptas"
                        actions={actions}
                        modal={true}
                        open={this.props.open}
                    >
                        {/* <Checkbox
                            label="Panaudoti receptą"
                            onCheck={this.handleToggle}
                        /> */}
                        {singlePrescription}
                    </Dialog>

                </div>
            </MuiThemeProvider>
        );
    }
}
export default InformationModal;