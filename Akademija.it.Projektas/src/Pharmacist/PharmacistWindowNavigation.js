import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import App from '../App';
import PharmacistPasswordChangeComponent from './PasswordChange/PharmacistPasswordChangeComponent';
import PharmacistsPrescriptionsTable from './PharmacistsPrescriptionsTable';

class PharmacistWindowNavigation extends Component{
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path="/" name="home" component={App} /> 
                    <Route path="/pharmacist/changePassword" name="changePharmacistsPassword" component={PharmacistPasswordChangeComponent} />
                    <Route path="/pharmacist" name="patientsprescriptions" component={PharmacistsPrescriptionsTable} />
                </Switch>
            </main>
        )
    }
}
export default PharmacistWindowNavigation;