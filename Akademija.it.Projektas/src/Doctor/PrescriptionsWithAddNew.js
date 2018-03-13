import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import PrescriptionsTableForDoctor from './PrescriptionsTableForDoctor';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import NewPrescription from './NewPrescription';

const rowStyle={
    margin: 0,
}

const containerStyle={
    padding: 0,
}

class PrescriptionsWithAddNew extends Component{

    constructor(){
        super();
        this.state={
            personalId: '',
            showModal: false,
        }
    }

    /* opens a prescription form */
    openPrescriptionModal = () => {
        this.setState({ showModal: !this.state.showModal });
    };
    
    /* gets a personal code value when enter key is hit */
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.setState({
                personalId: e.target.value,
            });
        }
    };

    render(){

        return(
            <MuiThemeProvider>
                <div>
                    <Container fluid={true} style={containerStyle}>
                    <Row style={rowStyle}>
                    <Col md="12">
                        <div>
                            <Search style={{ color: '#9E9E9E', textAlign: 'left', marginRight: '25', marginTop: '25'}} />
                            <TextField hintText="Pacientų paieška" underlineShow={true} onKeyPress={this.handleKeyPress}/>
                        </div><br/>
                    </Col><br/>
                    <Col md="10">
                        <RaisedButton className="addNewPrescription" id="addPrescription" label="Naujas receptas" primary={true} onClick={this.openPrescriptionModal} />
                    </Col>
                    <Col md="2">
                        <Link to="/doctor/patient/medicalRecords"><RaisedButton className="linkToMedicalRecords" id="medicalRecordsTable" label="Ligos įrašai" primary={true}/></Link>
                    </Col>
                    <Col md="12">
                        <PrescriptionsTableForDoctor/>
                        <NewPrescription
                            open={this.state.showModal}
                            closeAction={this.openPrescriptionModal} />
                    </Col>
                    </Row>
                    </Container> 
                </div>
            </MuiThemeProvider>
        )
    }

}
export default PrescriptionsWithAddNew