import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
//import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class SinglePrescriptionInformation extends Component {

    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            open: false
        };
    }

    render() {

        if (!this.props.validPrescriptionInfo){
            return null;
        }

        const actions =
            (<FlatButton
                label="Atgal"
                primary={true}
                onClick={this.props.closeAction}
            />);

        var singlePrescription = null;

        if (this.props.validPrescriptionInfo.validUntil != null) {
            console.log(this.props.validPrescriptionInfo)
            singlePrescription = (
                <div >
                    <p> Galiojimo data: {this.props.validPrescriptionInfo.validUntil}</p>
                    <p> Išrašymo data: {this.props.validPrescriptionInfo.prescriptionDate}</p>
                    <p> Panaudojimų skaičius: {this.props.validPrescriptionInfo.timesUsed}</p>
                    {/* <p> {this.props.validPrescriptionInfo.markAsUsed}</p> */}
                    <p> Veiklioji medžiaga: {this.props.validPrescriptionInfo.activeIngredient}</p>
                    <p> Aprašymas: {this.props.validPrescriptionInfo.description}</p>
                </div>
            )
        }
        console.log(this.props.validPrescriptionInfo);
        console.log(singlePrescription);
        console.log("open", this.state.open);
        console.log("numbs:", this.state.number)

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
export default SinglePrescriptionInformation;