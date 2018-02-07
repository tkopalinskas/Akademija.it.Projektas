import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideBarMain from './SideBar/SideBarMain';
import AdminRouting from './AdminRouting'
import TopBar from './SideBar/TopBar'




class Admin extends React.Component {



    render() {
        return (           
            <MuiThemeProvider>
                <div>
                    <TopBar />
                    <SideBarMain />
            
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
            </MuiThemeProvider>
        );
    }
}


export default Admin;