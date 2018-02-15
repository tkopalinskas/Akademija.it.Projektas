import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class InformationModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            disabled: true,
        };
    }
    
    handleOpen = () => {
        this.setState({open: true});
    };
    
    handleClose = () => {
        this.setState({open: false});
    };
    
    handleToggle=()=>{ 
        this.setState({ disabled: !this.state.disabled })
    }


    render() {

        if (!this.props.validPrescriptionInfo){
            return null;
        }

        const actions = [
            <FlatButton
                label="Atsisakyti"
                primary={true}
                onClick={this.props.closeAction}
            />,
            <FlatButton
                label="Siųsti"
                primary={true}
                disabled={this.state.disabled}
                onClick={this.props.closeAction}
            />,
        ];

//modal pagauna paduoda array su specifiniu userinfo per props 68 eilute ideda i modal
           let prescription  = this.props.validPrescriptionInfo.map((prescription, index) => (
                <div key={index} >
                    <p> {prescription.validUntil}</p>
                    <p> {prescription.prescriptionDate}</p>
                    <p> {prescription.timesUsed}</p>
                    <p> {prescription.markAsUsed}</p>
                    <p> {prescription.activeIngredient}</p>
                    <p> {prescription.description}</p>
                </div>
        )); 

        console.log(this.props.validPrescriptionInfo) ; 

        return (     
            <MuiThemeProvider>
                <div>
                    <Dialog
                        title="Receptas"
                        actions={actions}
                        modal={true}
                        open={this.props.open}
                    >
                        <Checkbox
                            label="Panaudoti receptą"
                            onCheck={this.handleToggle}
                        />
                        {prescription}
                    </Dialog>
                </div>
            </MuiThemeProvider>  
        );
    }
}
export default InformationModal;