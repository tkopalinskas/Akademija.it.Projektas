import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import RecordsTableForDoctor from './RecordsTableForDoctor';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import NewMedicalRecord from './NewMedicalRecord';

const rowStyle={
    margin: 0,
}

const containerStyle={
    padding: 0,
}
const personId = window.location.href.substring(window.location.href.length - 11)
class RecordsWithAddNew extends Component{

    constructor(){
        super();
        this.state={
            personalId: '',
            showModal: false,
        }
    }
    
    /* opens a medical record form */
    openMedicalRecordModal = () => {
        this.setState({ showModal: !this.state.showModal });
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.setState({
                personalId: personId,
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
                        <RaisedButton className="addNewRecord" id="addRecord" label="Naujas įrašas" primary={true} onClick={this.openMedicalRecordModal} />
                    </Col>
                    <Col md="2">
                        <Link to="/doctor/patient/prescriptions"><RaisedButton className="linkToPrescriptions" id="prescriptionsTable" label="Receptai" primary={true}/></Link>
                    </Col>
                    <Col md="12">
                        <RecordsTableForDoctor/>
                        <NewMedicalRecord
                            open={this.state.showModal}
                            personalId={personId}
                            closeAction={this.openMedicalRecordModal} />
                    </Col>
                    </Row>
                    </Container> 
                </div>
            </MuiThemeProvider>
        )
    }

}
export default RecordsWithAddNew