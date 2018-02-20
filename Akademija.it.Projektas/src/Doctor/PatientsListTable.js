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
/* import InformationModal from './InformationModal' */
//import FlatButton from 'material-ui/FlatButton/FlatButton';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

const styles ={
  marginLeft: 0,
  marginRight: 10
  
}

class PatientsListTable extends Component {
    constructor(){
        super();
        this.state = {
            fixedHeader: true,
            showRowHover: true,
            showCheckboxes: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            height: '300px',

            patients: [],
            firstName: '',
            lastName: '',
            personalCode: '',
            illnessTLKCode: '',
            /* description: '', */
            routeToComponent: '',
            value: ''
        }
    }
    componentWillMount(){
        axios
            .get("http://localhost:8081/doctor/patientsList")
            .then((response) => {
                console.log(response);
                this.setState({patients: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    } 

    handleChange= (event, index, value) => {
        this.setState({ routeToComponent: value, value: value });
        
    }

      render() {
        var allPatients = this.state.patients.map((patient, index) => (
          <TableRow key={index}/*  onClick={this.openModal} */>
              <TableRowColumn>{patient.firstName}</TableRowColumn>
              <TableRowColumn>{patient.lastName}</TableRowColumn>
              <TableRowColumn>{patient.personalCode}</TableRowColumn>
              {/* <TableRowColumn>{patient.illnessTLKCode}</TableRowColumn> */}
              <TableRowColumn>
                    <DropDownMenu className="routeToComponent" /* onClick={this.openModal} */
                                      value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={""} primaryText="Daugiau informacijos" />
                            <MenuItem value={"receptai"} primaryText="Receptai" />
                            <MenuItem value={"ligos įrašai"} primaryText="Ligos įrašai" 
                                      containerElement={<Link to="/doctor/patient/medicalRecords" />} />
                            <MenuItem value={"naujas ligos įrašas"} primaryText="Naujas ligos įrašas" />
                            <MenuItem value={"naujas receptas"} primaryText="Naujas receptas" />
                    </DropDownMenu>
                 {/*  <FlatButton label="Daugiau" primary={true} /* onClick={this.openModal} */  }/>
                </TableRowColumn>
          </TableRow>
      ))

      if (!this.state.patients) {
          return null;
      }

        return (
        <MuiThemeProvider>
        <div>
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
                {/* <TableRow>
                    <TableHeaderColumn colSpan="4" tooltip="Paieška" style={{ textAlign: 'left' }}>
                        <div>
                            <Search style={{ color: '#9E9E9E', marginRight: '15', }} />
                            <TextField hintText="Paieška" underlineShow={false} />
                        </div>
                    </TableHeaderColumn>
                </TableRow>
             */}
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
                  {/* <TableHeaderColumn 
                    style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word"
                    }} 
                    tooltip="Ligos TLK kodas">Ligos TLK kodas</TableHeaderColumn> */}
                  <TableHeaderColumn 
                    style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word"
                    }} 
                    tooltip="Info">Informacija</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={this.state.showCheckboxes}
                deselectOnClickaway={this.state.deselectOnClickaway}
                showRowHover={this.state.showRowHover}
              >
               { allPatients}
                    <TableRow >
                    <TableRowColumn>firstName</TableRowColumn>
                    <TableRowColumn>lastName</TableRowColumn>
                    <TableRowColumn>personalCode</TableRowColumn>
                    {/* <TableRowColumn>illnessTLKCode</TableRowColumn> */}
                    <TableRowColumn>
                        <DropDownMenu className="routeToComponent" /* onClick={this.openModal} */
                            value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={""} primaryText="Daugiau" />
                            <MenuItem value={"receptai"} primaryText="Receptai" 
                                      containerElement={<Link to="/doctor/prescriptions" />}/>
                            <MenuItem value={"ligos įrašai"} primaryText="Ligos įrašai" 
                                      containerElement={<Link to="/doctor/medicalRecords" />}/>
                            <MenuItem value={"naujas ligos įrašas"} primaryText="Naujas ligos įrašas" />
                            <MenuItem value={"naujas receptas"} primaryText="Naujas receptas" />
                        </DropDownMenu>
                    {/*<FlatButton label="Daugiau" primary={true} /* onClick={this.openModal}  />*/}
                    </TableRowColumn>
                  </TableRow> 
              </TableBody>
            </Table> 
        </div>
        </MuiThemeProvider>
    );
  }
}
export default PatientsListTable;