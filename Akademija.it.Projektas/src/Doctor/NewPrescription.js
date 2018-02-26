import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {orange500, blue500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField/TextField';
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

class NewPrescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,

            activeIngredient: '',
            amountPerDose: '',
            units: '',
            totalAmount: '',
            validUntil: '',
            description: ''
        };
    }

    validActiveIngredientEntered(){
        if(this.state.activeIngredient!==''){
            return true;
        }
        else{
          alert("Įveskite veikliąją medžiagą!")
        }
    }

    validAmountPerDoseEntered(){
        if(this.state.amountPerDose!==''&&
        this.state.amountPerDose>0){
            return true;
        }
        else{
          alert("Įveskite veikliosios medžiagos kiekį vienoje dozėje!")
        }
    }

    validUnitsEntered(){
        if(this.state.units!==''){
            return true;
        }
        else{
          alert("Įveskite matavimo vienetus!")
        }
    }

    validTotalAmountEntered(){
        if(this.state.totalAmount!==''&&
        this.state.totalAmount>0){
            return true;
        }
        else{
          alert("Įveskite visą išrašyto vaisto kiekį!")
        }
    }

    validDescriptionEntered(){
        if(this.state.description!==''){
            return true;
        }
        else{
          alert("Įveskite vaisto naudojimo aprašymą!")
        }
    }

    dataIsValid(){
        if (this.validActiveIngredientEntered()&&
        this.validAmountPerDoseEntered()&&
        this.validUnitsEntered()&&
        this.validTotalAmountEntered()&&
        this.validDescriptionEntered()){
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
                description: this.state.description
                
                }
            

            axios.post(API + "/prescription/", information)
                .then((response)=>{
                console.log("registration  successful");
                alert("Registracija sėkminga!"); 
                this.props.closeAction();    
            })
                .catch((error)=>{
                console.log(error);
                this.props.closeAction();
            })
            console.log("ok");
            event.preventDefault();

        }else{
            console.log("some data is wrong");
        }
    }


    render() {

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.props.closeAction}
            />,
            <FlatButton
                type="submit"
                label="Submit"
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
                            id="inputactiveIngredient"
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
                            className="validUntil"
                            id="inputValidUntil"
                            hintText="METAI-MĖNUO-DIENA"
                            /* errorText="Privalomas laukas"
                            errorStyle={textStyles.errorStyle} */
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