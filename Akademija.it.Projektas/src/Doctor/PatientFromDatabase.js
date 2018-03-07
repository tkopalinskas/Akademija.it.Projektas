import React, {Component} from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import NewPrescription from './NewPrescription';
import NewMedicalRecord from './NewMedicalRecord';

const styles ={
    marginLeft: 0,
    marginRight: 10
    
  }

class PatientFromDatabase extends Component{
    constructor(props){
        super(props);
        this.state = {
            fixedHeader: true,
            showRowHover: true,
            showCheckboxes: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            height: '300px',
            showModal: false,
            disabled: true,

            patients: [],
            firstName: '',
            lastName: '', 
            personalCode: '',
            value: ''    
        }
    }

    /* gets a personal code value and patients from database when enter key is hit */
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            let personalId=e.target.value;

            this.setState({
                personalCode: personalId,
            }); 
          
          axios
             .get("http://localhost:8081/doctor/findPatient/"  + personalId )
             .then((response) => {
                 console.log(response);
                 this.setState({patients: response.data});
             })
             .catch((error) => {
                 console.log(error);
                 alert('Tokio paciento nėra!')
             }); 
        }
    }

    /* sets a route value to a selected one */
    handleChange= (event, index, value) => {
        this.setState({value: event.target.value })
        if (event.target.value==="naujas receptas"){
            this.openPrescriptionModal();
        }else{
            this.openMedicalRecordModal();
        }
    };

    /* opens a prescription form */
    openPrescriptionModal = () => {
        this.setState({ showModal: !this.state.showModal });
    };

    /* opens a medical record form */
    openMedicalRecordModal = () => {
        this.setState({ showModal: !this.state.showModal });
    };


    render(){
        /*IMPORTANT!!!*/
        /* delete all console.logs before release! */
        console.log("a.k.", this.state.personalCode)
    
        if (!this.state.patients) {
            return null;
        } 

        /* picks which form to open, depending on value selected from dropdown */
        var newAdditionModal;
        if (this.state.value==="naujas receptas"){
            newAdditionModal=<NewPrescription  
                                open={this.state.showModal}
                                closeAction={this.openPrescriptionModal}/>
        }else{
            newAdditionModal=<NewMedicalRecord
                                open={this.state.showModal}
                                closeAction={this.openMedicalRecordModal}/>
        }    

        
        return(
            <MuiThemeProvider>
                <div>
                    <div>
                        <Search style={{ color: '#9E9E9E', textAlign: 'left', marginRight: '25', marginTop: '25'}} /> 
                        <TextField hintText="Paieška duombazėje" underlineShow={true} onKeyPress={this.handleKeyPress}/>
                    </div>
                <Table
                    height={this.state.height}
                    style={styles}
                    fixedHeader={this.state.fixedHeader}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                    >
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                    >
                        <TableRow>
                        <TableHeaderColumn colSpan="4" tooltip="Pacientai" style={{textAlign: 'center'}}>
                        Pacientai
                        </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                        <TableHeaderColumn 
                            style={{
                            whiteSpace: "normal",
                            wordWrap: "break-word"
                            }} 
                            tooltip="Vardas">Vardas</TableHeaderColumn>
                        <TableHeaderColumn 
                            style={{
                            whiteSpace: "normal",
                            wordWrap: "break-word"
                            }} 
                            tooltip="Pavardė">Pavardė</TableHeaderColumn>
                        <TableHeaderColumn 
                            style={{
                            whiteSpace: "normal",
                            wordWrap: "break-word"
                            }} 
                            tooltip="Asmens kodas">Asmens kodas</TableHeaderColumn>
                        <TableHeaderColumn 
                            style={{
                            whiteSpace: "normal",
                            wordWrap: "break-word"
                            }} 
                            tooltip="Info">Naujas įrašas</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                    >
                        <TableRow onClick={this.openPrescriptionModal} >
                            <TableRowColumn>{this.state.patients.firstName}</TableRowColumn>
                            <TableRowColumn>{this.state.patients.lastName}</TableRowColumn>
                            <TableRowColumn>{this.state.patients.personalId}</TableRowColumn>
                            <TableRowColumn>
                                <select className="routeToComponent" /* onClick={this.openModal} */
                                        value={this.state.value} onChange={this.handleChange}>
                                    <option id="moreOptions" value={""} >Daugiau</option>
                                    <option id="newMedicalRecord" value={"naujas ligos įrašas"}>Naujas ligos įrašas </option>
                                    <option id="newPrescription" value={"naujas receptas"}>Naujas receptas </option>
                                </select>
                            </TableRowColumn>
                        </TableRow>

                        {/* <TableRow >
                        <TableRowColumn>firstName</TableRowColumn>
                        <TableRowColumn>lastName</TableRowColumn>
                        <TableRowColumn>personalId</TableRowColumn>
                        <TableRowColumn>
                            <select className="routeToComponent" /* onClick={this.openModal} */
                                /* value={this.state.value} onChange={this.handleChange}>
                                <option id="moreOptions" value={""} >Daugiau</option>
                                <option id="newMedicalRecord" value={"naujas ligos įrašas"}>Naujas ligos įrašas </option>
                                <option id="newPrescription" value={"naujas receptas"}>Naujas receptas </option>
                            </select>
                        </TableRowColumn>
                        </TableRow>  */} 
                    </TableBody>
                </Table> 
                {newAdditionModal}
                </div>
            </MuiThemeProvider>
            
        )
    }
}
export default PatientFromDatabase