import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import PrescriptionsTable from '../Patient/PrescriptionsTable';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';

class PrescriptionsWithAddNew extends Component{

    constructor(){
        super();
        this.state={
            personalCode: ''
        }
    }
    
    handleClick(event) {
        
    }

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
                    <RaisedButton className="addNewPrescription" id="addPrescription" label="Naujas receptas" primary={true} onClick={(event) => this.handleClick(event)} />
                    <PrescriptionsTable/>
                </div>
            </MuiThemeProvider>
        )
    }

}
export default PrescriptionsWithAddNew