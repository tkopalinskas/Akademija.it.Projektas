import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import App from '../App';
import PasswordChangeComponent from '../PasswordChange/PasswordChangeComponent';
import PatientsListTable from './PatientsListTable';
import PrescriptionsWithAddNew from './PrescriptionsWithAddNew';
import RecordsWithAddNew from './RecordsWithAddNew';
import PatientFromDatabase from './PatientFromDatabase';

class DoctorWindowNavigation extends Component{
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path="/" name="home" component={App} /> 
                    <Route path="/doctor/changePassword" name="changeDoctorsPassword" component={PasswordChangeComponent} />
                    <Route path="/doctor/patientsList" name="patientsList" component={PatientsListTable} />
                    <Route path="/doctor/findPatient" name="patientfromDatabase" component={PatientFromDatabase} />
                    <Route path="/doctor/patient/medicalRecords" name="medicalRecords" component={RecordsWithAddNew} />
                    <Route path="/doctor/patient/prescriptions" name="prescription" component={PrescriptionsWithAddNew} />
                </Switch>
            </main>
        )
    }
}
export default DoctorWindowNavigation;