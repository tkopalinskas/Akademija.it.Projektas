import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {orange500, blue500} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField/TextField';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import {API} from "../Admin/SideBar/Registration/HostUrl";

const textStyles = {
    errorStyle: {
      color: orange500,
    },
    floatingLabelFocusStyle: {
      color: blue500,
    },
};

class SinglePrescriptionInformation extends Component {

    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            open: false,
            disabled: true,
            amountUsed:'',
            markAsUsed: false,
            prescriptionUsesDate:'',
            prescriptionValid: true,
         prescriptionId: props.prescriptionId 
        };
    }

    componentWillMount = () => {
        this.setState({ disabled: true });
        this.getCurrentDate();
    }

    validAmountUsed(){
        if(this.state.amountUsed!==''&&
        this.state.amountUsed>0){
            return true;
        }
        else{
          alert("Įveskite perkamą vaisto kiekį.")
        }
    }

    prescriptionIsValid(){
        if(this.state.prescriptionUsesDate<this.props.validUntil){
            return true
        }else{
            this.setState({prescriptionValid: false})
        }
    }

    dataIsValid(){
        if(this.validAmountUsed()){
            return true
        }else{
            alert("Patikrinkite, ar įvedėte visą informaciją ir pažymėjote langelį")
        }
    }

    getCurrentDate(){
        let today = new Date()
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();
        if (month<10){
            month='0'+month;
        }
        if (day<10){
            day='0'+day
        }

        let dateForChecking = (year+'-'+month+'-'+day); 
        this.setState({prescriptionUsesDate: dateForChecking});
    }

    markPrescriptionAsUsed=(event)=>{
        
        
        if(this.dataIsValid()){
            this.setState({ disabled: true });
            

            let markPrescription ={
                amountUsed: this.state.amountUsed,
                /* timesUsed: this.state.timesUsed, */
                prescriptionUsesDate: this.state.prescriptionUsesDate
                /* markAsUsed: true */
            }

            let userData = window.sessionStorage.getItem('userData');
            let user = JSON.parse(userData);

            this.props.closeAction();

            /* let prescriptionId=this.props.validPrescriptionInfo.prescriptionId */

            axios({method:'POST',
                url:API + "/pharmacist/"+user.userId+"/prescription/"+this.props.validPrescriptionInfo.prescriptionId+"/markPrescriptionAsUsed/",
                headers:{'Content-type':'application/json'},
                data:markPrescription
            })
                .then((response)=>{
                console.log("registration  successful");
                
                alert("Receptas panaudotas!"); 
                this.props.closeAction();    
            })
                .catch((error)=>{
                console.log(error);
                this.props.closeAction();
                console.log("info on error", this.state)
            })
            console.log(this.state)
            event.preventDefault();
        }else{
            console.log("data is wrong");
            alert("Nepavyko panaudoti recepto. Bandykite dar kartą.")
        }
    }

    handleToggle = () => {
        this.setState({ disabled: !this.state.disabled })
    }

    render() {

        console.log("current", this.state.prescriptionUsesDate)

        if (!this.props.validPrescriptionInfo){
            return null;
        }

        const actions =[
            <FlatButton
                label="Atgal"
                primary={true}
                onClick={this.props.closeAction}
            />,

            <FlatButton
                label="Panaudoti receptą"
                primary={true}
                disabled={this.state.disabled}
                onClick={this.markPrescriptionAsUsed}
            />]

        var singlePrescription = null;

        if (this.props.validPrescriptionInfo.validUntil != null) {
            console.log(this.props.validPrescriptionInfo)
            singlePrescription = (
                <div >
                    <p> Galiojimo data: {this.props.validPrescriptionInfo.validUntil}</p>
                    <p> Išrašymo data: {this.props.validPrescriptionInfo.prescriptionDate}</p>
                    <p> Vaistą išrašęs gydytojas: {this.props.validPrescriptionInfo.doctorsFullName}</p>
                    <p> Panaudojimų skaičius: {this.props.validPrescriptionInfo.timesUsed}</p>
                    {/* <p> {this.props.validPrescriptionInfo.markAsUsed}</p> */}
                    <p> Veiklioji medžiaga: {this.props.validPrescriptionInfo.activeIngredient}</p>
                    <p> Kiekis vienoje dozėje: {this.props.validPrescriptionInfo.amountPerDose} {this.props.validPrescriptionInfo.units}</p>
                    <p> Visas vaisto kiekis: {this.props.validPrescriptionInfo.totalAmount} {this.props.validPrescriptionInfo.totalUnits}</p>
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
                        autoScrollBodyContent={true}
                    >
                        {singlePrescription}
                        <br/>
                    <Divider />
                        <TextField
                            className="amountUsed"
                            id="inputAmountUsed"
                            hintText="Nupirktas vaisto kiekis"
                            errorText="Privalomas laukas"
                            errorStyle={textStyles.errorStyle}
                            floatingLabelText="Nupirktas vaisto kiekis"
                            floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
                            onChange={(event, newValue) => this.setState({ amountUsed: newValue })}
                        /><br/>
                        <Checkbox
                            label="Panaudoti receptą"
                            onCheck={this.handleToggle}
                        /> 
                    </Dialog>

                </div>
            </MuiThemeProvider>
        );
    }
}
export default SinglePrescriptionInformation;