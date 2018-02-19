import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import RegisterAdmin from './SideBar/Registration/RegisterAdmin';
import RegisterDoctor from './SideBar/Registration/RegisterDoctor';
import RegisterPatient from './SideBar/Registration/RegisterPatient';
import RegisterPharmacist from './SideBar/Registration/RegisterPharmacist';
import DoctorAssignmentToPatient from './SideBar/DrAndPatient'
import ListofAdmins from './DropdownLists/ListofAdmins';
import ListofDoctors from './DropdownLists/ListofDoctors';
import ListofPatients from './DropdownLists/ListofPatients';
import ListofPharmacists from './DropdownLists/ListofPharmacists';
import AdminPasswordChangeComponent from './PasswordChange/AdminPasswordChangeComponent';

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
                    <Route exact path="/admin/changePassword" component={AdminPasswordChangeComponent}/>
                    <Route exact path="/admin/assigndoctor" component={DoctorAssignmentToPatient} />
                </Switch>
            </main>
        );
    }
}

export default AdminRouting;