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
import PrescriptionInfoModal from './PrescriptionInfoModal'
import FlatButton from 'material-ui/FlatButton/FlatButton';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const rowStyle={
    margin: 0,
}

const containerStyle={
    padding: 0,
}

const styles ={
  marginLeft: 0,
  marginRight: 10,
  padding: 0
  
}

class PharmacistsPrescriptionsTable extends Component {
    constructor(props) {
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

          validPrescriptions: [],           
            validUntil: '',
            prescriptionDate: '',
            timesUsed: 0,
            activeIngredient: '',
            description: '',
            number: '',

          personalId: '',
          validPrescriptionInfo:[]
      }
  }

  /* search for a patient from database by personalId and get information*/
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      let personalId=e.target.value;
        this.setState({
            personalId: personalId,
        }); 
      
      axios
        .get('http://localhost:8081/pharmacist/patient-prescriptions/' + personalId)
        .then((response) => {
            console.log(response);
            this.setState({validPrescriptions: response.data});
        })
        .catch((error) => {
            console.log(error);
            alert("Pacientas neegzistuoja!");
      }); 
    }
}
  /*get single prescription*/
    openModal = (personalId, number) => {
      console.log(number);
      axios.get('http://localhost:8081/pharmacist/'+ personalId + "/prescriptions" + number)
          .then((response) => { this.setState({ validPrescriptionInfo: response.data }) })
                  this.setState({ showModal: !this.state.showModal })
          .catch((error) => {
            console.log(error);
          }); 
  }
 
    render() {

       console.log("personal",this.state.personalCode); 
       console.log("info",this.state.validPrescriptionInfo); 
       console.log("number", this.state.number)

      var allPrescriptions = this.state.validPrescriptions.map((prescription, index) => (
        <TableRow key={index}  onClick={this.openModal} >
            {/* <TableRowColumn>{prescription.number}</TableRowColumn> */}
            <TableRowColumn>{prescription.validUntil}</TableRowColumn>
            <TableRowColumn>{prescription.prescriptionDate}</TableRowColumn>
            <TableRowColumn>{prescription.timesUsed}</TableRowColumn>
            <TableRowColumn>{prescription.activeIngredient}</TableRowColumn>
            <TableRowColumn>{/* {prescription.description} */}<FlatButton label="Info" primary={true} /* onClick={this.openModal(prescription.number)} */ /></TableRowColumn>
        </TableRow>
    ))

    if (!this.state.validPrescriptions) {
        return null;
    }

      return (
        <MuiThemeProvider>
        <div>
        <Container fluid={true} style={containerStyle}>
        <Row style={rowStyle}>
        <Col md="12">
          <div>
            <Search style={{ color: '#9E9E9E', textAlign: 'left', marginRight: '15', marginTop: '25'}} />
            <TextField hintText="Paciento asmens kodas" 
                      underlineShow={true} 
                      onKeyPress={this.handleKeyPress}/>
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
                <TableHeaderColumn colSpan="5" tooltip="Receptai" style={{textAlign: 'center'}}>
                  Receptai
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn 
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word"
                  }} 
                  tooltip="Galiojimo data">Galiojimo data</TableHeaderColumn>
                <TableHeaderColumn 
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word"
                  }} 
                  tooltip="Išrašymo data">Išrašymo data</TableHeaderColumn>
                <TableHeaderColumn 
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word"
                  }} 
                  tooltip="Panaudojimų skaičius">Panaudojimų skaičius</TableHeaderColumn>
                <TableHeaderColumn 
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word"
                  }}
                  tooltip="Veiklioji medžiaga">Veiklioji medžiaga</TableHeaderColumn>
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
              { allPrescriptions}
              {<TableRow>
                <TableRowColumn> {/* validUntil */} </TableRowColumn>
                <TableRowColumn>{/* prescriptionDate */}</TableRowColumn>
                <TableRowColumn>{/* timesUsed */}</TableRowColumn>
                <TableRowColumn>{/* activeIngredient */}</TableRowColumn>
                <TableRowColumn>{/* description */}{/* <FlatButton label="Info" primary={true} onClick={this.openModal} /> */}</TableRowColumn>
              </TableRow>}
            </TableBody>
          </Table>
          <PrescriptionInfoModal
              open={this.state.showModal}
              closeAction={this.openModal}
              validPrescriptionInfo={this.state.validPrescriptionInfo} />
          </Col>
          </Row>
          </Container> 
        </div>
        </MuiThemeProvider>
      );
    }
  };
export default PharmacistsPrescriptionsTable;