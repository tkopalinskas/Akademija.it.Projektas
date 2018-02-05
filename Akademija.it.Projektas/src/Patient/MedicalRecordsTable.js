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
//import MedicalRecordsComponent from './MedicalRecordsComponent';

const styles ={
  marginLeft: 200,
  width: 1100  
}

const visits = [
    /*{
      dateOfVisit: 'dfgh',
      illnessTLKCode:'sef',
      doctorsFullName:'aesgr',
      description: 'segrd'
    },
    
    {
      name: 'Randal White',
      status: 'Unemployed',
    },
    {
      name: 'Stephanie Sanders',
      status: 'Employed',
    },
    {
      name: 'Steve Brown',
      status: 'Employed',
    },
    {
      name: 'Joyce Whitten',
      status: 'Employed',
    },
    {
      name: 'Samuel Roberts',
      status: 'Employed',
    },
    {
      name: 'Adam Moore',
      status: 'Employed',
    }, */
  ];

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
            .get("http://localhost:8081/patient/:id/medicalRecords")
            .then((response) => {
                console.log(response);
                this.setState({visits: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    } 

      render() {
        return (
        <MuiThemeProvider>
        <div>
        {/* <MedicalRecordsComponent allMedicalRecords={this.state.visits}/> */}
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
                    tooltip="Nr.">Nr.</TableHeaderColumn>
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
                {visits.map( (row, index) => (
                  <TableRow key={index}>
                    <TableRowColumn>{index}</TableRowColumn>
                    <TableRowColumn>{row.dateOfVisit}</TableRowColumn>
                    <TableRowColumn>{row.illnessTLKCode}</TableRowColumn>
                    <TableRowColumn>{row.doctorsFullName}</TableRowColumn>
                    <TableRowColumn>{row.description}</TableRowColumn>
                  </TableRow>
                  ))}
              </TableBody>
            </Table> 
        </div>
        </MuiThemeProvider>
    );
  }
}
export default MedicalRecordsTable;