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
import SinglePrescriptionInformation from './SinglePrescriptionInformation'
import FlatButton from 'material-ui/FlatButton/FlatButton';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import {API} from "../Admin/SideBar/Registration/HostUrl";

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
            doctorsFullName:'',
            timesUsed:'',
            activeIngredient: '',
            amountPerDose:'',
            units:'',
            totalAmount:'',
            totalUnits:'',
            description: '',
            number: '',
            prescriptionId:'',

          personalCode: '',
          validPrescriptionInfo:[]
      }
  }

  /* search for a patient from database by personalId and get information*/
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      let personalId=e.target.value;
        this.setState({
            personalCode: personalId,
        }); 
        /* let userData = window.sessionStorage.getItem('userData');
        let user = JSON.parse(userData); */
      axios
        .get(API+"/pharmacist/" +personalId +"/prescriptions")
        .then((response) => {
            console.log(response);
            this.setState({validPrescriptions: response.data});
        })
        .catch((error) => {
            console.log(error);
            alert("Pacientas neegzistuoja!");
      }); e.preventDefault();  
    }
  }
  
  /*gets single prescription*/
  openModal = (/* event, index, */ number) => {
   /*  let prescriptionID = window.sessionStorage.getItem('prescription-id');
    this.setState({prescriptionId : JSON.parse(prescriptionID)}); */
   /*  this.setState({prescriptionId:prescriptionID}); */
     /*  console.log("prescription id:"+prescriptionID); */
      console.log("number:"+number);
      axios.get(API+"/pharmacist/prescriptions/" + number)
          .then((response) => { this.setState({ validPrescriptionInfo: response.data }) 
            this.setState({ showModal: !this.state.showModal })
            console.log("perscription info", this.state.validPrescriptionInfo)
            console.log(this.state.showModal)
          })
          .catch((error) => {
              console.log(error);     
          });     
  }

  /*closes prescription modal*/
  closeModal=()=>{
    this.setState({showModal: false})
  }
 
    render() {

      if (!this.state.validPrescriptions) {   
        return null;
      }

       console.log("personal",this.state.personalCode); 
       console.log("info",this.state.validPrescriptionInfo); 
       console.log("number", this.state.number)

      var allPrescriptions = this.state.validPrescriptions.map((prescription, index) => (
        <TableRow key={index} >
            {/* <TableRowColumn>{prescription.number}</TableRowColumn> */}
            <TableRowColumn>{prescription.validUntil}</TableRowColumn>
            <TableRowColumn>{prescription.prescriptionDate}</TableRowColumn>
            <TableRowColumn><FlatButton id="listOfUsesButton" label="Sąrašas" primary={true} /* onClick={()=>this.openModal(uses.number)} */ />  {prescription.timesUsed}</TableRowColumn>
            <TableRowColumn>{prescription.activeIngredient}</TableRowColumn>
            <TableRowColumn><FlatButton id="moreButton" label="Daugiau" primary={true} /* data-prescription-id={prescription.prescriptionId} */ onClick={()=>this.openModal(prescription.number)} /></TableRowColumn>
        </TableRow>
    ))

      return (
        <MuiThemeProvider>
        <div>
        <Container fluid={true} style={containerStyle}>
        <Row style={rowStyle}>
        <Col md="12">
          <div>
            <Search style={{ color: '#9E9E9E', textAlign: 'left', marginRight: '15', marginTop: '25'}} />
            <TextField hintText="Įveskite paciento asmens kodą" 
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
                Galiojantys paciento receptai</TableHeaderColumn>
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
                  tooltip="Panaudojimų skaičius">Panaudojimų sąrašas ir skaičius</TableHeaderColumn>
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
                  tooltip="Informacija">Informacija</TableHeaderColumn>
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
          <SinglePrescriptionInformation
                        open={this.state.showModal}
                        closeAction={this.closeModal}
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