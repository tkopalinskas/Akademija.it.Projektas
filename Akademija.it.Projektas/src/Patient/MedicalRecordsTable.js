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
import RecordInformationModal from './RecordInformationModal'
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
            showCheckboxes: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            height: '300px',
            showModal: false,

            visits: [],
            recordId:'',
            dateOfVisit: '',
            illnessTLKCode: '',
            lengthOfVisit:'',
            compensated: '',
            visitIsRepeated: '',
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
    
  /*gets single prescription*/
  openModal = (recordId) => {
    console.log("number:"+recordId);
    axios.get("http://localhost:8081/patient/medicalRecords/" + recordId)
      .then((response) => { this.setState({ recordInfo: response.data }) 
      this.setState({ showModal: !this.state.showModal })
      console.log("record info", this.state.recordInfo)
      console.log(this.state.showModal)
    })
      .catch((error) => {
        console.log(error);
    })
  }
  /*closes prescription modal*/
  closeModal=()=>{
    this.setState({showModal: false})
  }

      render() {
        var allMedicalRecords = this.state.visits.map((records, index) => (
          <TableRow key={index}>
              <TableRowColumn>{records.recordId}</TableRowColumn>
              <TableRowColumn>{records.dateOfVisit}</TableRowColumn>
              <TableRowColumn>{records.illnessTLKCode}</TableRowColumn>
              {/* <TableRowColumn>{records.doctorsFullName}</TableRowColumn> */}
              <TableRowColumn><FlatButton label="Info" primary={true} onClick={()=>this.openModal(records.recordId)}  /></TableRowColumn>
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
                  <TableHeaderColumn colSpan="4" tooltip="Ligos įrašai" style={{textAlign: 'center'}}>
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
                    tooltip="Info">Informacija</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={this.state.showCheckboxes}
                deselectOnClickaway={this.state.deselectOnClickaway}
                showRowHover={this.state.showRowHover}
              >
               { allMedicalRecords}
                  {/* <TableRow >
                    <TableRowColumn>dateOfVisit</TableRowColumn>
                    <TableRowColumn>illnessTLKCode</TableRowColumn>
                    <TableRowColumn>doctorsFullName</TableRowColumn>
                    <TableRowColumn>description<FlatButton label="Info" primary={true} /* onClick={this.openModal} */ /*/></TableRowColumn>
                  </TableRow> */}
              </TableBody>
            </Table>
            <RecordInformationModal
                        open={this.state.showModal}
                        closeAction={this.closeModal}
                        recordInfo={this.state.recordInfo} /> 
        </div>
        </MuiThemeProvider>
    );
  }
}
export default MedicalRecordsTable;