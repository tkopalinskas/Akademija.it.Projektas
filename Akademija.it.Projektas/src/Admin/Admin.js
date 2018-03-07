import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideBarMain from './SideBar/SideBarMain';
import AdminRouting from './AdminRouting'
import TopBar from './SideBar/TopBar'
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


const rowStyle = {
    margin: 0,
}

class Admin extends React.Component {

 //    let userData = window.sessionStorage.getItem('userData');
    //    if(userData==null)
    //         window.location.href="/#/";
    //    else{
    //        let user = JSON.parse(userData);
    //        if(user.role!='ADMIN')
    //             window.location.href="/#/";
    //    }

    render() {
        return (           
            <MuiThemeProvider>
                <div className="adminPanel">
                    <TopBar />
                    <div className="sideBar">
                    <Row style={rowStyle}>
                        <Col xs="3" md="3">
                            <SideBarMain />
                        </Col>
                        <Col xs="9" md="9">
                            <AdminRouting />
                        </Col>
                    </Row>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}


export default Admin;