import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import PrescriptionsTable from '../Patient/PrescriptionsTable';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import NewPrescription from './NewPrescription';

class PrescriptionsWithAddNew extends Component{

    constructor(){
        super();
        this.state={
            personalCode: '',
            showModal: false,
        }
    }

    openPrescriptionModal = () => {
        this.setState({ showModal: !this.state.showModal });
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.setState({
                personalCode: e.target.value,
            });
          console.log('do validate');
        }
    }

    render(){
        console.log("personal", this.state.personalCode)
        return(
            <MuiThemeProvider>
                <div>
                    <div>
                        <Search style={{ color: '#9E9E9E', textAlign: 'left', marginRight: '25', marginTop: '25'}} />
                        <TextField hintText="Pacientų paieška" underlineShow={true} onKeyPress={this.handleKeyPress}/>
                    </div>
                    <RaisedButton className="addNewPrescription" id="addPrescription" label="Naujas receptas" primary={true} onClick={this.openPrescriptionModal} />
                    <PrescriptionsTable/>
                    <NewPrescription
                        open={this.state.showModal}
                        closeAction={this.openPrescriptionModal} />
                </div>
            </MuiThemeProvider>
        )
    }

}
export default PrescriptionsWithAddNew