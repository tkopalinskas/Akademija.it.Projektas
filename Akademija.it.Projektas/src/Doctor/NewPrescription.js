import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {orange500, blue500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField/TextField';
import axios from 'axios';
import {API} from "../Admin/SideBar/Registration/HostUrl";
import swal from 'sweetalert';

const textStyles = {
    errorStyle: {
      color: orange500,
    },
    floatingLabelFocusStyle: {
      color: blue500,
    },
};
let date = new Date()
let dateOfToday = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()

class NewPrescription extends Component {
    constructor(props) {
        super(props);
        console.log("props");
        console.log(props);
        this.state = {
            open: false,
            personalId:props.personalId,
            activeIngredient: '',
            amountPerDose: '',
            units: '',
            totalUnits:'',
            totalAmount: '',
            validUntil: '',
            description: '',   
        };
    }



    validActiveIngredientEntered(){
        if(this.state.activeIngredient!==''){
            return true;
        }
        else{
          swal({
            text: "Įveskite veikliąją medžiagą!",
            icon: "error",
           button: "Gerai",
        });
        }
    }

    validAmountPerDoseEntered(){
        if(this.state.amountPerDose!==''&&
        this.state.amountPerDose>0){
            return true;
        }
        else{
    
          swal({
            text: "Įveskite veikliosios medžiagos kiekį vienoje dozėje!",
            icon: "error",
           button: "Gerai",
        });
        }
    }

    validUnitsEntered(){
        if(this.state.units!==''){
            return true;
        }
        else{
          swal({
            text: "Įveskite matavimo vienetus!",
            icon: "error",
           button: "Gerai",
        });
          
        }
    }

    validTotalAmountEntered(){
        if(this.state.totalAmount!==''&&
        this.state.totalAmount>0){
            return true;
        }
        else{
          swal({
            text: "Įveskite visą išrašyto vaisto kiekį!",
            icon: "error",
           button: "Gerai",
        });
        }
    }

    validExpirationDateEntered(){   
        var reg = new RegExp(/(\d{4})(-)(\d{2})(-)(\d{2})/)
        var match = reg.exec(this.state.validUntil);
        //var expiration = new Date(this.state.validUntil) 
        
        if(/* expiration>this.dateForChecking && */
            match!==null ){
            return true
        }else{
           swal({
            text: "Įvesta galiojimo data yra praeityje, arba neteisingas datos formatas. Teisingas datos formatas: metai-mėnuo-diena",
            icon: "error",
           button: "Gerai",
        });

        }
    }

    validDescriptionEntered(){
        if(this.state.description!==''){
            return true;
        }
        else{
          swal({
              text: "Įveskite vaisto naudojimo aprašymą!",
              icon: "error",
             button: "Gerai",
          });

          };
        }


    dataIsValid(){
        if (this.validActiveIngredientEntered()&&
        this.validAmountPerDoseEntered()&&
        this.validUnitsEntered()&&
        this.validTotalAmountEntered()&&
        this.validDescriptionEntered()&&
        this.validExpirationDateEntered()){
            return true;
        }
  }

    addNewPrescription = (event)=>{
        if (this.dataIsValid()){
      
            console.log("data is valid: " + this.dataIsValid());
            var information= {
                activeIngredient: this.state.activeIngredient,
                amountPerDose: this.state.amountPerDose,
                units: this.state.units,
                totalAmount: this.state.totalAmount,
                validUntil: this.state.validUntil,
                description: this.state.description,
                prescriptionDate: dateOfToday
                }
        console.log('infos:')
        console.log(information);    
       let userData = window.sessionStorage.getItem('userData');
       let user = JSON.parse(userData);
            
            axios({
                method:'POST',
                url:API + "/doctor/" + user.userId + "/patient/" + this.state.personalId + "/addNewPrescription",
                headers:{'Content-type':'application/json'},
                data:information
            })
                .then((response)=>{
                console.log("registration  successful");
                swal({
                    text: "Receptas įrašytas!",
                    icon: "success",
                   button: "Gerai",
                });
                
                this.props.closeAction();    
            })
                .catch((error)=>{
                console.log(error);
                this.props.closeAction();
            })
           
            event.preventDefault();

        }else{
            console.log("some data is wrong");
        }
    }


    render() {

        console.log("date", this.state.currentDate);

        const actions = [
            <FlatButton
                label="Atgal"
                primary={true}
                onClick={this.props.closeAction}
            />,
            <FlatButton
                type="submit"
                label="Siųsti"
                primary={true}
                onClick={this.addNewPrescription}
            />,
        ];

        return (
            <div>
                <MuiThemeProvider>
                    <Dialog
                        title="Naujas receptas"
                        actions={actions}
                        modal={false}
                        open={this.props.open}
                        autoScrollBodyContent={true}
                    >
                        <TextField
                            className="activeIngredient"
                            id="inputActiveIngredient"
                            hintText="Veiklioji medžiaga"
                            errorText="Privalomas laukas"
                            errorStyle={textStyles.errorStyle}
                            floatingLabelText="Veiklioji medžiaga"
                            floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
                            onChange={(event, newValue) => this.setState({ activeIngredient: newValue })}
                        /><br/>
                        <TextField
                            className="amountPerDose"
                            id="inputAmountPerDose"
                            hintText="Medžiagos kiekis vienoje dozėje"
                            errorText="Privalomas laukas"
                            errorStyle={textStyles.errorStyle}
                            floatingLabelText="Medžiagos kiekis vienoje dozėje"
                            floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
                            onChange={(event, newValue) => this.setState({ amountPerDose: newValue })}
                        /><br/>
                        <TextField
                            className="units"
                            id="inputUnits"
                            hintText="Matavimo vienetai"
                            errorText="Privalomas laukas"
                            errorStyle={textStyles.errorStyle}
                            floatingLabelText="Matavimo vienetai"
                            floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
                            onChange={(event, newValue) => this.setState({ units: newValue })}
                        /><br/>
                        <TextField
                            className="totalAmount"
                            id="inputTotalAmount"
                            hintText="Bendras vaisto kiekis"
                            errorText="Privalomas laukas"
                            errorStyle={textStyles.errorStyle}
                            floatingLabelText="Vaisto kiekis (tabletėmis, ml ar kt.)"
                            floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
                            onChange={(event, newValue) => this.setState({ totalAmount: newValue })}
                        /><br/>
                         <TextField
                            className="totalUnits"
                            id="inputTotalUnits"
                            hintText="Matavimo vienetai"
                            errorText="Privalomas laukas"
                            errorStyle={textStyles.errorStyle}
                            floatingLabelText="Matavimo vienetai"
                            floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
                            onChange={(event, newValue) => this.setState({ totalUnits: newValue })}
                        /><br/>
                        <TextField
                            className="validUntil"
                            id="inputValidUntil"
                            hintText="YYYY-MM-DD"
                            floatingLabelText="Galiojimo data"
                            floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
                            onChange={(event, newValue) => this.setState({ validUntil: newValue })}
                        /><br/>
                        <TextField
                            className="description"
                            id="inputDescription"
                            hintText="Vartojimo aprašymas"
                            multiLine={true}
                            rows={2}
                            errorText="Privalomas laukas"
                            errorStyle={textStyles.errorStyle}
                            floatingLabelText="Vartojimo aprašymas"
                            floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
                            onChange={(event, newValue) => this.setState({ description: newValue })}
                        />
                    </Dialog>
                </MuiThemeProvider>
            </div>
        );
    }
}
export default NewPrescription