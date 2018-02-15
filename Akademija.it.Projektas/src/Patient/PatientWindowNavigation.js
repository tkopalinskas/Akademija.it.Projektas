import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import App from '../App';
import PatientPasswordChangeComponent from './PasswordChange/PatientPasswordChangeComponent';
import PrescriptionsTable from './PrescriptionsTable';
import MedicalRecordsTable from './MedicalRecordsTable';

class PatientWindowNavigation extends Component{
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path="/" name="home" component={App} /> 
                    <Route path="/patient/changePassword" name="changePatientsPassword" component={PatientPasswordChangeComponent} />
                    <Route path="/patient/prescriptions" name="prescriptions" component={PrescriptionsTable} />
                    <Route path="/patient/medicalRecords" name="medicalRecords" component={MedicalRecordsTable} />
                </Switch>
            </main>
        )
    }
}
export default PatientWindowNavigation;