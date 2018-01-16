import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './Admin'
import { HashRouter, Route, Switch } from 'react-router-dom';
import RegisterDoctor from './Registration/RegisterDoctor';
import RegisterPatient from './Registration/RegisterPatient';
import RegisterPharmasist from './Registration/RegisterPharmasist';
import RegisterAdmin from './Registration/RegisterAdmin';
//import Visit from './Visit/Visit'


ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" name="home" component={App} />
            <Route exact path ="/admin" name="admin" component={Admin} />
            <Route path ="/admin/doctor" name="register" component={RegisterDoctor} />
            <Route path ="/admin/patient" name="visit" component={RegisterPatient} />
            <Route path = "/admin/pharmasist" name = "pharmasist" component = {RegisterPharmasist} />
            <Route path = "/admin/admin" name = "admin" component = {RegisterAdmin} />
        </Switch>
    </HashRouter>,

    document.getElementById('root')
);

