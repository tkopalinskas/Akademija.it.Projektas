import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {orange500, blue500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField/TextField';
import Checkbox from 'material-ui/Checkbox';
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

class NewMedicalRecord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,

            currentDate: '',
            illnessTLKCode: '',
            lengthOfVisit: '',
            description: '',
            visitIsCompensated: false,
            visitIsRepeated: false,

        };
    }

    checkCompensatedVisit=()=>{
        this.setState({ visitIsCompensated: !this.state.visitIsCompensated })
    }

    checkRepeatedVisit=()=>{
        this.setState({ visitIsRepeated: !this.state.visitIsRepeated })
    }

    validLengthOfVisit(){
        if(this.state.lengthOfVisit!==''&&
        this.state.lengthOfVisit>0){
            return true;
        }
        else{
          alert("Įveskite vizito trukmę minutėmis!")
        }
    }

    validIllnessTLKCode(){
        var reg = null;
        var withoutDecimal=new RegExp(/([A-Z]{1})(\d{2})/);
        var withDecimal=new RegExp(/([A-Z]{1})(\d{2}\.\d{1,2})/);

        if (withoutDecimal!==null){
            reg=withoutDecimal
        }else if(withDecimal!=null){
            reg=withDecimal
        }

        var match = reg.exec(this.state.illnessTLKCode)

        if(this.state.illnessTLKCode!==''&&
        match!==null){
            return true;
        }
        else if (match===null){
            alert("Neteisingai įvestas ligos kodas. Ligos kodai sudaromi iš vienos didžiosios lotyniškos raidės ir dviejų skaitmenų. Patikslinant diagnozę, po taško dar gali būti rašomi vienas arba du skaitmenys.")
        }else{
            alert("Įveskite ligos TLK kodą!")
        }
    }

    validDescriptionEntered(){
        if(this.state.description!==''){
            return true;
        }
        else{
          alert("Įveskite ligos aprašymą!")
        }
    }

    getCurrentDate(){
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();
        if (month<10){
            month='0'+month;
        }
        if (day<10){
            day='0'+day
        }
        this.setState({currentDate: year+'-'+month+'-'+day});
    }

    dataIsValid(){
        if (this.validLengthOfVisit()&&
        this.validIllnessTLKCode()&&
        this.validDescriptionEntered()){
            return true;
        }
  }

    addNewMedicalRecord = (event)=>{
        if (this.dataIsValid()){

            this.getCurrentDate();
      
            console.log("data is valid: " + this.dataIsValid());
            var information= {
                lengthOfVisit: this.state.lengthOfVisit,
                illnessTLKCode: this.state.illnessTLKCode,
                visitIsCompensated: this.state.visitIsCompensated,
                visitIsRepeated: this.state.visitIsRepeated,
                description: this.state.description,
                currentDate:this.state.currentDate   
                }
            

            axios.post(API + "/doctor/patient/addNewRecord/", information)
                .then((response)=>{
                console.log("registration  successful");
                alert("Ligos istorija įrašyta!"); 
                this.props.closeAction();    
            })
                .catch((error)=>{
                console.log(error);
                this.props.closeAction();
                console.log("info on error", this.state)
            })
            console.log("ok");
            console.log("info", this.state)
            event.preventDefault();

        }else{
            console.log("some data is wrong");
        }
    }


    render() {

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
                onClick={this.addNewMedicalRecord}
            />,
        ];

        return (
            <div>
                <MuiThemeProvider>
                    <Dialog
                        title="Nauja ligos istorija"
                        actions={actions}
                        modal={false}
                        open={this.props.open}
                        autoScrollBodyContent={true}
                    >
                        <TextField
                            className="lengthOfVisit"
                            id="inputLengthOfVisit"
                            hintText="Vizito trukmė"
                            errorText="Privalomas laukas"
                            errorStyle={textStyles.errorStyle}
                            floatingLabelText="Vizito trukmė (minutėmis)"
                            floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
                            onChange={(event, newValue) => this.setState({ lengthOfVisit: newValue })}
                        /><br/>
                        <TextField
                            className="illnessTLKCode"
                            id="inputIllnessTLKCode"
                            hintText="Pvz.: P-10"
                            errorText="Privalomas laukas"
                            errorStyle={textStyles.errorStyle}
                            floatingLabelText="Ligos TLK-10 kodas"
                            floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
                            onChange={(event, newValue) => this.setState({ illnessTLKCode: newValue })}
                        /><br/>
                        <Checkbox
                            label="Vizitas kompensuojamas"
                            onCheck={this.checkCompensatedVisit}
                        /><br/>
                        <Checkbox
                            label="Pakartotinis vizitas"
                            onCheck={this.checkRepeatedVisit}
                        /><br/> 
                        <TextField
                            className="description"
                            id="inputDescription"
                            hintText="Vizito aprašymas"
                            multiLine={true}
                            rows={2}
                            errorText="Privalomas laukas"
                            errorStyle={textStyles.errorStyle}
                            floatingLabelText="Vizito aprašymas"
                            floatingLabelFocusStyle={textStyles.floatingLabelFocusStyle}
                            onChange={(event, newValue) => this.setState({ description: newValue })}
                        />
                    </Dialog>
                </MuiThemeProvider>
            </div>
        );
    }
}
export default NewMedicalRecord