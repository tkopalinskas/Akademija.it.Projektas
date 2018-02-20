import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import App from '../App';
import DoctorPasswordChangeComponent from './PasswordChange/DoctorPasswordChangeComponent';
import PatientsListTable from './PatientsListTable';
import MedicalRecordsTable from '../Patient/MedicalRecordsTable';
import PrescriptionsTable from '../Patient/PrescriptionsTable';

class DoctorWindowNavigation extends Component{
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path="/" name="home" component={App} /> 
                    <Route path="/doctor/changePassword" name="changeDoctorsPassword" component={DoctorPasswordChangeComponent} />
                    <Route path="/doctor/patientsList" name="patientsList" component={PatientsListTable} />
                    <Route path="/doctor/medicalRecords" name="medicalRecords" component={MedicalRecordsTable} />
                    <Route path="/doctor/prescriptions" name="prescription" component={PrescriptionsTable} />
                </Switch>
            </main>
        )
    }
}
export default DoctorWindowNavigation;