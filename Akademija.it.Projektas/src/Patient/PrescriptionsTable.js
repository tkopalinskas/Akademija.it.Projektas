import React, {Component} from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import InformationModal from './InformationModal'
import FlatButton from 'material-ui/FlatButton/FlatButton';

const styles ={
  marginLeft: 0,
  marginRight: 10
  
}

class PrescriptionsTable extends Component {
    constructor() {
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

          prescriptions: [],           
            validUntil: '',
            prescriptionDate: '',
            timesUsed: 0,
            activeIngredient: '',
            description: '',
            number: '',

          prescriptionInfo:[]
      }
  }

  /*get single prescription*/
    openModal = (number) => {
      console.log("number:"+number);
      axios.get(`http://localhost:8081/patient/prescriptions/`+ number)

          .then((response) => { this.setState({ prescriptionInfo: response.data }) 
            this.setState({ showModal: !this.state.showModal })
            console.log("perscription info", this.state.prescriptionInfo)
            console.log(this.state.showModal)})
            .catch((error) => {
              console.log(error);
              
            })
  }

  /*get all patient's prescriptions*/
    componentWillMount() {
       axios
            .get("http://localhost:8081/patient/prescriptions")
            .then((response) => {
                console.log(response);
                this.setState({prescriptions: response.data});
            })
            .catch((error) => {
                console.log(error);
            }); 
    }

    render() {

      var allPrescriptions = this.state.prescriptions.map((prescription, index) => (
        <TableRow key={index}  onClick={this.openModal} >
            {/* <TableRowColumn>{prescription.number}</TableRowColumn> */}
            <TableRowColumn>{prescription.validUntil}</TableRowColumn>
            <TableRowColumn>{prescription.prescriptionDate}</TableRowColumn>
            <TableRowColumn>{prescription.timesUsed}</TableRowColumn>
            <TableRowColumn>{prescription.activeIngredient}</TableRowColumn>
            <TableRowColumn><FlatButton label="Info" primary={true} onClick={()=>this.openModal(prescription.number)} /></TableRowColumn>
        </TableRow>
    ))

    if (!this.state.prescriptions) {
        return null;
    }
console.log(this.state.prescriptionInfo)
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
                <TableHeaderColumn colSpan="5" tooltip="Receptai" style={{textAlign: 'center'}}>
                  Receptai
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn 
                  className="validUntil"
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word"
                  }} 
                  tooltip="Galiojimo data">Galiojimo data</TableHeaderColumn>
                <TableHeaderColumn 
                  className="prescriptionDate"
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word"
                  }} 
                  tooltip="Išrašymo data">Išrašymo data</TableHeaderColumn>
                <TableHeaderColumn 
                  className="timesUsed"
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word"
                  }} 
                  tooltip="Recepto panaudojimų skaičius">Recepto panaudojimų skaičius</TableHeaderColumn>
                <TableHeaderColumn 
                  className="activeIngredient"
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word"
                  }}
                  tooltip="Veiklioji medžiaga">Veiklioji medžiaga</TableHeaderColumn>
                <TableHeaderColumn 
                  className="informationButton"
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
              { allPrescriptions}
              {/* <TableRow>
                <TableRowColumn>validUntil</TableRowColumn>
                <TableRowColumn>prescriptionDate</TableRowColumn>
                <TableRowColumn>timesUsed</TableRowColumn>
                <TableRowColumn>activeIngredient</TableRowColumn>
                <TableRowColumn>description<FlatButton label="Info" primary={true} onClick={this.openModal} /></TableRowColumn>
              </TableRow> */}
            </TableBody>
            
          </Table>
          <InformationModal
                        open={this.state.showModal}
                        closeAction={this.openModal}
                        prescriptionInfo={this.state.prescriptionInfo} />
        </div>
        </MuiThemeProvider>
      );
    }
  };
export default PrescriptionsTable;