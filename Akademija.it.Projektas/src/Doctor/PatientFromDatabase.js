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
import FlatButton from 'material-ui/FlatButton/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import NewPrescription from './NewPrescription';

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

    /*get patients from database */
    componentWillMount(personalCode) {
        axios
             .get("http://localhost:8081/doctor"  + personalCode )
             .then((response) => {
                 console.log(response);
                 this.setState({patients: response.data});
             })
             .catch((error) => {
                 console.log(error);
             }); 
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.setState({
                personalCode: e.target.value,
            });
          console.log('do validate');
        }
    }
    openPrescriptionModal = () => {
        this.setState({ showModal: !this.state.showModal });
    };

    render(){
        /*IMPORTANT!!!*/
        /* delete all console.logs before release! */
        console.log("a.k.", this.state.personalCode)

        var patientFromDatabase = this.state.patients.map((patient, index) => (
            <TableRow key={index}  onClick={this.openPrescriptionModal} >
                <TableRowColumn>{patient.firstName}</TableRowColumn>
                <TableRowColumn>{patient.lastName}</TableRowColumn>
                <TableRowColumn>{patient.personalCode}</TableRowColumn>
                <TableRowColumn><FlatButton label="Naujas įrašas" primary={true}  onClick={()=>this.openPrescriptionModal(patient.personalCode)} /></TableRowColumn>
            </TableRow>
        ))
    
        if (!this.state.patients) {
            alert('Tokio paciento nėra!')
            return null;
           
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
                        { patientFromDatabase}
                        <TableRow >
                        <TableRowColumn>firstName</TableRowColumn>
                        <TableRowColumn>lastName</TableRowColumn>
                        <TableRowColumn>personalCode</TableRowColumn>
                        <TableRowColumn>
                            <DropDownMenu className="routeToComponent" /* onClick={this.openModal} */
                                value={this.state.value} onChange={this.handleChange}>
                                <MenuItem value={""} primaryText="Daugiau" />
                                <MenuItem value={"naujas ligos įrašas"} primaryText="Naujas ligos įrašas"  />
                                <MenuItem value={"naujas receptas"} primaryText="Naujas receptas" onClick={this.openPrescriptionModal}/>
                            </DropDownMenu>
                        </TableRowColumn>
                        </TableRow> 
                    </TableBody>
                </Table> 
                <NewPrescription
                        open={this.state.showModal}
                        closeAction={this.openPrescriptionModal} />
                </div>
            </MuiThemeProvider>
            
        )
    }
}
export default PatientFromDatabase