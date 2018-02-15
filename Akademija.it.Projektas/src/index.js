import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './Admin/Admin';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AdminPasswordChangeComponent from './Admin/PasswordChange/AdminPasswordChangeComponent';
//import PatientPasswordChangeComponent from './Patient/PasswordChange/PatientPasswordChangeComponent';
import PatientContainer from './Patient/PatientContainer';
//import PrescriptionsTable from './Patient/PrescriptionsTable';
//import MedicalRecordsTable from './Patient/MedicalRecordsTable';


ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" name="home" component={App} />
            <Route exact path="/admin/" name="loginToAdmin" component={Admin} />
            <Route path="/patient/" name="loginToPatient" component={PatientContainer} />
            <Admin />
        </Switch>
    </HashRouter>,

    document.getElementById('root')
);

