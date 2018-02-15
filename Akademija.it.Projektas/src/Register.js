import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Tabs, Tab } from 'material-ui/Tabs';
import axios from 'axios';
import RegisterDoctor from './Registration/RegisterDoctor'
import RegisterPatient from './Registration/RegisterPatient';
import RegisterPharmacist from './Registration/RegisterPharmacist';

class Register extends Component {

  state={
    registerDoctor: [],
    registerPatient: [],
    value: '0',
  };

  handleChange=(value) => {
    this.setState({
      value: value,
    });
  }
  /* componentWillMount() {
    var registerDoctor=[];
    registerDoctor.push(<RegisterDoctor parentContext={this} />);
    this.setState({
      registerDoctor: registerDoctor
    })
    var registerPatient=[];
    registerPatient.push(<RegisterPatient parentContext={this} />);
    this.setState({
      registerPatient:registerPatient
    })
    var registerPharmacist=[];
    registerPharmacist.push(<RegisterPharmacist parentContext={this} />);
    this.setState({
      registerPharmacist : registerPharmacist
    })
  } */



  render() {
    return (
      {/* <MuiThemeProvider>
        <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Regiter Dr" value="0">
          <div>
            <h2 style={styles.headline}>įveskite informaciją</h2>
            <div>
              <RegisterDoctor parentContext={this} appContext={this.props.parentContext} />
              </div>
          </div>
        </Tab>
        <Tab label="Register Patient" value="1">
          <div>
            <h2 style={styles.headline}>įveskite informaciją</h2>
            <div>
            <RegisterPatient parentContext={this} appContext={this.props.parentContext} />
              </div>
          </div>
        </Tab>
        <Tab label="Register Pharmacist" value="2">
          <div>
            <h2 style={styles.headline}>įveskite informaciją</h2>
            <div>
            <RegisterPharmacist parentContext={this} appContext={this.props.parentContext} />
              </div>
          </div>
        </Tab>
      </Tabs>
      </MuiThemeProvider> */}
    );
  }
}


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },

};
export default Register;