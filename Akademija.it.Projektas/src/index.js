import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './Admin/Admin';
import { HashRouter, Route, Switch } from 'react-router-dom';
import RegisterDoctor from './Admin/Registration/RegisterDoctor';
import RegisterPatient from './Admin/Registration/RegisterPatient';
import RegisterPharmacist from './Admin/Registration/RegisterPharmacist';
import RegisterAdmin from './Admin/Registration/RegisterAdmin';
import AdminPasswordChangeComponent from './Admin/PasswordChange/AdminPasswordChangeComponent';
//import PatientPasswordChangeComponent from './Patient/PasswordChange/PatientPasswordChangeComponent';
import PatientContainer from './Patient/PatientContainer';
//import PrescriptionsTable from './Patient/PrescriptionsTable';
//import MedicalRecordsTable from './Patient/MedicalRecordsTable';


ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" name="home" component={App} />
            <Route exact path="/admin/:id" name="loginToAdmin" component={Admin} />
            <Route path="/patient/:id" name="loginToPatient" component={PatientContainer} />
            <Route path="/admin/:id/changePassword" name="changeAdminsPassword" component={AdminPasswordChangeComponent} />
            <Route path="/admin/doctor" name="doctor" component={RegisterDoctor} />
            <Route path="/admin/patient" name="patient" component={RegisterPatient} />
            <Route path="/admin/pharmacist" name="pharmacist" component={RegisterPharmacist} />
            <Route path="/admin/admin" name="admin" component={RegisterAdmin} />
        </Switch>
    </HashRouter>,

    document.getElementById('root')
);

