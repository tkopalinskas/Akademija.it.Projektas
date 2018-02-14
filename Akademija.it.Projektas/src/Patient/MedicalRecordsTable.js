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
import FlatButton from 'material-ui/FlatButton/FlatButton';

const styles ={
  marginLeft: 0,
  marginRight: 10
  
}

class MedicalRecordsTable extends Component {
    constructor(){
        super();
        this.state = {
            fixedHeader: true,
            showRowHover: true,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            height: '300px',

            visits: [],
            dateOfVisit: '',
            illnessTLKCode: '',
            doctorsFullName: '',
            description: ''
        }
    }
    componentWillMount(){
        axios
            .get("http://localhost:8081/patient/medicalRecords")
            .then((response) => {
                console.log(response);
                this.setState({visits: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    } 

      render() {
        var allMedicalRecords = this.state.visits.map((records, index) => (
          <TableRow key={index}/*  onClick={this.openModal} */>
              <TableRowColumn>{records.dateOfVisit}</TableRowColumn>
              <TableRowColumn>{records.illnessTLKCode}</TableRowColumn>
              <TableRowColumn>{records.doctorsFullName}</TableRowColumn>
              <TableRowColumn>{records.description}<FlatButton label="Info" primary={true} /* onClick={this.openModal} */ /></TableRowColumn>
          </TableRow>
      ))

      if (!this.state.visits) {
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
                <TableRow>
                  <TableHeaderColumn colSpan="3" tooltip="Ligos įrašai" style={{textAlign: 'center'}}>
                  Ligos įrašai
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn 
                    style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word"
                    }} 
                    tooltip="Vizito data">Vizito data</TableHeaderColumn>
                  <TableHeaderColumn 
                    style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word"
                    }} 
                    tooltip="Ligos TLK kodas">Ligos TLK kodas</TableHeaderColumn>
                  <TableHeaderColumn 
                    style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word"
                    }} 
                    tooltip="Gydytojo vardas">Gydytojo vardas</TableHeaderColumn>
                  <TableHeaderColumn 
                    style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word"
                    }} 
                    tooltip="Aprašymas">Aprašymas</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={this.state.showCheckboxes}
                deselectOnClickaway={this.state.deselectOnClickaway}
                showRowHover={this.state.showRowHover}
              >
               { allMedicalRecords}
                  <TableRow >
                    <TableRowColumn>dateOfVisit</TableRowColumn>
                    <TableRowColumn>illnessTLKCode</TableRowColumn>
                    <TableRowColumn>doctorsFullName</TableRowColumn>
                    <TableRowColumn>description<FlatButton label="Info" primary={true} /* onClick={this.openModal} */ /></TableRowColumn>
                  </TableRow>
              </TableBody>
            </Table> 
        </div>
        </MuiThemeProvider>
    );
  }
}
export default MedicalRecordsTable;