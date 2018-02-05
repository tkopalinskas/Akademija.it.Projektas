import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideBarMain from './SideBar/SideBarMain';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AdminRouting from './AdminRouting'
import TopBar from './SideBar/TopBar'




class Admin extends React.Component {



    render() {
        return (
            <div>
            <MuiThemeProvider>
                    <TopBar />
                    <SideBarMain />
            </MuiThemeProvider>
            <div style={{
        alignSelf: 'center',
        margin: '30px',
        width: '80%',
        height: '100%',
        float: 'right',
      }}>
            <AdminRouting />
      </div>
            </div>
        );
    }
}


export default Admin;