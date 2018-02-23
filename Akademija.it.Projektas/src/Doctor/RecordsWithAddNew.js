import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import MedicalRecordsTable from '../Patient/MedicalRecordsTable';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';

class RecordsWithAddNew extends Component{

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
                    <RaisedButton className="addNewRecord" id="addRecord" label="Naujas įrašas" primary={true} onClick={(event) => this.handleClick(event)} />
                    <MedicalRecordsTable/>
                </div>
            </MuiThemeProvider>
        )
    }

}
export default RecordsWithAddNew