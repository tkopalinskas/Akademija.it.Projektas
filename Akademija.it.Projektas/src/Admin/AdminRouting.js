import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import RegisterAdmin from './SideBar/Registration/RegisterAdmin';
import RegisterDoctor from './SideBar/Registration/RegisterDoctor';
import RegisterPatient from './SideBar/Registration/RegisterPatient';
import RegisterPharmacist from './SideBar/Registration/RegisterPharmacist';
import ListofAdmins from './DropdownLists/ListofAdmins';
import ListofDoctors from './DropdownLists/ListofDoctors';
import ListofPatients from './DropdownLists/test';
import ListofPharmacists from './DropdownLists/ListofPharmacists';

class AdminRouting extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/admin/register/newadmin" component={RegisterAdmin} />
                    <Route exact path="/admin/register/newdoctor" component={RegisterDoctor} />
                    <Route exact path="/admin/register/newpatient" component={RegisterPatient} />
                    <Route exact path="/admin/register/newpharmacist" component={RegisterPharmacist} />
                    <Route exact path="/admin/alladmins" component={ListofAdmins} />
                    <Route exact path="/admin/alldoctors" component={ListofDoctors} />
                    <Route exact path="/admin/allpatients" component={ListofPatients} />
                    <Route exact path="/admin/allpharmacists" component={ListofPharmacists} />
                </Switch>
            </main>
        );
    }
}

export default AdminRouting;