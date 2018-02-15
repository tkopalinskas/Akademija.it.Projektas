import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './Admin/Admin';
import { HashRouter, Route, Switch } from 'react-router-dom';
//import AdminPasswordChangeComponent from './Admin/PasswordChange/AdminPasswordChangeComponent';
import PatientContainer from './Patient/PatientContainer';
import PharmacistContainer from './Pharmacist/PharmacistContainer';


ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" name="home" component={App} />
            <Route exact path="/admin/" name="loginToAdmin" component={Admin} />
            <Route path="/patient/" name="loginToPatient" component={PatientContainer} />
            <Route path="/pharmacist/" name="loginToPharmacist" component={PharmacistContainer} />
           {/*  <Route path="/admin/changePassword" name="changeAdminsPassword" component={AdminPasswordChangeComponent} /> */}
            <Admin />
        </Switch>
    </HashRouter>,

    document.getElementById('root')
);

